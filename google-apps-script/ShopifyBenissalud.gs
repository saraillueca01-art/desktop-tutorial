/**
 * Benissalud · Conector de Shopify (MOOD MATCHA) para la contabilidad
 *
 * La página contabilidad/benissalud.html llama a esta URL para descargar los pedidos
 * de la tienda. Así el acceso a Shopify se queda guardado aquí, en Google, y no en la web.
 *
 * Solo devuelve número de pedido, fecha, estado, total e IVA (ningún dato de clientes),
 * y solo a quien conozca la CLAVE.
 *
 * Instrucciones de instalación en CONECTAR-SHOPIFY.md
 *
 * Propiedades del script (Configuración del proyecto → Propiedades del script):
 *   CLAVE                  la contraseña que pondréis en la página de contabilidad
 *   SHOPIFY_TOKEN          token de la API Admin (empieza por shpat_)
 *     …o en su lugar…
 *   SHOPIFY_CLIENT_ID      ID de cliente de la app (Dev Dashboard de Shopify)
 *   SHOPIFY_CLIENT_SECRET  Secreto de la app
 */

const TIENDA = 'gu6dfz-vq.myshopify.com';
const API_VERSION = '2026-07';
const ZONA_HORARIA = 'Europe/Madrid';

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (!p.clave) return json_({ ok: true, mensaje: 'El conector de Shopify de Benissalud está activo.' });

  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('CLAVE') || p.clave !== props.getProperty('CLAVE')) {
    return json_({ ok: false, error: 'Clave incorrecta' });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.desde || '') || !/^\d{4}-\d{2}-\d{2}$/.test(p.hasta || '')) {
    return json_({ ok: false, error: 'Fechas no válidas' });
  }

  try {
    return json_({ ok: true, tienda: TIENDA, pedidos: obtenerPedidos_(p.desde, p.hasta) });
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

// Pedidos procesados entre `desde` (incluido) y `hasta` (excluido), sin pruebas ni cancelados.
function obtenerPedidos_(desde, hasta) {
  const consulta = `
    query ($cursor: String, $q: String) {
      orders(first: 100, after: $cursor, query: $q, sortKey: PROCESSED_AT) {
        pageInfo { hasNextPage endCursor }
        nodes {
          id name processedAt cancelledAt test displayFinancialStatus
          currentTotalPriceSet { shopMoney { amount } }
          currentTotalTaxSet { shopMoney { amount } }
        }
      }
    }`;
  const q = `processed_at:>=${desde} processed_at:<${hasta}`;
  const pedidos = [];
  let cursor = null;
  do {
    const datos = graphql_(consulta, { cursor: cursor, q: q }).orders;
    datos.nodes.forEach(o => {
      if (o.test || o.cancelledAt) return;
      pedidos.push({
        id: o.id.split('/').pop(),
        nombre: o.name,
        fecha: Utilities.formatDate(new Date(o.processedAt), ZONA_HORARIA, 'yyyy-MM-dd'),
        estado: o.displayFinancialStatus,
        total: Number(o.currentTotalPriceSet.shopMoney.amount),
        iva: Number(o.currentTotalTaxSet.shopMoney.amount),
      });
    });
    cursor = datos.pageInfo.hasNextPage ? datos.pageInfo.endCursor : null;
  } while (cursor);
  return pedidos;
}

function graphql_(query, variables) {
  const resp = UrlFetchApp.fetch(`https://${TIENDA}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'post',
    contentType: 'application/json',
    headers: { 'X-Shopify-Access-Token': token_() },
    payload: JSON.stringify({ query: query, variables: variables }),
    muteHttpExceptions: true,
  });
  const cuerpo = JSON.parse(resp.getContentText() || '{}');
  if (resp.getResponseCode() !== 200 || cuerpo.errors) {
    throw new Error('Shopify respondió ' + resp.getResponseCode() + ': ' + JSON.stringify(cuerpo.errors || cuerpo));
  }
  return cuerpo.data;
}

// Token fijo (shpat_…) o, si no hay, uno temporal pedido con el ID y secreto de la app.
function token_() {
  const props = PropertiesService.getScriptProperties();
  const fijo = props.getProperty('SHOPIFY_TOKEN');
  if (fijo) return fijo;

  const cache = CacheService.getScriptCache();
  const guardado = cache.get('shopify_token');
  if (guardado) return guardado;

  const resp = UrlFetchApp.fetch(`https://${TIENDA}/admin/oauth/access_token`, {
    method: 'post',
    payload: {
      grant_type: 'client_credentials',
      client_id: props.getProperty('SHOPIFY_CLIENT_ID'),
      client_secret: props.getProperty('SHOPIFY_CLIENT_SECRET'),
    },
    muteHttpExceptions: true,
  });
  const datos = JSON.parse(resp.getContentText() || '{}');
  if (!datos.access_token) throw new Error('No se pudo obtener acceso a Shopify. Revisa SHOPIFY_TOKEN o el ID y secreto de la app.');
  cache.put('shopify_token', datos.access_token, Math.min(21600, Math.max(60, (datos.expires_in || 3600) - 300)));
  return datos.access_token;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Ejecuta esta función desde el editor para comprobar que Shopify responde (mira el registro de ejecución).
function probarConexion() {
  const anio = new Date().getFullYear();
  const pedidos = obtenerPedidos_(`${anio}-01-01`, `${anio + 1}-01-01`);
  Logger.log(`${pedidos.length} pedidos en ${anio}. Primero: ${JSON.stringify(pedidos[0] || null)}`);
}

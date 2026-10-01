/**
 * Benissalud · Test hormonal → Hoja de Google (y, opcional, Clientes de Shopify)
 *
 * Cada vez que alguien termina el test:
 *  1. Añade una fila en la hoja "Test hormonal · Correos Benissalud".
 *  2. (Opcional) Si pones SHOPIFY_TOKEN, la crea también en Shopify > Clientes
 *     con sus etiquetas (y suscrita a ofertas si marcó la casilla).
 */

const HOJA_ID = '1Fx2i9WzY8UgunCh-xtsBgdgkmcRC-fNiJKuorZrVvbQ';
const TIENDA = 'benissalud.myshopify.com';
const SHOPIFY_TOKEN = ''; // opcional: token "shpat_..." de una app personalizada de Shopify

const COLUMNAS = ['Fecha', 'Email', 'Nombre', 'Acepta ofertas', 'Resultado', 'Perfil',
  'Producto principal', 'Complemento recomendado', 'Etiquetas', 'Origen', 'Respuestas'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (!p.email || p.web) return ok_();

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const hoja = SpreadsheetApp.openById(HOJA_ID).getSheets()[0];
    if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);
    hoja.appendRow([new Date(), limpiar_(p.email), limpiar_(p.nombre), p.marketing === 'si' ? 'Sí' : 'No',
      limpiar_(p.resultado), limpiar_(p.perfil), limpiar_(p.principal), limpiar_(p.complemento),
      limpiar_(p.etiquetas), limpiar_(p.origen), limpiar_(p.respuestas)]);
  } finally {
    lock.releaseLock();
  }

  if (SHOPIFY_TOKEN) {
    try { guardarEnShopify_(p); } catch (err) { console.error(err); }
  }
  return ok_();
}

// Para comprobar que la URL funciona abriéndola en el navegador
function doGet() {
  return ContentService.createTextOutput('El test hormonal de Benissalud está conectado ✅');
}

function guardarEnShopify_(p) {
  const etiquetas = String(p.etiquetas || '').split(',').map(function (t) { return t.trim(); }).filter(String);
  const input = { email: p.email, tags: etiquetas };
  if (p.nombre) input.firstName = p.nombre;
  if (p.marketing === 'si') input.emailMarketingConsent = { marketingState: 'SUBSCRIBED', marketingOptInLevel: 'SINGLE_OPT_IN' };

  const r = shopify_('mutation($input: CustomerInput!) { customerCreate(input: $input) { customer { id } userErrors { field message } } }', { input: input });
  const errores = r.data && r.data.customerCreate.userErrors;
  if (!errores || !errores.length) return;

  // Ya existía: le añadimos las etiquetas (y la suscribimos si ha aceptado)
  const q = shopify_('query($q: String!) { customers(first: 1, query: $q) { nodes { id } } }', { q: 'email:' + p.email });
  const cliente = q.data && q.data.customers.nodes[0];
  if (!cliente) return;
  shopify_('mutation($id: ID!, $tags: [String!]!) { tagsAdd(id: $id, tags: $tags) { userErrors { message } } }', { id: cliente.id, tags: etiquetas });
  if (p.marketing === 'si') {
    shopify_('mutation($input: CustomerEmailMarketingConsentUpdateInput!) { customerEmailMarketingConsentUpdate(input: $input) { userErrors { message } } }',
      { input: { customerId: cliente.id, emailMarketingConsent: { marketingState: 'SUBSCRIBED', marketingOptInLevel: 'SINGLE_OPT_IN' } } });
  }
}

function shopify_(query, variables) {
  const res = UrlFetchApp.fetch('https://' + TIENDA + '/admin/api/2025-07/graphql.json', {
    method: 'post', contentType: 'application/json', muteHttpExceptions: true,
    headers: { 'X-Shopify-Access-Token': SHOPIFY_TOKEN },
    payload: JSON.stringify({ query: query, variables: variables })
  });
  return JSON.parse(res.getContentText());
}

function limpiar_(v) {
  v = String(v || '').slice(0, 3000);
  return /^[=+\-@]/.test(v) ? "'" + v : v; // evita que la hoja lo interprete como fórmula
}

function ok_() {
  return ContentService.createTextOutput('ok');
}

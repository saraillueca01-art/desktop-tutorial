/**
 * Benissalud · Test de energía → Hoja de Google + email con su resultado
 *
 * Cada vez que alguien termina el test:
 *  1. Añade una fila en la hoja "Test hormonal · Correos Benissalud".
 *  2. Le envía un email con su resultado, su recomendación y su descuento
 *     (desde tu cuenta de Gmail; máximo unos 100 emails al día con Gmail gratuito).
 *  3. (Opcional) Si pones SHOPIFY_TOKEN, la crea también en Shopify > Clientes.
 */

const HOJA_ID = '1Fx2i9WzY8UgunCh-xtsBgdgkmcRC-fNiJKuorZrVvbQ';
const TIENDA = 'benissalud.myshopify.com';
const SHOPIFY_TOKEN = ''; // opcional: token "shpat_..." de una app personalizada de Shopify
const REMITENTE = 'Benissalud';
const WEB = 'https://www.benissalud.com';

const COLUMNAS = ['Fecha', 'Email', 'Nombre', 'Acepta ofertas', 'Resultado', 'Perfil',
  'Producto principal', 'Complemento recomendado', 'Etiquetas', 'Origen', 'Respuestas', 'Email enviado'];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (!p.email || p.web) return ok_();

  let enviado = 'No';
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(p.email).trim())) {
    try { enviado = enviarResultado_(p) ? 'Sí' : 'No'; } catch (err) { enviado = 'Error: ' + err; console.error(err); }
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const hoja = SpreadsheetApp.openById(HOJA_ID).getSheets()[0];
    if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);
    else if (!hoja.getRange(1, 12).getValue()) hoja.getRange(1, 12).setValue('Email enviado');
    hoja.appendRow([new Date(), limpiar_(p.email), limpiar_(p.nombre), p.marketing === 'si' ? 'Sí' : 'No',
      limpiar_(p.resultado), limpiar_(p.perfil), limpiar_(p.principal), limpiar_(p.complemento),
      limpiar_(p.etiquetas), limpiar_(p.origen), limpiar_(p.respuestas), enviado]);
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
  return ContentService.createTextOutput('El test de Benissalud está conectado ✅');
}

// Textos del email: están aquí (no se aceptan textos ni enlaces enviados desde fuera)
const RESULTADOS = {
  low: { tag: 'Buena energía', titulo: 'Tu energía parece estar en buen nivel',
    texto: 'Tus respuestas muestran pocas señales de cansancio. Aun así, hay detalles que puedes cuidar para mantenerte así.' },
  mid: { tag: 'Señales leves', titulo: 'Tu cuerpo te está dando algunas señales',
    texto: 'Tus respuestas muestran algunas señales de cansancio y estrés. Es muy común con el ritmo de vida actual y suele responder bien a pequeños cambios en tu rutina.' },
  high: { tag: 'Señales claras', titulo: 'Tu cuerpo te está pidiendo un respiro',
    texto: 'Tus respuestas muestran varias señales claras de cansancio, estrés o tensión. No estás sola: le pasa a muchísima gente. Si dura semanas, consulta con tu médico.' }
};
const PERFILES = {
  energia: { titulo: 'Magnesio para tu energía', texto: 'El magnesio contribuye a disminuir el cansancio y la fatiga y al metabolismo energético normal (declaraciones autorizadas por la UE).' },
  mente: { titulo: 'Magnesio para tu calma y tu cabeza', texto: 'El magnesio contribuye al funcionamiento normal del sistema nervioso y a la función psicológica normal (declaraciones autorizadas por la UE).' },
  musculo: { titulo: 'Magnesio para tus músculos', texto: 'El magnesio contribuye al funcionamiento normal de los músculos y al equilibrio electrolítico (declaraciones autorizadas por la UE).' },
  huesos: { titulo: 'Magnesio para esta etapa', texto: 'El magnesio contribuye al mantenimiento de los huesos en condiciones normales y a disminuir el cansancio y la fatiga (declaraciones autorizadas por la UE).' },
  equilibrio: { titulo: 'Magnesio para mantener tu energía', texto: 'El magnesio es un mineral esencial que tu cuerpo no fabrica y contribuye a disminuir el cansancio y la fatiga (declaración autorizada por la UE).' }
};
const PACKS = {
  vitc: { nombre: 'Vitamina C pura', variante: '56590721024325', por: 'que contribuye al funcionamiento normal del sistema inmunitario y a disminuir el cansancio y la fatiga' },
  creatina: { nombre: 'Creatina Creapure®', variante: '56619269882181', por: 'que con 3 g al día aumenta el rendimiento físico en series sucesivas de ejercicios breves de alta intensidad' },
  colageno: { nombre: 'Colágeno Marino Peptan®', variante: '56749441057093', por: 'para tomar junto a la vitamina C, que contribuye a la formación normal de colágeno' }
};
const MAGNESIO = { nombre: 'Bisglicinato de Magnesio Albion®', handle: 'bisglicinato-de-magnesio-albion%C2%AE-chelate-magnesio-en-polvo-benissalud', variante300: '58574868316485' };

// Prueba: ejecuta esta función desde el editor para recibir un email de ejemplo en tu correo
function probarEmail() {
  enviarResultado_({ email: Session.getActiveUser().getEmail(), nombre: 'Sara', resultado: 'Señales claras (86%)',
    etiquetas: 'test-energia, te-resultado-high, te-perfil-energia, te-principal-magnesio, te-pack-vitc' }, true);
}

function etiqueta_(p, prefijo) {
  const m = String(p.etiquetas || '').match(new RegExp('(?:^|,\\s*)' + prefijo + '([a-z]+)'));
  return m ? m[1] : '';
}

function enviarResultado_(p, prueba) {
  if (String(p.etiquetas || '').indexOf('test-energia') < 0) return false;
  const email = String(p.email).trim().toLowerCase();
  // Un solo email por persona cada 6 horas (por si repite el test o alguien abusa del formulario)
  const cache = CacheService.getScriptCache();
  if (!prueba && cache.get('mail:' + email)) return false;
  cache.put('mail:' + email, '1', 21600);

  const R = RESULTADOS[etiqueta_(p, 'te-resultado-')] || RESULTADOS.mid;
  const P = PERFILES[etiqueta_(p, 'te-perfil-')] || PERFILES.energia;
  const K = PACKS[etiqueta_(p, 'te-pack-')] || PACKS.vitc;
  const pct = (String(p.resultado || '').match(/\((\d{1,3})%\)/) || [])[1];
  const nombre = String(p.nombre || '').replace(/[^\p{L} '\-]/gu, '').trim().slice(0, 30);
  const utm = 'utm_source=email&utm_medium=email&utm_campaign=test-energia';
  const enlace = WEB + '/discount/TESTENERGIA10?redirect=' + encodeURIComponent('/products/' + decodeURIComponent(MAGNESIO.handle)) + '&' + utm;
  const enlaceRutina = WEB + '/cart/' + MAGNESIO.variante300 + ':1,' + K.variante + ':1?discount=TESTENERGIA15&' + utm;

  const boton = function (url, texto, fondo) {
    return '<a href="' + url + '" style="display:inline-block;background:' + fondo + ';color:#ffffff;text-decoration:none;font-weight:bold;padding:14px 26px;border-radius:999px;font-size:16px">' + texto + '</a>';
  };
  const html =
    '<div style="background:#f2f9fb;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;color:#2b3a42">' +
    '<div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e3eef2">' +
    '<div style="background:linear-gradient(120deg,#0e3a4f,#2f80c8 60%,#14a38b);background-color:#0e3a4f;padding:28px 24px;color:#ffffff">' +
    '<p style="margin:0 0 6px;font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.85">Tu test de energía</p>' +
    '<h1 style="margin:0;font-size:24px;font-weight:normal;font-family:Georgia,serif">Hola' + (nombre ? ' ' + esc_(nombre) : '') + ', aquí tienes tu resultado</h1></div>' +
    '<div style="padding:24px">' +
    '<p style="display:inline-block;margin:0 0 10px;padding:6px 12px;border-radius:999px;background:#d9f5ec;color:#0e3a4f;font-weight:bold;font-size:13px">' + R.tag + (pct ? ' · ' + pct + '% de señales de cansancio' : '') + '</p>' +
    '<h2 style="margin:0 0 8px;font-size:20px;font-family:Georgia,serif;font-weight:normal;color:#0e3a4f">' + R.titulo + '</h2>' +
    '<p style="margin:0 0 18px;line-height:1.55">' + R.texto + '</p>' +
    '<div style="background:#0e3a4f;color:#ffffff;border-radius:16px;padding:20px;margin:0 0 18px">' +
    '<p style="margin:0 0 4px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#9fe3cf">Tu recomendación personalizada</p>' +
    '<h3 style="margin:0 0 8px;font-size:19px;font-family:Georgia,serif;font-weight:normal;color:#ffffff">' + P.titulo + '</h3>' +
    '<p style="margin:0 0 14px;line-height:1.55;color:#e6f4f8">' + P.texto + '</p>' +
    '<p style="margin:0 0 16px;color:#ffffff"><strong>' + MAGNESIO.nombre + '</strong> con un <strong>10% de descuento</strong> por hacer el test.</p>' +
    boton(enlace, 'Quiero mi magnesio con -10% →', '#14a38b') + '</div>' +
    '<div style="border:2px dashed #a9e3d4;border-radius:16px;padding:20px;margin:0 0 18px;text-align:center">' +
    '<p style="margin:0 0 6px;font-weight:bold;color:#0e3a4f;font-size:17px">🎁 Tu rutina completa con un 15%</p>' +
    '<p style="margin:0 0 14px;line-height:1.5">Magnesio (formato 3 meses) + ' + K.nombre + ', ' + K.por + ' (declaración autorizada por la UE).<br>Con 3 productos o más, un 20% en toda tu compra. Envío gratis desde 35 € y Vitamina C de regalo desde 60 €.</p>' +
    boton(enlaceRutina, 'Ver mi rutina con -15% →', '#2f80c8') +
    '<p style="margin:14px 0 0;font-size:13px;color:#5b6b73">Tu código: <strong style="letter-spacing:1px;color:#0e3a4f">TESTENERGIA15</strong> (se aplica solo con el botón)</p></div>' +
    '<p style="margin:0 0 8px;line-height:1.55">¿Tienes dudas? Responde a este email y te ayudamos encantadas.</p>' +
    '<p style="margin:0">Un abrazo,<br><strong>El equipo de Benissalud</strong></p></div>' +
    '<div style="background:#f6f8fa;padding:16px 24px;font-size:11px;line-height:1.5;color:#7a8a92">' +
    'Has recibido este email porque has hecho el test de energía en benissalud.com y nos has pedido tu resultado. ' +
    'El test es orientativo y no sustituye la consulta con un profesional sanitario. Las funciones del magnesio, la vitamina C y la creatina que mencionamos son declaraciones de propiedades saludables autorizadas por la UE (Reglamento UE 432/2012). ' +
    'Los complementos alimenticios no deben utilizarse como sustitutos de una dieta equilibrada y un modo de vida saludable.</div>' +
    '</div></div>';
  const texto = 'Hola' + (nombre ? ' ' + nombre : '') + ', tu resultado del test de energía: ' + R.tag + '. ' + R.titulo + '\n\n' +
    P.titulo + ': ' + P.texto + '\n\nTu magnesio con -10%: ' + enlace + '\nTu rutina con -15%: ' + enlaceRutina + '\n\nEl equipo de Benissalud';
  MailApp.sendEmail({ to: email, subject: (nombre ? nombre + ', tu' : 'Tu') + ' resultado del test de energía ⚡', body: texto, htmlBody: html, name: REMITENTE });
  return true;
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

function esc_(v) {
  return String(v || '').slice(0, 2000).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function limpiar_(v) {
  v = String(v || '').slice(0, 3000);
  return /^[=+\-@]/.test(v) ? "'" + v : v; // evita que la hoja lo interprete como fórmula
}

function ok_() {
  return ContentService.createTextOutput('ok');
}

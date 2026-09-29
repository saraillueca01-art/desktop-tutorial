/**
 * Brisa Creative · Recepción de solicitudes del formulario de la web
 *
 * Qué hace cada vez que alguien rellena el formulario:
 *  1. Añade una fila en la hoja "Solicitudes" de esta hoja de cálculo.
 *  2. Envía un email de aviso a EMAIL_AVISO con los datos y un botón de WhatsApp.
 *
 * Instrucciones de instalación en CONECTAR-FORMULARIO.md
 */

const EMAIL_AVISO = 'brisacreativeagencia@gmail.com';
const NOMBRE_HOJA = 'Solicitudes';

// [nombre del campo en el formulario, título de la columna]
const CAMPOS = [
  ['nombre', 'Nombre'],
  ['telefono', 'Teléfono'],
  ['email', 'Email'],
  ['negocio', 'Instagram del negocio'],
  ['servicio', 'Cómo quiere trabajar'],
  ['inversion', 'Inversión mensual'],
  ['facturacion', 'Facturación mensual'],
  ['mensaje', 'Mensaje'],
];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.web) return respuesta_(); // campo trampa antispam relleno: se ignora

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const hoja = obtenerHoja_();
    const valores = CAMPOS.map(([campo]) => limpiar_(p[campo]));
    hoja.appendRow([new Date()].concat(valores, ['Nuevo']));
  } finally {
    lock.releaseLock();
  }

  avisarPorEmail_(p);
  return respuesta_();
}

// Para comprobar que la URL funciona abriéndola en el navegador
function doGet() {
  return ContentService.createTextOutput('El formulario de Brisa Creative está conectado.');
}

function obtenerHoja_() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  let hoja = libro.getSheetByName(NOMBRE_HOJA);
  if (!hoja) {
    // Usa la primera pestaña de la hoja y la renombra
    hoja = libro.getSheets()[0];
    hoja.setName(NOMBRE_HOJA);
  }
  if (hoja.getLastRow() === 0) {
    const titulos = ['Fecha'].concat(CAMPOS.map(([, titulo]) => titulo), ['Estado']);
    hoja.appendRow(titulos);
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, titulos.length).setFontWeight('bold').setBackground('#1f3458').setFontColor('#ffffff');
  }
  return hoja;
}

function avisarPorEmail_(p) {
  const tel = limpiar_(p.telefono).replace(/\D/g, '');
  const telWhatsApp = tel.length === 9 ? '34' + tel : tel; // números españoles sin prefijo
  const enlaceWhatsApp = telWhatsApp
    ? 'https://wa.me/' + telWhatsApp + '?text=' + encodeURIComponent(
        'Hola ' + (limpiar_(p.nombre).split(' ')[0] || '') + ', somos Natalia y Sara de Brisa Creative. ' +
        'Hemos recibido tu solicitud para la asesoría gratis. ¿Qué día te viene bien para la llamada?')
    : '';

  const filas = CAMPOS.map(([campo, titulo]) =>
    '<tr><td style="padding:6px 12px 6px 0;color:#6f6b67">' + titulo + '</td>' +
    '<td style="padding:6px 0;color:#1f3458"><b>' + escapar_(limpiar_(p[campo]) || '—') + '</b></td></tr>'
  ).join('');

  const html =
    '<div style="font-family:Arial,sans-serif;max-width:560px">' +
    '<h2 style="color:#1f3458;margin:0 0 12px">Nueva solicitud en la web 🎉</h2>' +
    '<table style="border-collapse:collapse;font-size:14px">' + filas + '</table>' +
    (enlaceWhatsApp
      ? '<p style="margin:20px 0"><a href="' + enlaceWhatsApp + '" style="background:#25d366;color:#fff;padding:12px 20px;border-radius:999px;text-decoration:none;font-weight:bold">Escribir por WhatsApp</a></p>'
      : '') +
    '<p style="font-size:12px;color:#6f6b67">Todas las solicitudes están en la hoja "' + NOMBRE_HOJA + '".</p>' +
    '</div>';

  MailApp.sendEmail({
    to: EMAIL_AVISO,
    subject: tipoDeCliente_(p.inversion) + ': ' + (limpiar_(p.nombre) || 'sin nombre') + (p.negocio ? ' (' + limpiar_(p.negocio) + ')' : ''),
    name: 'Web Brisa Creative',
    htmlBody: html,
    replyTo: limpiar_(p.email) || EMAIL_AVISO,
  });
}

// Asunto del email según la inversión mensual que ha elegido en el formulario
function tipoDeCliente_(inversion) {
  const v = limpiar_(inversion);
  if (v.indexOf('Menos de 300') === 0) return 'Cliente no potencial';
  if (v.indexOf('De 300 a 600') === 0) return 'Cliente';
  if (v.indexOf('De 600 a 1.000') === 0 || v.indexOf('Más de 1.000') === 0) return 'Cliente potencial';
  return 'Cliente (inversión sin definir)';
}

function limpiar_(v) {
  let s = (v || '').toString().trim().slice(0, 1000);
  // Evita que un texto que empiece por = + - @ se interprete como fórmula en la hoja
  if (/^[=+\-@]/.test(s) && !/^@[\w.]+$/.test(s)) s = "'" + s;
  return s;
}

function escapar_(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function respuesta_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

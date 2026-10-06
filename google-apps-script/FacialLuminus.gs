/**
 * Facial Luminus · Recogida de emails de la landing (facial-luminus/index.html)
 *
 * Qué hace cada vez que alguien se apunta:
 *  1. Añade una fila en la pestaña "Leads" de esta hoja de cálculo.
 *  2. Envía un email de aviso a EMAIL_AVISO con los datos y un botón de WhatsApp.
 *
 * Instrucciones de instalación en facial-luminus/CONECTAR.md
 */

const EMAIL_AVISO = 'brisacreativeagencia@gmail.com';
const NOMBRE_HOJA = 'Leads';

// [nombre del campo en el formulario, título de la columna]
const CAMPOS = [
  ['nombre', 'Nombre'],
  ['email', 'Email'],
  ['telefono', 'Teléfono'],
  ['novedades', 'Acepta promociones'],
  ['origen', 'Origen'],
];

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.web) return respuesta_(); // campo trampa antispam relleno: se ignora

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const hoja = obtenerHoja_();
    const valores = CAMPOS.map(([campo]) => limpiar_(p[campo]) || (campo === 'novedades' ? 'No' : ''));
    hoja.appendRow([new Date()].concat(valores, ['Nuevo']));
  } finally {
    lock.releaseLock();
  }

  avisarPorEmail_(p);
  return respuesta_();
}

// Para comprobar que la URL funciona abriéndola en el navegador
function doGet() {
  return ContentService.createTextOutput('El formulario de Facial Luminus está conectado.');
}

function obtenerHoja_() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  let hoja = libro.getSheetByName(NOMBRE_HOJA);
  if (!hoja) {
    hoja = libro.getSheets()[0];
    hoja.setName(NOMBRE_HOJA);
  }
  if (hoja.getLastRow() === 0) {
    const titulos = ['Fecha'].concat(CAMPOS.map(([, titulo]) => titulo), ['Estado']);
    hoja.appendRow(titulos);
    hoja.setFrozenRows(1);
    hoja.getRange(1, 1, 1, titulos.length).setFontWeight('bold').setBackground('#b8673f').setFontColor('#ffffff');
  }
  return hoja;
}

function avisarPorEmail_(p) {
  const nombre = limpiar_(p.nombre);
  const tel = limpiar_(p.telefono).replace(/\D/g, '');
  const telWhatsApp = tel.length === 9 ? '34' + tel : tel; // números españoles sin prefijo
  const enlaceWhatsApp = telWhatsApp
    ? 'https://wa.me/' + telWhatsApp + '?text=' + encodeURIComponent(
        'Hola ' + (nombre.split(' ')[0] || '') + ', te escribimos por tu reserva del Facial Luminus. ' +
        '¿Qué día y hora te vienen mejor?')
    : '';

  const filas = CAMPOS.map(([campo, titulo]) =>
    '<tr><td style="padding:6px 12px 6px 0;color:#7d6758">' + titulo + '</td>' +
    '<td style="padding:6px 0;color:#3b2a20"><b>' + escapar_(limpiar_(p[campo]) || '—') + '</b></td></tr>'
  ).join('');

  const html =
    '<div style="font-family:Arial,sans-serif;max-width:560px">' +
    '<h2 style="color:#b8673f;margin:0 0 12px">Nueva reserva Facial Luminus ✨</h2>' +
    '<table style="border-collapse:collapse;font-size:14px">' + filas + '</table>' +
    (enlaceWhatsApp
      ? '<p style="margin:20px 0"><a href="' + enlaceWhatsApp + '" style="background:#25d366;color:#fff;padding:12px 20px;border-radius:999px;text-decoration:none;font-weight:bold">Escribir por WhatsApp</a></p>'
      : '') +
    '<p style="font-size:12px;color:#7d6758">Todos los contactos están en la pestaña "' + NOMBRE_HOJA + '".</p>' +
    '</div>';

  MailApp.sendEmail({
    to: EMAIL_AVISO,
    subject: 'Facial Luminus: ' + (nombre || 'sin nombre'),
    name: 'Landing Facial Luminus',
    htmlBody: html,
    replyTo: limpiar_(p.email) || EMAIL_AVISO,
  });
}

function limpiar_(v) {
  let s = (v || '').toString().trim().slice(0, 1000);
  // Evita que un texto que empiece por = + - @ se interprete como fórmula en la hoja
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function escapar_(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function respuesta_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

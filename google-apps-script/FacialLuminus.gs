/**
 * Facial Luminus · Recogida de emails de la landing (facial-luminus/index.html)
 *
 * Cada vez que alguien se apunta, añade una fila en la pestaña "Leads"
 * de esta hoja de cálculo. No envía ningún email.
 *
 * Instrucciones de instalación en facial-luminus/CONECTAR.md
 */

// Hoja "Leads Facial Luminus" del Drive de saraillueca01@gmail.com
const ID_HOJA = '1SJhm3gTCKFFZ23sUUr9IWy_-NJzDdLCzsZDip6OZK2s';
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

  return respuesta_();
}

// Para comprobar que la URL funciona abriéndola en el navegador
function doGet() {
  return ContentService.createTextOutput('El formulario de Facial Luminus está conectado.');
}

function obtenerHoja_() {
  const libro = SpreadsheetApp.openById(ID_HOJA);
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

function limpiar_(v) {
  let s = (v || '').toString().trim().slice(0, 1000);
  // Evita que un texto que empiece por = + - @ se interprete como fórmula en la hoja
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function respuesta_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

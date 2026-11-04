/**
 * Mood Matcha · votos de la sala secreta (capítulo 13).
 * Se pega en Extensiones → Apps Script de una hoja de cálculo de Google privada.
 * Guarda cada voto en la pestaña «Votos» y calcula los totales en «Resumen».
 * Los resultados solo los ve quien tenga acceso a la hoja: no hay ninguna forma pública de leerlos.
 */
const OPCIONES = ['A', 'B', 'C'];
const HOJA_VOTOS = 'Votos';
const HOJA_RESUMEN = 'Resumen';

/** Recibe un voto desde la web. */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    const voto = String(d.voto || '').trim().toUpperCase();
    const votante = String(d.votante || '').trim().slice(0, 64);
    if (OPCIONES.indexOf(voto) === -1 || votante.length < 16) return respuesta({ ok: false, error: 'datos' });

    const hoja = hojaVotos();
    const filas = hoja.getLastRow() - 1;
    if (filas > 0) {
      const ids = hoja.getRange(2, 3, filas, 1).getValues().map(function (f) { return f[0]; });
      if (ids.indexOf(votante) !== -1) return respuesta({ ok: false, error: 'duplicado' });
    }
    hoja.appendRow([new Date(), voto, votante, String(d.huella || '').slice(0, 32), String(d.origen || '').slice(0, 80)]);
    return respuesta({ ok: true });
  } catch (err) {
    return respuesta({ ok: false, error: 'servidor' });
  } finally {
    lock.releaseLock();
  }
}

/** Comprobación rápida de que el sistema responde. No devuelve resultados. */
function doGet() {
  return respuesta({ ok: true, servicio: 'votos Mood Matcha' });
}

/** Ejecútala una vez desde el editor para crear las pestañas y el resumen. */
function preparar() {
  hojaVotos();
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const r = libro.getSheetByName(HOJA_RESUMEN) || libro.insertSheet(HOJA_RESUMEN);
  r.clear();
  r.getRange('A1:C1').setValues([['Propuesta', 'Votos', '%']]).setFontWeight('bold');
  OPCIONES.forEach(function (o, i) {
    const fila = i + 2;
    r.getRange(fila, 1).setValue(o);
    r.getRange(fila, 2).setFormula('=COUNTIF(' + HOJA_VOTOS + '!B:B,"' + o + '")');
    r.getRange(fila, 3).setFormula('=IFERROR(B' + fila + '/SUM($B$2:$B$' + (OPCIONES.length + 1) + '),0)').setNumberFormat('0%');
  });
  const fin = OPCIONES.length + 3;
  r.getRange(fin, 1, 2, 2).setValues([
    ['Votos totales', '=SUM(B2:B' + (OPCIONES.length + 1) + ')'],
    ['Votos desde un móvil que ya había votado (posibles repetidos)', '=MAX(0,COUNTA(' + HOJA_VOTOS + '!D2:D)-COUNTUNIQUE(' + HOJA_VOTOS + '!D2:D))']
  ]);
  r.autoResizeColumns(1, 3);
}

function hojaVotos() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  let h = libro.getSheetByName(HOJA_VOTOS);
  if (!h) {
    h = libro.insertSheet(HOJA_VOTOS);
    h.appendRow(['Fecha', 'Voto', 'Votante (anónimo)', 'Huella del dispositivo', 'Web']);
    h.setFrozenRows(1);
  }
  return h;
}

function respuesta(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

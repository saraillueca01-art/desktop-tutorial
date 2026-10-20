---
name: recepcion
description: Registra una recepción de matcha de Mood Matcha (compras a proveedores de Alibaba) y crea el informe de recepción y trazabilidad en Google Drive, dentro de TRAZABILIDAD MOOD MATCHA › año › mes. Usar cuando la usuaria escriba "recepción ...", "ha llegado un pedido", "registra la recepción", "/recepcion" o similar.
---

# Recepción de mercancía · Mood Matcha

Cuando la usuaria diga algo como *"recepción: 20 kg matcha ceremonial, proveedor X, lote ABC123, llegó hoy"*, crea el **informe de recepción** en Google Drive (herramientas `mcp__Google_Drive__*`, cárgalas con ToolSearch si hace falta).

## 1. Reunir los datos

Saca de su mensaje todo lo que puedas. Datos del informe:

| Campo | Obligatorio | Notas |
|---|---|---|
| Fecha de recepción | Sí | Si no la dice, usa la fecha de hoy y dilo. |
| Producto | Sí | Ej.: Matcha ceremonial, Matcha culinario. |
| Proveedor (tienda de Alibaba) y país | Sí | |
| Nº de pedido de Alibaba | Recomendado | |
| Lote del proveedor | Sí | Es lo que une el informe con el certificado. |
| Cantidad recibida | Sí | kg o unidades. |
| Fecha de consumo preferente | Sí | |
| Fecha de producción | No | |
| Formato/envase en que llega | No | Bolsa aluminio 1 kg, latas 30 g… |
| Transportista y nº de seguimiento | No | |
| DUA / documento de aduanas | Recomendado | Producto importado de fuera de la UE. |
| Factura | No | |
| Ubicación en almacén | No | |
| Control visual en recepción | Recomendado | Embalaje íntegro, precinto, color/olor normal, sin humedad ni plagas. |

**Nunca inventes datos.** Lo que falte se pone como `PENDIENTE`. Si falta alguno de los obligatorios, crea igualmente el informe y al final pregunta por lo que falta en una sola lista corta.

## 2. Certificados

La usuaria recibe los certificados del proveedor de Alibaba (COA / análisis, ficha técnica…). Búscalos en Drive con `search_files` (por lote, por nombre del proveedor o los subidos recientemente) y léelos con `read_file_content`:

- Comprueba que el **lote del certificado coincide** con el lote recibido. Si no coincide, márcalo como incidencia.
- Anota qué análisis trae: plaguicidas, metales pesados (plomo), microbiología, radiactividad (si viene).
- Si algún resultado aparece como fuera de límite, "detected" en plaguicidas o el certificado no es del producto, ponlo en **Incidencias** y recomienda no vender el lote hasta aclararlo. No afirmes que un valor cumple un límite legal concreto si no estás seguro: escribe "revisar con el límite del Reglamento (CE) 396/2005 / (UE) 2023/915".
- Enlaza cada certificado en el informe (su `viewUrl`).
- Si no los encuentra, marca cada documento como `PENDIENTE` y pídele que los suba a la carpeta del mes.

## 3. Lote interno

Formato `MM-AAMMDD-NN` con la fecha de recepción (ej.: `MM-261014-01`). Antes de asignarlo, busca en Drive `title contains 'MM-AAMMDD'` para no repetir: si ya existe `-01`, usa `-02`, etc.

## 4. Carpeta de destino

Raíz: **TRAZABILIDAD MOOD MATCHA** en Mi unidad (`1cZ5NlM-Myd8lNdO8eKnzxGtla61bS8y4`). Nunca en la carpeta de Contabilidad.
Dentro hay una carpeta por año (`2026`) y, dentro, una por mes (`10 Octubre`). Busca la del mes de la recepción con `search_files` (`parentId = '<id del año>' and title = '10 Octubre'`); si no existe, créala con `create_file` y `contentMimeType: application/vnd.google-apps.folder`. Igual con la del año.

## 5. Crear el informe

`mcp__Google_Drive__create_file` con:
- `title`: `Recepción MM-AAMMDD-NN · <Producto> · DD-MM-AAAA`
- `parentId`: carpeta del mes
- `contentMimeType`: `text/html` y el HTML en `textContent` (Drive lo convierte en Google Doc).

Rellena la plantilla `plantilla-informe.html` de esta carpeta: sustituye cada `{{CAMPO}}`, pon `PENDIENTE` en lo que falte, ✅ / ❌ / ⏳ en la tabla de documentación, y elige el resultado: **ACEPTADO**, **ACEPTADO CON OBSERVACIONES** o **RECHAZADO**. La sección "Trazabilidad hacia delante" se deja vacía para rellenarla al envasar y vender.

## 6. Responder

Mensaje corto en español:
- Enlace al informe y lote interno asignado.
- Incidencias encontradas en los certificados, si las hay.
- Lista de lo que falta (`PENDIENTE`), si falta algo.

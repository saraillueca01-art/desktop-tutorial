---
name: recepcion
description: Registra una recepción de matcha de Mood Matcha (compras a proveedores de Alibaba) y crea el informe de recepción y trazabilidad en Google Drive, dentro de la carpeta del mes. Usar cuando la usuaria escriba "recepción ...", "ha llegado un pedido", "registra la recepción", "/recepcion" o similar.
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

Raíz: **MOOD MATCHA** (`1ArwBkjiOO7990luJ7dK9kjWkvldrf1eR`). El informe va en la carpeta del mes de la fecha de recepción:

| Mes | Carpeta | ID |
|---|---|---|
| Enero | 1T / 01 Enero | `1wfuf6xsEVE0SDWeaAVvx740ozpnWngWA` |
| Febrero | 1T / 02 Febrero | `1Fi9FRBJXIGr9hUrWa2FWCisx5HeIj719` |
| Marzo | 1T / 03 Marzo | `1MU8xScfC7_LSduyeB5wZTjpHpYb3JbD8` |
| Abril | 2T / 04 Abril | `1cieAtdA8IylKAYBD9zNFKb8Ywne2nrER` |
| Mayo | 2T / 05 Mayo | `1meoerlzMilyN6UzrFH1oRxVNCsXUizjg` |
| Junio | 2T / 06 Junio | `1kMj5cGeMgSEOWc1T_7Xgu1rJuMf27hT0` |
| Julio | 3T / 07 Julio | `18dYXYT8FNq40hsHx7jfWerJNxyZXqYCA` |
| Agosto | 3T / 08 Agosto | `1LtsytbR8K0g-nRia9vqeQZrfhwlkdYVP` |
| Septiembre | 3T / 09 Septiembre | `1gnqNVStoqP78V8eChc_nLALi0MfiuBtu` |
| Octubre | 4T / 10 Octubre | `1KdujpDDFF_4qzQb5Q8kBxYb6IYBlvWwY` |
| Noviembre | 4T / 11 Noviembre | `17_QE5nPyYHv-1opzu71EszpFlGtaNZET` |
| Diciembre | 4T / 12 Diciembre | `1SomWP4CCDAHpBRwnbsHm-_pYWsA4i5-o` |

Si un ID ya no existe (la usuaria ha reorganizado el Drive), busca la carpeta por nombre dentro de MOOD MATCHA.

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

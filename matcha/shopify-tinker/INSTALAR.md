# Mood Matcha en el tema Tinker

Secciones propias de Mood Matcha para el tema **Tinker** (tema en borradores). Todo se edita desde
**Tienda online > Temas > Tinker > Personalizar**, en el apartado **Añadir sección > Mood Matcha**.

## Qué hay

| Sección | Qué puedes cambiar |
| --- | --- |
| MM · Portada | Vídeo o imagen de fondo, titular, palabras que van cambiando (focus, calma…), texto, botón, dibujo del logo al entrar |
| MM · La lata | Producto, foto de la lata (o lata dibujada), textos, datos (30 g, 15 tazas, 2 g), stock, hora límite de envío, días de entrega, envío gratis a partir de 35 € |
| MM · Moods | Cada mood es un bloque: nombre, receta, cómo se hace, imagen o vídeo |
| MM · Cómo se prepara | Cada paso es un bloque: dato (2 g, 80 °C, 15 s), título y texto. Vídeo o imagen al lado |
| MM · Cifras clave | Cada cifra es un bloque con su imagen |
| MM · Momentos en calma | Mosaico de fotos o vídeos, con la lata en medio. Enlace a Instagram |
| MM · Ajustes de marca | Colores de la marca y menú redondo flotante. No se ve en la tienda: déjala la última |

Si no eliges imagen, cada sección usa las acuarelas y el vídeo de la ceremonia que van con el tema.

## Archivos

- `sections/mm-*.liquid`: las siete secciones
- `snippets/mm-*.liquid`: logo, lata, foto/vídeo y carga de estilos
- `assets/mood-matcha.css`, `assets/mood-matcha.js`: estilos y movimiento
- `assets/mm-*.jpg|mp4|webm|woff2`: acuarelas, vídeo de la ceremonia y la letra Jost
- `templates/index.json`: la página de inicio montada en este orden: portada, lata, moods, cómo se prepara, cifras, momentos

## Después de subirlo

1. Crea el producto de la lata (30 g) y elígelo en **MM · La lata** y en **MM · Portada**.
2. En la cabecera, activa **Cabecera transparente en la página de inicio** con texto blanco, para que el menú quede sobre el vídeo.
3. En **Configuración del tema > Tipografía**, pon **Jost** en títulos y texto para que todo vaya a juego con la lata.
4. Ajusta la tarifa de envío gratis en **Configuración > Envíos** a 35 €. La barra de la web solo lo muestra; quien lo aplica es Shopify.
5. Cuando tengas la foto de la lata en PNG sin fondo, súbela en **MM · La lata > Foto de la lata**.

Al añadir a la cesta se abre el carrito lateral de Tinker, igual que con su botón propio.

La copia de los archivos que había en el tema antes de tocarlo está en `_copia-tema-borrador/`.

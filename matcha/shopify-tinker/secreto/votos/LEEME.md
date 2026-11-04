# Votos de la sala secreta (capítulo 13)

Los votos se guardan en una hoja de cálculo de Google privada. Solo la ve quien tenga acceso a ella.

## Conectarlo (10 minutos, una sola vez)

1. En Google Drive, crea una hoja de cálculo nueva: «Mood Matcha · Votos etiquetas».
2. En la hoja: **Extensiones → Apps Script**. Borra lo que haya y pega el contenido de `votos-apps-script.gs`. Guarda.
3. Arriba, elige la función **preparar** y pulsa **Ejecutar**. Acepta los permisos. Se crean las pestañas «Votos» y «Resumen».
4. **Implementar → Nueva implementación → Tipo: Aplicación web.**
   - Ejecutar como: **Yo**.
   - Quién tiene acceso: **Cualquier usuario**. Esto solo permite *enviar* votos; nadie puede leerlos.
5. Copia la dirección que termina en `/exec`.
6. En Shopify: Tienda online → Temas → Personalizar → plantilla de **contraseña** → sección **MM · Botón prohibido** → «Dirección del sistema de votos». Pega la dirección y guarda.

## Ver los resultados

Abre la hoja: la pestaña **Resumen** muestra los votos y el porcentaje de cada propuesta. En **Votos** está cada voto con su fecha.

## Votos repetidos: qué se evita y qué no

- Cada móvil recibe un identificador anónimo al votar. El sistema rechaza un segundo voto con el mismo identificador, y la web no deja votar otra vez desde ese móvil.
- No se pide email ni registro, así que **no es infalible**: alguien podría volver a votar desde otro móvil, en modo incógnito o borrando los datos del navegador.
- Para detectarlo, cada voto guarda también una «huella» aproximada del dispositivo (idioma, tamaño de pantalla, zona horaria). En «Resumen» verás cuántos votos podrían venir de un móvil que ya había votado. Úsalo como referencia, no como prueba.

## Mientras no esté conectado

Si la dirección está vacía, el botón de votar dice «La votación se abre muy pronto» y no se guarda nada. En el editor de Shopify aparece un aviso rojo.

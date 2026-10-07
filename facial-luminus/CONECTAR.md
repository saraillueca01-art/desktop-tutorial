# Landing Facial Luminus: ponerla en marcha

La página está en `facial-luminus/index.html`. Recoge **nombre, email y teléfono** y si la persona acepta recibir promociones.

## 1. Datos del centro (2 min)

Abre `facial-luminus/index.html`, busca casi al final `const CENTRO = {` y cambia:

```js
const CENTRO = {
  nombre: 'Chakra Wellness Center by Espai Vital',
  titular: 'Clínica Espai Vital SLP',
  nif: 'B55415186',
  email: 'info@chakracenterbenissa.com',
  telefono: '+34 633 38 81 52',
  direccion: 'C/ Benidoleig 31, bajo · 03720 Benissa (Alicante)',
};
```

Estos datos aparecen en la **política de privacidad** (se abre desde la casilla del formulario y desde el pie de página). Revisa que coincidan con el aviso legal del centro antes de publicar.

## 2. Guardar los emails en una hoja de Google (5 min, una sola vez)

1. La hoja ya está creada en el Drive de saraillueca01@gmail.com: **[Leads Facial Luminus](https://docs.google.com/spreadsheets/d/1SJhm3gTCKFFZ23sUUr9IWy_-NJzDdLCzsZDip6OZK2s/edit)**. Ábrela con esa cuenta.
2. **Extensiones → Apps Script**. Borra lo que aparece y pega todo `google-apps-script/FacialLuminus.gs`. Guarda.
3. **Implementar → Nueva implementación → Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
4. Autoriza los permisos (si sale "Google no ha verificado esta aplicación": **Configuración avanzada → Ir a… → Permitir**).
5. Copia la URL que termina en `/exec` y pégala en el formulario de `index.html` (o pásasela a Claude):

   ```html
   <form id="lead-form" data-endpoint="PEGA_AQUÍ_LA_URL" novalidate>
   ```

Mientras no haya URL, el formulario abre el correo del móvil con los datos (no se pierde nada, pero es mejor conectarlo antes de publicar el vídeo).

En la hoja tendrás: Fecha, Nombre, Email, Teléfono, Acepta promociones, Origen y **Estado** (empieza en "Nuevo"; cámbialo a "Contactado", "Cita reservada"…).

## 3. Saber de dónde vienen los contactos

En el enlace del vídeo añade `?utm_source=` y el nombre de la red. Se guarda en la columna **Origen**:

- Instagram: `https://tudominio.com/facial-luminus/?utm_source=instagram`
- TikTok: `https://tudominio.com/facial-luminus/?utm_source=tiktok`

## 4. Subirla a Hostinger

En el Administrador de archivos, dentro de `public_html`, crea la carpeta **`facial-luminus`** y dentro un archivo `index.html` con el contenido de `facial-luminus/index.html`. Quedará en `tudominio.com/facial-luminus/`.

## Importante

- **Precio:** la página indica que los 59 € son un precio de inauguración. Cuando termine la promoción, cambia el precio o retira la página.
- **Promociones por email:** envía promociones solo a quien tenga "Sí" en **Acepta promociones**.

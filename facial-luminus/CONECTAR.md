# Landing Facial Luminus: ponerla en marcha

La página está en `facial-luminus/index.html`. Recoge **nombre, email, teléfono (opcional)** y si la persona acepta recibir promociones.

## 1. Datos del centro (2 min)

Abre `facial-luminus/index.html`, busca casi al final `const CENTRO = {` y cambia:

```js
const CENTRO = {
  nombre: 'Tu centro de estética',   // nombre del centro
  email: 'tucorreo@ejemplo.com',     // email de contacto (también para los textos legales)
  direccion: 'Calle, número · Ciudad',
};
```

## 2. Guardar los emails en una hoja de Google (5 min, una sola vez)

1. Crea una hoja de Google nueva, por ejemplo **"Leads Facial Luminus"**.
2. **Extensiones → Apps Script**. Borra lo que aparece y pega todo `google-apps-script/FacialLuminus.gs`. Guarda.
3. Si los avisos deben llegar a otro correo, cambia `EMAIL_AVISO` al principio del script.
4. **Implementar → Nueva implementación → Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
5. Autoriza los permisos (si sale "Google no ha verificado esta aplicación": **Configuración avanzada → Ir a… → Permitir**).
6. Copia la URL que termina en `/exec` y pégala en el formulario de `index.html` (o pásasela a Claude):

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

- **Plazas:** la barra de "Quedan pocas plazas" es visual. Cuando se llenen las 15, cambia el botón o el texto.
- **Promociones por email:** envía promociones solo a quien tenga "Sí" en **Acepta promociones**.

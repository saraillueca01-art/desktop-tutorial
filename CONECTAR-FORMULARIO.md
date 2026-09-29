# Conectar el formulario de la web con Google (hoja + aviso por email)

Cuando alguien rellena el formulario de la web:

1. Sus datos se guardan en una **hoja de Google** (en vuestro Drive).
2. Os llega un **email a brisacreativeagencia@gmail.com** (se envía desde la cuenta de Sara) con todos los datos y un botón para **escribirle por WhatsApp**.

Es gratis y se configura una sola vez (unos 5 minutos).

## Pasos

La hoja ya está creada en el Drive personal de Sara (saraillueca01@gmail.com):
**[Solicitudes web · Brisa Creative](https://docs.google.com/spreadsheets/d/1IjFKA-VL2wTFqk772cEC7DOVKj00IxLo_Yn6ZlyObYw/edit)**

1. Abre esa hoja con la cuenta saraillueca01@gmail.com.
2. Comprueba que la primera fila tiene las columnas (Fecha, Nombre, Teléfono…).
3. En la hoja, ve a **Extensiones → Apps Script**.
4. Borra lo que aparece y pega todo el contenido del archivo `google-apps-script/Code.gs`. Pulsa el icono de **guardar**.
5. Arriba a la derecha pulsa **Implementar → Nueva implementación**.
   - En el engranaje de "Seleccionar tipo", elige **Aplicación web**.
   - **Ejecutar como:** Yo (saraillueca01@gmail.com).
   - **Quién tiene acceso:** Cualquier usuario.
   - Pulsa **Implementar**.
6. Google te pedirá permisos: pulsa **Autorizar acceso**, elige la cuenta y, si sale "Google no ha verificado esta aplicación", pulsa **Configuración avanzada → Ir a (nombre del proyecto)** y **Permitir**. Es vuestro propio script, es seguro.
7. Copia la **URL de la aplicación web** (termina en `/exec`).
8. Pásasela a Claude, o pégala tú en `index.html`, en el formulario:

   ```html
   <form id="contact-form" class="reveal" data-endpoint="PEGA_AQUÍ_LA_URL">
   ```

Para comprobarlo, abre esa URL en el navegador: debe decir *"El formulario de Brisa Creative está conectado."* Después rellena el formulario de la web con datos de prueba: aparecerá una fila en la hoja y os llegará el email.

## En la hoja

- La primera vez se crea sola la pestaña **Solicitudes** con las columnas: Fecha, Nombre, Teléfono, Email, Instagram del negocio, Cómo quiere trabajar, Inversión mensual, Facturación mensual, Mensaje y **Estado**.
- La columna **Estado** empieza en "Nuevo". Podéis cambiarla a "Contactado", "Llamada agendada", "Cliente", "No encaja"… para llevar el seguimiento.

## Cambiar algo

- **Otro email de aviso:** cambia `EMAIL_AVISO` al principio de `Code.gs`.
- **Si modificas el script**, vuelve a publicarlo en **Implementar → Gestionar implementaciones → editar (lápiz) → Versión: Nueva versión → Implementar**. La URL no cambia.

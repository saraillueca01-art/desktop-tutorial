# Conectar la contabilidad de Benissalud con Shopify (MOOD MATCHA)

En el programa de contabilidad (`contabilidad/index.html`), con **MOOD MATCHA** elegida, la pestaña **Shopify** apunta los pedidos de la tienda
como ingresos (base + IVA), descuenta los reembolsos y quita los cancelados.

Hay dos formas de hacerlo:

- **Rápida, sin configurar nada:** en Shopify, **Pedidos → Exportar → Todos los pedidos → CSV para Excel**, y en la
  pestaña Shopify de la contabilidad pulsa **Subir CSV de pedidos**. Se puede repetir cada mes: no duplica.
- **Automática, con un botón:** crea el conector una sola vez (unos 10 minutos) siguiendo los pasos de abajo.
  Después basta con pulsar **Sincronizar pedidos**.

El conector es un script de Google que guarda el acceso a Shopify, para que nunca quede a la vista en la web.
Solo devuelve número de pedido, fecha, estado, total e IVA (ningún dato de clientes) y pide una clave.

## 1. Dar acceso a los pedidos en Shopify

En el admin de MOOD MATCHA, con la cuenta propietaria:

1. **Configuración → Apps y canales de venta → Desarrollar apps** (si lo pide, pulsa *Permitir el desarrollo de apps*).
2. **Crear una app** → nombre: `Contabilidad`.
3. **Configurar los alcances de la API Admin** → marca **`read_orders`** y **`read_all_orders`**
   (sin el segundo, Shopify solo deja ver los pedidos de los últimos 60 días) → **Guardar**.
4. **Instalar app** → en *Credenciales de la API* pulsa **Revelar token una vez** y cópialo (empieza por `shpat_`).
   Guárdalo bien: Shopify solo lo enseña una vez.

> Si Shopify ya no deja crear apps desde el admin y te manda al **Dev Dashboard**: crea allí la app con los mismos
> permisos, instálala en MOOD MATCHA y copia el **ID de cliente** y el **Secreto**. El script sirve igual
> (paso 3, opción B).

## 2. Crear el script en Google

1. Entra en [script.google.com](https://script.google.com) con saraillueca01@gmail.com → **Nuevo proyecto**.
   Ponle de nombre `Shopify Benissalud`.
2. Borra lo que aparece y pega todo el contenido de `google-apps-script/ShopifyBenissalud.gs`. **Guarda**.

## 3. Guardar las claves (no van en el código)

En el script: **Configuración del proyecto** (engranaje, a la izquierda) → abajo, **Propiedades del script** →
**Añadir propiedad del script**:

| Propiedad | Valor |
|---|---|
| `CLAVE` | Una contraseña inventada, larga (la pondréis en la página de contabilidad) |
| **Opción A:** `SHOPIFY_TOKEN` | El token `shpat_…` del paso 1 |
| **Opción B:** `SHOPIFY_CLIENT_ID` y `SHOPIFY_CLIENT_SECRET` | El ID y el secreto del Dev Dashboard |

**Guardar propiedades del script.**

## 4. Probar y publicar

1. Vuelve al editor, elige la función **`probarConexion`** arriba y pulsa **Ejecutar**. Acepta los permisos
   (si sale «Google no ha verificado esta aplicación»: *Configuración avanzada → Ir a Shopify Benissalud → Permitir*).
   En el registro debe salir cuántos pedidos hay este año.
2. **Implementar → Nueva implementación** → tipo **Aplicación web**:
   - **Ejecutar como:** Yo.
   - **Quién tiene acceso:** Cualquier usuario.
   - **Implementar** y copia la **URL de la aplicación web** (termina en `/exec`).

## 5. Conectar la página

Abre `contabilidad/index.html` → **MOOD MATCHA** → pestaña **Shopify** → pega la URL y la clave → **Sincronizar pedidos**.
Sincroniza el año elegido arriba; cambia el año para traer otros.

## A tener en cuenta

- Dentro de Claude no hace falta nada de esto: en **MOOD MATCHA → Shopify** los pedidos se traen solos con la conexión de Shopify de Claude.
- Las ventas de Shopify cuentan enteras como ingresos tuyos.
- La **cuota mensual de Shopify** y las **comisiones de cobro** no vienen en los pedidos: apúntalas como gasto con la
  categoría «Shopify: cuota y comisiones».
- Si cambias el script, publícalo de nuevo en **Implementar → Gestionar implementaciones → editar (lápiz) →
  Versión: Nueva versión**. La URL no cambia.

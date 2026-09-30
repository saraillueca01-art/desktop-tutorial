# Mood Matcha: conectar la web con Shopify

La web (`matcha/index.html`) funciona sola en **modo demostración**, con precios y stock de ejemplo.
Cuando la conectes, el precio, los formatos, las fotos y el stock salen de Shopify, y el botón de pago lleva al checkout de Shopify.

## 1. Crear el producto en Shopify

- Crea **un producto** (por ejemplo, "Mood Matcha Ceremonial").
- Si vendes varios tamaños, crea variantes con el peso en el nombre (`30 g`, `60 g`…). La web calcula sola el precio por taza (2 g por taza).
- Activa **"Controlar inventario"** e indica las unidades: la web muestra "quedan X" y avisa de "últimas unidades" cuando hay 10 o menos.
- Sube las fotos: la primera es la que sale en la cesta. Las demás rotan en la galería con transición.
- Apunta el **handle** del producto (lo que aparece al final de la URL del producto, p. ej. `mood-matcha-ceremonial`).

## 2. Conseguir el token de la Storefront API

1. En Shopify: **Configuración → Apps y canales de ventas → Shopify App Store** e instala la app **Headless** (gratuita, de Shopify).
2. Dentro de Headless, **Crear storefront** y copia el **token de acceso público** (public access token).
3. En los permisos de la Storefront API de ese storefront, marca también
   **`unauthenticated_read_product_inventory`**. Sin este permiso la web no puede mostrar cuántas unidades quedan (muestra "En stock").
4. Anota el dominio `tu-tienda.myshopify.com`.

> El token público está pensado para ir en el código de la web: no es una contraseña. **Nunca** pegues un token de la *Admin API* (empieza por `shpat_`).

## 3. Pegar los datos en la web

Abre `matcha/index.html`, busca `CONFIGURACIÓN DE SHOPIFY` y rellena:

```js
const SHOPIFY = {
  domain: 'tu-tienda.myshopify.com',
  storefrontToken: 'el-token-publico',
  apiVersion: '2026-07',
  productHandle: 'mood-matcha-ceremonial',
};
```

Justo debajo están los ajustes de envío (`TIENDA`):

| Ajuste | Valor actual | Qué hace |
|---|---|---|
| `freeShippingFrom` | `35` | Envío gratis a partir de 35 €: barra de progreso, cesta y barra superior |
| `shipDays` | `1` | "Pide hoy y sale mañana" (días laborables) |
| `deliveryMin` / `deliveryMax` | `1` / `3` | Entrega en 24–72 h: calcula "te llega entre el X y el Y" |
| `cutoffHour` | `24` | Hora límite para que el pedido cuente como de hoy (p. ej. `14` = hasta las 14:00) |
| `lowStock` | `10` | A partir de cuántas unidades se muestra "¡Últimas unidades!" |
| `notas` | `Dulce`, `Cremoso` | Etiquetas de sabor de las tarjetas de la tienda |

Los fines de semana no cuentan como días de envío ni de entrega.

**Importante:** el envío gratis de más de 35 € hay que configurarlo **también en Shopify**
(Configuración → Envío y entrega → tarifa gratuita con condición de precio mínimo de 35 €),
porque el importe final lo cobra Shopify en su checkout.


## 3b. Poner vuestras fotos y vídeo

Justo debajo de `TIENDA` está el bloque `MEDIA`. Sube los archivos a Shopify
(**Contenido → Archivos**), copia el enlace de cada uno y pégalo entre las comillas:

| Campo | Dónde se ve | Consejo |
|---|---|---|
| `heroVideo` | Vídeo a pantalla completa de la portada | `.mp4` horizontal, sin sonido, de 10 a 20 s en bucle y menos de 8 MB |
| `heroPoster` | Imagen mientras carga el vídeo | Un fotograma del propio vídeo |
| `guiaFoto` | Banner "¿Qué es el matcha?" | Foto horizontal (campo de té, cosecha…) |
| `cifras` | Las 5 tarjetas de "Cifras clave", en orden | Fotos verticales (3:4) |
| `galeria` | El mosaico #moodmatcha (8 huecos) | Fotos de producto y lifestyle |

Mientras un campo esté vacío se ve una ilustración o, en la portada, la espuma animada.
Las fotos de la lata que salen en las tarjetas de la tienda vienen del propio producto en Shopify:
si subes una imagen a cada variante (30 g, 60 g…), cada tarjeta usa la suya.

## 4. Pendiente antes de publicar

- **Opiniones**: las tres del bloque de opiniones son textos de ejemplo. Cámbialas por opiniones reales de clientes o quita ese bloque.
- **Newsletter**: el formulario "Club Mood" solo muestra un mensaje. Hay que conectarlo con Shopify Forms o Klaviyo.
- **Enlaces legales** del pie (envíos, aviso legal, privacidad) y el enlace de Instagram.
- **Logo**: ahora hay un logotipo de texto (`mood` + *matcha*). Cuando tengáis logo se cambia en `.wordmark`.
- **Fotos y vídeo**: rellena el bloque `MEDIA` (apartado 3b). Las ilustraciones son provisionales.
- **Cifras clave**: revisa que los datos (21 días, 2 g, 15 tazas, 80 °C, 24–72 h) encajan con vuestro producto. Se cambian en `FACTS`.

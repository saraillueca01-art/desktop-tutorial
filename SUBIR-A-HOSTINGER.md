# Subir la web a Hostinger copiando y pegando

La web está preparada para que en Hostinger solo haga falta **un archivo: `index.html`**.
Las fotos, logos y vídeos se cargan directamente desde este repositorio de GitHub
(a través de jsDelivr), así que **el repositorio tiene que ser público**.

## 1. Hacer público el repositorio (una sola vez)

GitHub → repositorio `desktop-tutorial` → **Settings** → abajo del todo, en *Danger Zone*,
**Change visibility → Change to public** → confirma.

## 2. Fusionar los cambios

Abre la pull request y pulsa **Merge pull request → Confirm merge**.

## 3. Copiar el código

Abre `index.html` en GitHub (rama `main`) y pulsa el icono **Copy raw file** (dos cuadraditos, arriba a la derecha del código).

## 4. Pegarlo en Hostinger

hPanel → tu sitio web → **Administrador de archivos** → carpeta **public_html**:

1. Si hay un `default.php`, bórralo.
2. **Nuevo archivo** → nombre `index.html`.
3. Ábrelo, pega el código y **Guarda**.

Abre tu dominio y la web debe verse completa, con fotos y vídeos.

## Cuando cambiemos algo

1. Fusiona la nueva pull request.
2. Vuelve a copiar `index.html` y pégalo encima del de Hostinger.

Las fotos o vídeos nuevos pueden tardar **hasta 12 horas** en aparecer, porque jsDelivr los guarda en caché.

# Tabernáculo de Vida — Sitio web

Sitio estático (HTML + CSS + JS, sin compilación) para la iglesia
Tabernáculo de Vida en Surrey, BC.

## Archivos

| Archivo       | Descripción                                  |
| ------------- | -------------------------------------------- |
| `index.html`  | Página única con todas las secciones         |
| `styles.css`  | Estilos y diseño responsive                  |
| `script.js`   | Menú móvil y año del pie de página           |

## Ver el sitio localmente

Solo abre `index.html` en el navegador, o sirve la carpeta:

```bash
cd /Users/phil/projects/tdv
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Datos reales ya incluidos

- **Logo oficial** (`assets/logo.png`) — en el encabezado, el pie y el favicon.
- **Dirección:** 7170 132 St, Surrey, BC (Newton)
- **Teléfono:** (604) 728-8510
- **Facebook:** https://www.facebook.com/tdvcanada/
- **Instagram:** https://www.instagram.com/tdvcanada/
- **Horarios:** Domingo 3:00 PM (único servicio anunciado en el sitio)
- **Misión e historia:** la iglesia abrió en Surrey en 2014 para servir
  a la creciente comunidad latina.

## Qué falta confirmar / personalizar (busca `TODO` en el código)

- **Correo electrónico** — confirma el correo real (ahora usa un valor tentativo).
- **Prédicas** — la iglesia no tiene canal de YouTube; el botón de la sección
  Prédicas enlaza a su página de Facebook, donde publican los videos.
- **Pastor** — agrega el nombre del pastor/líderes si se desea.
- **Logo de mayor resolución** — el logo actual es de 180×180 px (recuperado
  del sitio anterior). Si tienes el archivo original, reemplaza `assets/logo.png`.
- **Fotos propias** — `assets/hero-worship.jpg` y `assets/community.jpg` son
  imágenes de archivo (Unsplash). Reemplázalas con fotos de la iglesia cuando
  las tengas (mismos nombres de archivo para no tocar el código).

## Publicar (hosting gratuito)

Cualquiera de estas opciones funciona porque el sitio es estático:

- **Netlify** — arrastra la carpeta a https://app.netlify.com/drop
- **GitHub Pages** — sube los archivos a un repo y actívalo en Settings → Pages
- **Cloudflare Pages** — conecta el repo o sube la carpeta

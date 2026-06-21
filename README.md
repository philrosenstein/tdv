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

## Qué falta personalizar (busca `TODO` en el código)

- **Dirección real** — aparece en la sección Horarios y en Contacto.
- **Teléfono y correo** — en la sección Contacto.
- **Mapa de Google** — reemplaza el `src` del `<iframe>` con tu
  ubicación real (Google Maps → Compartir → Insertar un mapa).
- **Eventos** — actualiza las fechas y títulos en la sección Eventos.
- **Prédicas** — enlaza los videos reales de YouTube.
- **Redes sociales** — enlaces de Facebook, Instagram y YouTube.
- **Historia de la iglesia** — personaliza el texto de "Nosotros".
- **Imagen del hero** — actualmente usa una foto de Unsplash; puedes
  reemplazar la URL en `styles.css` (`.hero`) por una foto propia.

## Publicar (hosting gratuito)

Cualquiera de estas opciones funciona porque el sitio es estático:

- **Netlify** — arrastra la carpeta a https://app.netlify.com/drop
- **GitHub Pages** — sube los archivos a un repo y actívalo en Settings → Pages
- **Cloudflare Pages** — conecta el repo o sube la carpeta

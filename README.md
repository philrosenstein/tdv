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
- **Horarios:** Domingo 3:00 PM · Miércoles 7:00 PM (estudio bíblico)
- **Misión e historia:** la iglesia abrió en Surrey en 2014 para servir
  a la creciente comunidad latina.

## Qué falta confirmar / personalizar (busca `TODO` en el código)

- **Correo electrónico** — confirma el correo real (ahora usa un valor tentativo).
- **Instagram / YouTube** — agrega los enlaces si la iglesia los tiene.
- **Eventos (Google Calendar)** — la sección Eventos puede llenarse
  automáticamente desde un Google Calendar. Configúralo en `script.js`
  (objeto `CALENDAR`): ver instrucciones abajo. Mientras no esté configurado,
  se muestran tres eventos de ejemplo.
- **Prédicas** — enlaza los videos reales de YouTube.
- **Pastor** — agrega el nombre del pastor/líderes si se desea.
- **Logo de mayor resolución** — el logo actual es de 180×180 px (recuperado
  del sitio anterior). Si tienes el archivo original, reemplaza `assets/logo.png`.
- **Fotos propias** — `assets/hero-worship.jpg` y `assets/community.jpg` son
  imágenes de archivo (Unsplash). Reemplázalas con fotos de la iglesia cuando
  las tengas (mismos nombres de archivo para no tocar el código).

## Conectar Google Calendar (eventos automáticos)

Los eventos se cargan solos desde un Google Calendar público. Pasos:

1. **Haz público el calendario**
   Google Calendar → *Configuración del calendario* → *Permisos de acceso* →
   marca **"Hacer disponible para el público"**.
2. **Copia el ID del calendario**
   En la misma página, sección *Integrar calendario* → **ID del calendario**
   (algo como `xxxx@group.calendar.google.com`).
3. **Crea una API key**
   https://console.cloud.google.com → *APIs y servicios* → habilita
   **Google Calendar API** → *Credenciales* → *Crear credenciales* →
   *Clave de API*. Restríngela por **Referentes HTTP** a tu dominio
   (p. ej. `https://tudominio.com/*`) para que nadie más la use.
4. **Pega los valores en `script.js`** dentro del objeto `CALENDAR`:
   ```js
   var CALENDAR = {
     calendarId: "xxxx@group.calendar.google.com",
     apiKey: "AIzaSy...",
     maxEvents: 6,
   };
   ```

Listo: la sección Eventos mostrará los próximos eventos del calendario
(título, fecha, hora, descripción y lugar). Si algo falla o no hay eventos
próximos, el sitio lo maneja con elegancia (eventos de ejemplo o un mensaje
de "no hay eventos próximos").

## Publicar (hosting gratuito)

Cualquiera de estas opciones funciona porque el sitio es estático:

- **Netlify** — arrastra la carpeta a https://app.netlify.com/drop
- **GitHub Pages** — sube los archivos a un repo y actívalo en Settings → Pages
- **Cloudflare Pages** — conecta el repo o sube la carpeta

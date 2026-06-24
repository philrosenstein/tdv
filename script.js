// Tabernáculo de Vida — interacciones del sitio

(function () {
  "use strict";

  // ===================================================================
  // Configuración de Google Calendar
  // -------------------------------------------------------------------
  // Para mostrar los eventos automáticamente desde Google Calendar:
  //   1) Haz público tu calendario:
  //      Google Calendar → Configuración del calendario → "Permisos de
  //      acceso" → marca "Hacer disponible para el público".
  //   2) Copia el "ID del calendario" (en la misma página de configuración,
  //      sección "Integrar calendario"). Suele verse como
  //      algo@group.calendar.google.com o tu correo de Gmail.
  //   3) Crea una clave de API (API key) en https://console.cloud.google.com
  //      → APIs y servicios → Credenciales → Crear credenciales → Clave de API.
  //      Habilita "Google Calendar API". Restringe la clave por
  //      "Referentes HTTP" a tu dominio (p. ej. https://tudominio.com/*).
  //   4) Pega ambos valores aquí abajo.
  //
  // Si se dejan en blanco, el sitio muestra los eventos de ejemplo del HTML.
  // ===================================================================
  var CALENDAR = {
    calendarId: "", // p. ej. "abc123@group.calendar.google.com"
    apiKey: "",     // p. ej. "AIzaSy..."
    maxEvents: 6,
  };

  var MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
               "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  // --- Menú móvil ---
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-menu");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Año actual en el pie de página ---
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===================================================================
  // Eventos desde Google Calendar
  // ===================================================================
  var list = document.getElementById("events-list");
  var emptyMsg = document.getElementById("events-empty");

  if (list && CALENDAR.calendarId && CALENDAR.apiKey) {
    loadEvents();
  }

  function loadEvents() {
    var now = new Date().toISOString();
    var url =
      "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(CALENDAR.calendarId) +
      "/events?key=" + encodeURIComponent(CALENDAR.apiKey) +
      "&timeMin=" + encodeURIComponent(now) +
      "&singleEvents=true&orderBy=startTime&maxResults=" + CALENDAR.maxEvents;

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        var items = (data.items || []).filter(function (ev) {
          return ev.start && (ev.start.dateTime || ev.start.date);
        });
        renderEvents(items);
      })
      .catch(function (err) {
        // Si falla, conservamos los eventos de ejemplo del HTML.
        console.warn("No se pudieron cargar los eventos de Google Calendar:", err);
      });
  }

  function renderEvents(items) {
    // Limpia los eventos de respaldo
    list.innerHTML = "";
    list.setAttribute("data-state", "calendar");

    if (!items.length) {
      list.hidden = true;
      if (emptyMsg) emptyMsg.hidden = false;
      return;
    }

    list.hidden = false;
    if (emptyMsg) emptyMsg.hidden = true;

    items.forEach(function (ev) {
      list.appendChild(buildEventNode(ev));
    });
  }

  function buildEventNode(ev) {
    var isAllDay = !ev.start.dateTime;
    // Las fechas "all-day" vienen como YYYY-MM-DD (sin zona); evitamos
    // el desfase de zona horaria interpretándolas en horario local.
    var start = isAllDay
      ? parseLocalDate(ev.start.date)
      : new Date(ev.start.dateTime);

    var li = el("li", "event");

    var dateBox = el("div", "event-date");
    dateBox.appendChild(el("span", "event-day", String(start.getDate())));
    dateBox.appendChild(el("span", "event-month", MESES[start.getMonth()]));

    var info = el("div", "event-info");
    info.appendChild(el("h3", null, ev.summary || "Evento"));

    var parts = [];
    if (ev.description) parts.push(stripHtml(ev.description));
    if (!isAllDay) parts.push(formatTime(start));
    if (ev.location) parts.push(ev.location);
    if (parts.length) info.appendChild(el("p", null, parts.join(" · ")));

    li.appendChild(dateBox);
    li.appendChild(info);
    return li;
  }

  // --- Utilidades ---
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text; // textContent evita XSS
    return node;
  }

  function parseLocalDate(ymd) {
    var p = ymd.split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }

  function formatTime(date) {
    return date.toLocaleTimeString("es-ES", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function stripHtml(str) {
    var tmp = document.createElement("div");
    tmp.innerHTML = str;
    return (tmp.textContent || tmp.innerText || "").trim();
  }
})();

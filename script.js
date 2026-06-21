// Tabernáculo de Vida — interacciones del sitio

(function () {
  "use strict";

  // --- Menú móvil ---
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav-menu");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Cierra el menú al hacer clic en un enlace (móvil)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Año actual en el pie de página ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

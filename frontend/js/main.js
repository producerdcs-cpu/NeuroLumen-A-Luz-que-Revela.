/**
 * NeuroLumen — main.js
 * Build 0.6 — navegação mobile, interações leves, base para partículas
 */
(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");

  if (!toggle || !navLinks) return;

  function setMenuOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    navLinks.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  toggle.addEventListener("click", function () {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!open);
  });

  navAnchors.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Fecha ao tocar fora do menu (mobile)
  document.addEventListener("click", function (e) {
    if (!navLinks.classList.contains("is-open")) return;
    if (header && header.contains(e.target)) return;
    closeMenu();
  });

  // Destaque do link da seção visível
  function updateActiveLink() {
    if (!sections.length) return;
    const offset = (header ? header.offsetHeight : 64) + 24;
    let current = sections[0].id;

    sections.forEach(function (section) {
      const top = section.getBoundingClientRect().top;
      if (top - offset <= 0) current = section.id;
    });

    navAnchors.forEach(function (link) {
      const href = link.getAttribute("href") || "";
      const match = href === "#" + current;
      link.classList.toggle("is-active", match);
      if (match) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        updateActiveLink();
        ticking = false;
      });
    },
    { passive: true }
  );

  updateActiveLink();

  // Base para partículas / canvas (Build 0.6+)
  // Espaço reservado: document.querySelector(".experience-frame")
  window.NeuroLumen = window.NeuroLumen || {
    version: "0.6.0",
    closeMenu: closeMenu,
  };
})();

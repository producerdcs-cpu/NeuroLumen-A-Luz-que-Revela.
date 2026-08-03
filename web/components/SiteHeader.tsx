"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Início" },
  { href: "#visao", label: "A Visão" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#evidencias", label: "Evidências" },
  { href: "#galeria", label: "Revelações" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    if (!sections.length) return;

    const onScroll = () => {
      const header = document.querySelector(".site-header") as HTMLElement | null;
      const offset = (header?.offsetHeight ?? 64) + 24;
      let current = sections[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section.id;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegação principal">
        <a className="nav-brand" href="#home" onClick={() => setOpen(false)}>
          <span className="nav-mark" aria-hidden>
            NL
          </span>
          <span className="nav-title nl-neon">NEUROLUMEN</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" aria-hidden />
          <span className="nav-toggle-bar" aria-hidden />
          <span className="nav-toggle-bar" aria-hidden />
        </button>

        <ul className={`nav-links${open ? " is-open" : ""}`} id="nav-menu">
          {LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

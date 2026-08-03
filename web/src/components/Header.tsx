import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Início" },
  { href: "#visao", label: "A Visão" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#evidencias", label: "Evidências" },
  { href: "#galeria", label: "Revelações" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = LINKS.map((l) => l.href.slice(1));
    const onScroll = () => {
      const offset = 88;
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

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
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? "is-active" : undefined}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

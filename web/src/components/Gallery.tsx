const ITEMS = [
  {
    title: "A Santa Ceia",
    meta: "Leonardo da Vinci · 1495–1498",
    badge: "Fato documentado",
    badgeCls: "evidence-fato",
  },
  {
    title: "Mona Lisa",
    meta: "Leonardo da Vinci · c. 1503–1506",
    badge: "Fato documentado",
    badgeCls: "evidence-fato",
  },
  {
    title: "Códices",
    meta: "Manuscritos · anatomia, voo, engenharia",
    badge: "Inferência",
    badgeCls: "evidence-inferencia",
  },
  {
    title: "Escrita espelhada",
    meta: "Padrão gráfico e hipóteses de uso",
    badge: "Hipótese exploratória",
    badgeCls: "evidence-hipotese",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="section section-galeria" aria-labelledby="galeria-title">
      <div className="container">
        <header className="section-header">
          <h2 id="galeria-title" className="section-title nl-neon">
            Revelações
          </h2>
          <p className="section-lead">
            Foco Alpha: Santa Ceia, Mona Lisa, Códices e escrita espelhada.
          </p>
        </header>
        <div className="gallery-grid">
          {ITEMS.map((item) => (
            <article key={item.title} className="card gallery-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.meta}</p>
              <p className={`evidence-badge ${item.badgeCls}`}>{item.badge}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

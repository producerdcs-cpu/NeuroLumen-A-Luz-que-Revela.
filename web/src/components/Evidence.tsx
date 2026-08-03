const ITEMS = [
  {
    cls: "evidence-fato",
    badge: "Fato documentado",
    title: "Fontes verificáveis",
    text: "Baseado em documentos históricos, consenso acadêmico e evidências materiais comprovadas.",
  },
  {
    cls: "evidence-inferencia",
    badge: "Inferência",
    title: "Modelos + evidências",
    text: "Derivada de padrões observáveis e modelos computacionais, com grau de confiança indicado.",
  },
  {
    cls: "evidence-hipotese",
    badge: "Hipótese exploratória",
    title: "Baixa ou média confiança",
    text: "Interpretação possível, sempre acompanhada de limitações e fontes utilizadas.",
  },
  {
    cls: "evidence-criativo",
    badge: "Conteúdo criativo",
    title: "Simulação / narrativa",
    text: "Produzido por IA para exploração ou educação — explicitamente marcado como não factual.",
  },
];

export function Evidence() {
  return (
    <section
      id="evidencias"
      className="section section-evidencias"
      aria-labelledby="evidencias-title"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="evidencias-title" className="section-title nl-neon">
            Classificação de Evidências
          </h2>
          <p className="section-lead">
            Toda saída da plataforma é classificada com transparência. Nenhuma
            hipótese é apresentada como fato.
          </p>
        </header>
        <div className="evidence-grid">
          {ITEMS.map((item) => (
            <article key={item.badge} className={`card evidence-card ${item.cls}`}>
              <p className="evidence-badge">{item.badge}</p>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

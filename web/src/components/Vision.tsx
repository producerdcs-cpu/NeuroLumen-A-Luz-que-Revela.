const PILLARS = [
  {
    title: "1. Arte",
    text: "Análise de pinturas, esculturas, arquitetura, manuscritos e desenhos — camadas, geometria, pigmentos e restauração digital.",
  },
  {
    title: "2. BioData",
    text: "Mapa histórico de indivíduos: cronologia, influências, obras, correspondências, colaborações e contexto social.",
  },
  {
    title: "3. Cognição",
    text: "Motor inspirado em memória, atenção, associação e criatividade — sempre como hipóteses explicáveis, nunca como leitura de mentes.",
  },
  {
    title: "4. Knowledge Graph",
    text: "Todo conhecimento conectado: de Leonardo à óptica, da anatomia à engenharia, do Renascimento a outros pesquisadores.",
  },
  {
    title: "5. Luz Reveladora",
    text: "O algoritmo atravessa imagem, texto, voz e contexto histórico, indicando o grau de evidência de cada descoberta.",
  },
];

export function Vision() {
  return (
    <section id="visao" className="section section-visao" aria-labelledby="visao-title">
      <div className="container">
        <header className="section-header">
          <h2 id="visao-title" className="section-title nl-neon">
            O Que é NeuroLumen?
          </h2>
          <p className="section-lead">
            Cinco pilares para revelar como a inteligência humana deixa rastros em
            tudo o que cria.
          </p>
        </header>
        <div className="pillars-grid">
          {PILLARS.map((p) => (
            <article key={p.title} className="card pillar-card">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import SiteHeader from "@/components/SiteHeader";
import LightCanvas from "@/components/LightCanvas";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <p className="hero-eyebrow">A Luz que Revela a Mão Humana</p>
            <h1 id="hero-title" className="hero-title nl-neon">
              A LUZ
              <br />
              QUE REVELA
            </h1>
            <p className="hero-lead">
              Plataforma de decodificação cognitiva da produção humana.
              Reconstruímos processos criativos a partir de evidências
              observáveis — nunca afirmamos “o que alguém pensava”.
            </p>
            <p className="hero-actions">
              <a className="btn btn-primary" href="#experiencia">
                Entrar na Luz
              </a>
              <a className="btn btn-ghost" href="#visao">
                Conhecer a visão
              </a>
            </p>
          </div>
        </section>

        <section id="visao" className="section section-visao" aria-labelledby="visao-title">
          <div className="container">
            <header className="section-header">
              <h2 id="visao-title" className="section-title nl-neon">
                O Que é NeuroLumen?
              </h2>
              <p className="section-lead">
                Cinco pilares para revelar como a inteligência humana deixa
                rastros em tudo o que cria.
              </p>
            </header>
            <div className="pillars-grid">
              {[
                {
                  t: "1. Arte",
                  d: "Análise de pinturas, esculturas, arquitetura, manuscritos e desenhos — camadas, geometria, pigmentos e restauração digital.",
                },
                {
                  t: "2. BioData",
                  d: "Mapa histórico de indivíduos: cronologia, influências, obras, correspondências, colaborações e contexto social.",
                },
                {
                  t: "3. Cognição",
                  d: "Motor inspirado em memória, atenção, associação e criatividade — sempre como hipóteses explicáveis, nunca como leitura de mentes.",
                },
                {
                  t: "4. Knowledge Graph",
                  d: "Todo conhecimento conectado: de Leonardo à óptica, da anatomia à engenharia, do Renascimento a outros pesquisadores.",
                },
                {
                  t: "5. Luz Reveladora",
                  d: "O algoritmo atravessa imagem, texto, voz e contexto histórico, indicando o grau de evidência de cada descoberta.",
                },
              ].map((item) => (
                <article key={item.t} className="card pillar-card">
                  <h3 className="card-title">{item.t}</h3>
                  <p className="card-text">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experiencia"
          className="section section-experiencia"
          aria-labelledby="experiencia-title"
        >
          <div className="container">
            <header className="section-header">
              <h2 id="experiencia-title" className="section-title nl-neon">
                Interaja com a Luz
              </h2>
              <p className="section-lead">
                Rede luminosa de evidências — toque ou mova o dedo para atrair
                as partículas.
              </p>
            </header>
            <LightCanvas />
          </div>
        </section>

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
                Toda saída da plataforma é classificada com transparência.
                Nenhuma hipótese é apresentada como fato.
              </p>
            </header>
            <div className="evidence-grid">
              <article className="card evidence-card evidence-fato">
                <p className="evidence-badge">Fato documentado</p>
                <h3 className="card-title">Fontes verificáveis</h3>
                <p className="card-text">
                  Baseado em documentos históricos, consenso acadêmico e
                  evidências materiais comprovadas.
                </p>
              </article>
              <article className="card evidence-card evidence-inferencia">
                <p className="evidence-badge">Inferência</p>
                <h3 className="card-title">Modelos + evidências</h3>
                <p className="card-text">
                  Derivada de padrões observáveis e modelos computacionais, com
                  grau de confiança indicado.
                </p>
              </article>
              <article className="card evidence-card evidence-hipotese">
                <p className="evidence-badge">Hipótese exploratória</p>
                <h3 className="card-title">Baixa ou média confiança</h3>
                <p className="card-text">
                  Interpretação possível, sempre acompanhada de limitações e
                  fontes utilizadas.
                </p>
              </article>
              <article className="card evidence-card evidence-criativo">
                <p className="evidence-badge">Conteúdo criativo</p>
                <h3 className="card-title">Simulação / narrativa</h3>
                <p className="card-text">
                  Produzido por IA para exploração ou educação — explicitamente
                  marcado como não factual.
                </p>
              </article>
            </div>
          </div>
        </section>

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
              <article className="card gallery-card">
                <h3 className="card-title">A Santa Ceia</h3>
                <p className="card-text">Leonardo da Vinci · 1495–1498</p>
                <p className="evidence-badge evidence-fato">Fato documentado</p>
              </article>
              <article className="card gallery-card">
                <h3 className="card-title">Mona Lisa</h3>
                <p className="card-text">Leonardo da Vinci · c. 1503–1506</p>
                <p className="evidence-badge evidence-fato">Fato documentado</p>
              </article>
              <article className="card gallery-card">
                <h3 className="card-title">Códices</h3>
                <p className="card-text">Manuscritos · anatomia, voo, engenharia</p>
                <p className="evidence-badge evidence-inferencia">Inferência</p>
              </article>
              <article className="card gallery-card">
                <h3 className="card-title">Escrita espelhada</h3>
                <p className="card-text">Padrão gráfico e hipóteses de uso</p>
                <p className="evidence-badge evidence-hipotese">
                  Hipótese exploratória
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

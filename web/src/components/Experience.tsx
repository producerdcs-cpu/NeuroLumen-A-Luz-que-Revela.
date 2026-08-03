import { LightCanvas } from "./LightCanvas";

export function Experience() {
  return (
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
            Rede luminosa de evidências — toque ou mova o dedo para atrair as
            partículas.
          </p>
        </header>
        <LightCanvas />
      </div>
    </section>
  );
}

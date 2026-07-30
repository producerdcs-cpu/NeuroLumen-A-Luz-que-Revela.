# Code Style — NeuroLumen

Padrões oficiais de código. Serão refinados a cada Build, mas a base já vale a partir da 0.1.

---

## Princípios gerais

- Clareza > esperteza
- Modularidade > monolito
- Documentação junto do código
- Nomes descritivos em inglês (código) e português (documentação de domínio quando fizer sentido)
- Um conceito por arquivo / módulo

---

## HTML

- Semântica correta (`header`, `main`, `section`, `nav`, `footer`, etc.)
- Atributos de acessibilidade quando necessário
- Indentação de 2 espaços
- Sem lógica inline (eventos serão adicionados via JS modular)

## CSS

- Separação clara de responsabilidades:
  - `variables.css` → tokens
  - `style.css` → estilos base e componentes
  - `animations.css` → animações
  - `responsive.css` → media queries
- Preferir classes utilitárias (Tailwind) + CSS custom quando necessário
- Evitar `!important`

## JavaScript / TypeScript

- Módulos ES (`import` / `export`)
- Um módulo = uma responsabilidade (`navigation.js`, `layers.js`, `api.js`…)
- Preferir `const` e `let`; evitar `var`
- Funções pequenas e com nomes claros
- TypeScript obrigatório a partir da migração para React (Build 0.7+)

## Python (Backend / IA)

- Seguir PEP 8
- Type hints sempre que possível
- Docstrings em funções e classes públicas
- Separação clara entre rotas, serviços, modelos e engines de IA

## Nomenclatura de arquivos e pastas

- `kebab-case` para arquivos e pastas de documentação e assets
- `PascalCase` para componentes React
- `snake_case` para módulos Python

## Commits

Formato preferido (Conventional Commits):

```
feat: adiciona visualizador de camadas
docs: atualiza manifesto com limites éticos
fix: corrige classificação de evidência no decoder
chore: atualiza .gitignore
```

---

*Build 0.1 — Genesis*

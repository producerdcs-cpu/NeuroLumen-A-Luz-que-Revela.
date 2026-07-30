# Design System NeuroLumen

**Identidade visual — Build 0.1 (fundação)**

---

## 1. Conceito Visual

**A Luz que Revela.**

- Fundo profundo (quase preto / zinc-950)
- Luz ciano / teal como elemento revelador
- Partículas, redes neurais e geometria sutil
- Tipografia limpa, moderna e com peso tipográfico forte nos títulos
- Sensação de descoberta, rigor e beleza

A imagem de referência gerada (cérebro neural ciano + tipografia) é o ponto de partida oficial da identidade.

---

## 2. Paleta (proposta inicial)

| Token | Valor | Uso |
|-------|-------|-----|
| `--nl-bg` | `#0a0a0a` / `zinc-950` | Fundo principal |
| `--nl-surface` | `#18181b` / `zinc-900` | Cards e superfícies |
| `--nl-border` | `cyan-500/20` → `cyan-400` | Bordas e hover |
| `--nl-primary` | `#00ffcc` / cyan-400 | Ações, luz, destaques |
| `--nl-primary-hover` | cyan-300 / cyan-400 | Hover de botões |
| `--nl-text` | `#ffffff` | Texto principal |
| `--nl-text-muted` | `zinc-400` | Texto secundário |
| `--nl-neon` | text-shadow cyan | Títulos hero |

Tema claro será definido na Build 0.3 / 0.5, mantendo a mesma lógica de “luz reveladora”.

---

## 3. Tipografia

- **Interface geral:** Inter / system-ui / sans-serif
- **Títulos de impacto:** tracking-tighter, peso bold/extrabold
- **Neon text:** `text-shadow: 0 0 20px #00ffcc, 0 0 40px #00ffcc`

---

## 4. Espaçamento e Layout

- Container máximo: `max-w-6xl` / `max-w-7xl`
- Seções: `py-24`
- Cards: `rounded-3xl`, padding generoso
- Grid responsivo (2 → 3 → 4 colunas conforme contexto)

---

## 5. Componentes-chave (a detalhar na Build 0.3+)

- Navbar fixa com blur
- Hero com partículas Three.js
- Cards de pilares
- Layer Viewer (visualização em camadas)
- Timeline
- BioData cards
- Universe Graph (3D)
- Botões “Entrar na Luz” / ações primárias
- Footer discreto

---

## 6. Animações e Movimento

- Scroll suave
- Hover em escala sutil (`hover:scale-105`)
- Partículas com rotação lenta e blending aditivo
- Transições de opacidade em overlays de galeria

---

## 7. Acessibilidade e Temas

- Contraste adequado no tema escuro
- Tema claro a ser formalizado
- Suporte a `prefers-reduced-motion`
- Semântica HTML correta desde a primeira estrutura HTML

---

## 8. Próximos passos (Design System)

Na **Build 0.3** este documento será expandido para:
- Tokens completos (CSS variables / Tailwind config)
- Especificação de todos os componentes
- Guia de uso de ícones (Font Awesome / custom)
- Exemplos visuais e protótipos de alta fidelidade

---

*Documento oficial da Build 0.1 — Genesis*

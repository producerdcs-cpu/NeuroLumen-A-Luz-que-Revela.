# Componentes NeuroLumen

Especificação de componentes da interface (Build 0.3).

---

## Navbar

- **Posição:** fixed top
- **Fundo:** `var(--nl-bg)` com opacidade + backdrop-blur
- **Borda:** inferior com `var(--nl-border)`
- **Conteúdo:** logo + nome | links de navegação
- **Comportamento:** scroll suave para âncoras

## Hero

- **Altura:** min-h-screen
- **Título:** 6xl–8xl, tracking-tighter, `.nl-neon`
- **Subtítulo:** text-xl, cor primary suave
- **CTA:** botão primário “Entrar na Luz”
- **Fundo:** partículas ou imagem de marca opcional

## Botão primário

- Fundo `var(--nl-primary)`, texto contraste (preto no dark)
- `border-radius: var(--nl-radius-full)`
- Hover: `var(--nl-primary-hover)` + scale 1.05
- Transição suave

## Card

- Fundo `var(--nl-surface)`
- Borda `var(--nl-border)` → hover `var(--nl-border-strong)`
- `border-radius: var(--nl-radius-xl)` ou 3xl
- Padding generoso (p-6 a p-8)

## Badge de evidência

| Tipo | Cor de referência |
|------|-------------------|
| Fato documentado | `--nl-success` |
| Inferência | `--nl-info` |
| Hipótese | `--nl-warning` |
| Criativo | `--nl-creative` |

Formato: pill com fundo semitransparente + borda + texto na cor semântica.

## Footer

- Borda superior sutil
- Texto muted, centralizado
- Links discretos

---

Componentes avançados (Layer Viewer, Timeline, Universe Graph, BioData cards) serão detalhados quando a interface correspondente for implementada (Builds 0.4+).

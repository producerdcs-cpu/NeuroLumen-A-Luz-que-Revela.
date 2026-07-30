# Design System NeuroLumen

**Build 0.3 — Design System completo**

---

## 1. Conceito Visual

**A Luz que Revela.**

A identidade combina:
- Fundo profundo (quase preto)
- Luz ciano / teal como elemento revelador
- Redes neurais, partículas e geometria sutil
- Tipografia limpa e de alto impacto nos títulos
- Sensação de descoberta, rigor científico e beleza

A “luz” nunca é decoração: ela **revela** conexões, camadas e evidências.

---

## 2. Assets Oficiais de Marca

| Arquivo (raiz — temporário) | Uso | Destino Build 0.3+ |
|-----------------------------|-----|---------------------|
| `neurolumen-logo-brain.png` | Logo / Banner principal | `assets/brand/neurolumen-logo-brain.png` |
| `architecture-of-the-mind.png`* | AI Engine — Processamento Multimodal | `assets/concepts/multimodal-processing-universal.png` |
| `multimodal-processing-universal.png`* | Impacto Neuroscience — Architecture of the Mind | `assets/concepts/architecture-of-the-mind.png` |

\* Os nomes dos arquivos na raiz ficaram invertidos em relação ao conteúdo visual. Na organização definitiva os arquivos serão renomeados para bater com o conteúdo.

### Estrutura-alvo de assets

```
assets/
├── brand/
│   ├── neurolumen-logo-brain.png
│   └── favicon.ico          (futuro)
├── concepts/
│   ├── multimodal-processing-universal.png
│   └── architecture-of-the-mind.png
├── icons/
├── fonts/
└── textures/
```

---

## 3. Design Tokens

### 3.1 Cores — Tema Escuro (padrão)

| Token | Valor | Uso |
|-------|-------|-----|
| `--nl-bg` | `#0a0a0a` | Fundo principal |
| `--nl-bg-elevated` | `#111113` | Fundo elevado |
| `--nl-surface` | `#18181b` | Cards, painéis |
| `--nl-surface-hover` | `#27272a` | Hover de superfícies |
| `--nl-border` | `rgba(34, 211, 238, 0.2)` | Bordas sutis |
| `--nl-border-strong` | `rgba(34, 211, 238, 0.5)` | Bordas em destaque |
| `--nl-primary` | `#22d3ee` | Ações primárias, luz |
| `--nl-primary-hover` | `#67e8f9` | Hover primário |
| `--nl-primary-muted` | `rgba(34, 211, 238, 0.15)` | Fundos de destaque |
| `--nl-text` | `#ffffff` | Texto principal |
| `--nl-text-secondary` | `#a1a1aa` | Texto secundário |
| `--nl-text-muted` | `#71717a` | Texto terciário |
| `--nl-success` | `#34d399` | Sucesso / fato documentado |
| `--nl-warning` | `#fbbf24` | Atenção / hipótese |
| `--nl-danger` | `#f87171` | Erro / alerta |
| `--nl-info` | `#60a5fa` | Informação / inferência |
| `--nl-creative` | `#c084fc` | Conteúdo criativo |

### 3.2 Cores — Tema Claro

| Token | Valor | Uso |
|-------|-------|-----|
| `--nl-bg` | `#fafafa` | Fundo principal |
| `--nl-bg-elevated` | `#ffffff` | Fundo elevado |
| `--nl-surface` | `#ffffff` | Cards |
| `--nl-surface-hover` | `#f4f4f5` | Hover |
| `--nl-border` | `rgba(8, 145, 178, 0.25)` | Bordas |
| `--nl-primary` | `#0891b2` | Ações primárias |
| `--nl-primary-hover` | `#0e7490` | Hover |
| `--nl-text` | `#18181b` | Texto principal |
| `--nl-text-secondary` | `#52525b` | Texto secundário |
| `--nl-text-muted` | `#a1a1aa` | Texto terciário |

### 3.3 Classificação de evidência (cores semânticas)

| Tipo | Token / cor | Uso na UI |
|------|-------------|----------|
| Fato documentado | `--nl-success` (verde) | Badge, borda, ícone |
| Inferência | `--nl-info` (azul) | Badge, borda |
| Hipótese exploratória | `--nl-warning` (âmbar) | Badge, borda |
| Conteúdo criativo | `--nl-creative` (roxo) | Badge, borda |

### 3.4 Tipografia

| Token | Valor |
|-------|-------|
| `--nl-font-sans` | `'Inter', system-ui, -apple-system, sans-serif` |
| `--nl-font-mono` | `'JetBrains Mono', 'Fira Code', ui-monospace, monospace` |
| `--nl-text-xs` | `0.75rem` (12px) |
| `--nl-text-sm` | `0.875rem` (14px) |
| `--nl-text-base` | `1rem` (16px) |
| `--nl-text-lg` | `1.125rem` (18px) |
| `--nl-text-xl` | `1.25rem` (20px) |
| `--nl-text-2xl` | `1.5rem` (24px) |
| `--nl-text-3xl` | `1.875rem` (30px) |
| `--nl-text-4xl` | `2.25rem` (36px) |
| `--nl-text-5xl` | `3rem` (48px) |
| `--nl-text-6xl` | `3.75rem` (60px) |
| `--nl-text-7xl` | `4.5rem` (72px) |
| `--nl-leading-tight` | `1.15` |
| `--nl-leading-normal` | `1.5` |
| `--nl-tracking-tight` | `-0.03em` |
| `--nl-tracking-tighter` | `-0.05em` |

**Neon text (títulos hero):**
```css
text-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4);
```

### 3.5 Espaçamento

Escala base 4px:

| Token | Valor |
|-------|-------|
| `--nl-space-1` | `0.25rem` (4px) |
| `--nl-space-2` | `0.5rem` (8px) |
| `--nl-space-3` | `0.75rem` (12px) |
| `--nl-space-4` | `1rem` (16px) |
| `--nl-space-5` | `1.25rem` (20px) |
| `--nl-space-6` | `1.5rem` (24px) |
| `--nl-space-8` | `2rem` (32px) |
| `--nl-space-10` | `2.5rem` (40px) |
| `--nl-space-12` | `3rem` (48px) |
| `--nl-space-16` | `4rem` (64px) |
| `--nl-space-24` | `6rem` (96px) |

### 3.6 Raios e sombras

| Token | Valor |
|-------|-------|
| `--nl-radius-sm` | `0.375rem` |
| `--nl-radius-md` | `0.75rem` |
| `--nl-radius-lg` | `1rem` |
| `--nl-radius-xl` | `1.5rem` |
| `--nl-radius-2xl` | `1.5rem` |
| `--nl-radius-3xl` | `1.5rem` / `24px` |
| `--nl-radius-full` | `9999px` |
| `--nl-shadow-glow` | `0 0 40px rgba(34, 211, 238, 0.15)` |
| `--nl-shadow-card` | `0 4px 24px rgba(0, 0, 0, 0.4)` |

### 3.7 Breakpoints

| Nome | Largura |
|------|---------|
| `sm` | `640px` |
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |
| `2xl` | `1536px` |

Container máximo recomendado: `max-w-6xl` / `max-w-7xl`.

---

## 4. Temas

### Tema Escuro (padrão)
Ativado por padrão. Classe raiz: `html` ou `body` sem modificador, ou `data-theme="dark"`.

### Tema Claro
Ativado com `data-theme="light"` no elemento raiz.

### Preferência do sistema
```css
@media (prefers-color-scheme: light) {
  /* aplicar tokens claros se data-theme não estiver definido */
}
```

### Movimento reduzido
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 5. Componentes

### 5.1 Navbar
- Fixa no topo
- Fundo `bg-black/80` + `backdrop-blur-md`
- Borda inferior sutil cyan
- Logo (ícone NL ou imagem) + nome
- Links de âncora com hover cyan
- Altura confortável (`py-4`)

### 5.2 Hero
- Altura mínima `min-h-screen`
- Título grande (`text-6xl` → `text-8xl`) com neon
- Subtítulo em cyan suave
- CTA primário (“Entrar na Luz”)
- Fundo com partículas / logo oficial opcional

### 5.3 Botão primário
```
bg-cyan-500 text-black font-semibold rounded-full
px-8 py-3 / px-10 py-4
hover:bg-cyan-400 hover:scale-105
transition
```

### 5.4 Card de pilar
```
bg-zinc-900 rounded-3xl border border-cyan-500/30
p-8
hover:border-cyan-400 transition
ícone cyan + título + texto muted
```

### 5.5 Badge de evidência
| Tipo | Estilo |
|------|--------|
| Fato | `bg-emerald-500/15 text-emerald-400 border-emerald-500/30` |
| Inferência | `bg-blue-500/15 text-blue-400 border-blue-500/30` |
| Hipótese | `bg-amber-500/15 text-amber-400 border-amber-500/30` |
| Criativo | `bg-purple-500/15 text-purple-400 border-purple-500/30` |

### 5.6 Layer Viewer (futuro)
- Canvas / área de visualização de camadas de obra
- Controles de opacidade por camada
- Legenda de evidências

### 5.7 Timeline
- Linha vertical ou horizontal
- Nós com ano / evento
- Conexão com BioData

### 5.8 Footer
- Discreto, borda superior zinc
- Copyright + link do autor
- Texto muted

---

## 6. Movimento e animação

| Tipo | Comportamento |
|------|----------------|
| Scroll | `scroll-smooth` |
| Hover botão | `scale-105` + mudança de cor |
| Hover card | borda cyan mais forte |
| Partículas | rotação lenta, blending aditivo |
| Entrada de seção | fade/slide sutil (opcional) |
| Reduced motion | desativar animações não essenciais |

---

## 7. Acessibilidade

- Contraste AA mínimo (texto sobre fundo)
- Foco visível em links e botões
- Semântica HTML correta (`header`, `main`, `nav`, `section`, `footer`)
- `alt` descritivo em imagens de conteúdo
- Suporte a teclado em todos os controles interativos
- `prefers-reduced-motion`

---

## 8. Arquivos de tokens (para Builds 0.4+)

| Arquivo | Conteúdo |
|---------|----------|
| `design/tokens.css` | CSS variables (dark + light) |
| `design/tailwind.preset.js` | Preset Tailwind (quando migrar) |
| `design/components.md` | Especificação detalhada de componentes |

Os arquivos `design/tokens.css` e a pasta `design/` são criados nesta Build.

---

## 9. Checklist Build 0.3

- [x] Conceito visual documentado
- [x] Assets oficiais mapeados
- [x] Tokens de cor (dark + light)
- [x] Tokens de tipografia
- [x] Tokens de espaçamento, raio e sombra
- [x] Breakpoints
- [x] Temas e prefers-*
- [x] Componentes principais especificados
- [x] Badges de evidência
- [x] Movimento e acessibilidade
- [x] Arquivo `design/tokens.css`
- [x] Estrutura `assets/` documentada

---

*Build 0.3 — Design System completo*

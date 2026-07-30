# Guia de Contribuição — NeuroLumen

Obrigado pelo interesse em contribuir com o NeuroLumen.

Este projeto é construído de forma incremental, documentada e com rigor científico. Toda contribuição deve respeitar os princípios estabelecidos no [MANIFESTO.md](./MANIFESTO.md) e na [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## Princípios que toda contribuição deve seguir

1. **Modularidade** — mudanças devem ser isoladas e reutilizáveis.
2. **Transparência** — nunca apresentar hipótese ou conteúdo de IA como fato documentado.
3. **Documentação** — código novo deve vir acompanhado de documentação atualizada.
4. **Explicabilidade** — qualquer saída de IA precisa indicar confiança, fontes e limitações.
5. **Respeito histórico e ético** — não atribuir intenções ou citações sem fonte verificável.

---

## Como contribuir

### 1. Antes de começar
- Leia o Manifesto, a Visão e a Arquitetura.
- Verifique o [ROADMAP.md](./ROADMAP.md) para saber em qual Build estamos.
- Abra uma Issue descrevendo a proposta (ou comente em Issue existente).

### 2. Fluxo de trabalho
1. Faça fork do repositório (ou trabalhe em branch a partir de `main`).
2. Crie uma branch descritiva: `feat/nome-da-feature`, `docs/atualizacao-manifesto`, `fix/correcao-typo`.
3. Faça commits claros e atômicos.
4. Atualize a documentação correspondente.
5. Abra um Pull Request descrevendo:
   - O que foi feito
   - Por que foi feito
   - Como testar
   - Impacto em outras partes do sistema

### 3. Padrões
- Siga o [CODE_STYLE.md](./CODE_STYLE.md).
- Mantenha a diferenciação obrigatória entre Fato / Inferência / Hipótese / Criativo.
- Não misture responsabilidades (ex.: não colocar lógica de IA dentro de componentes de UI).

---

## Tipos de contribuição bem-vindos

- Melhoria de documentação
- Correção de erros
- Novos módulos de BioData (com fontes)
- Componentes de interface
- Testes
- Traduções
- Relatos de bugs e sugestões de arquitetura

---

## Código de Conduta (resumo)

- Seja respeitoso.
- Foque no mérito das ideias.
- Preserve o rigor científico e ético do projeto.

---

*Build 0.1 — Genesis*

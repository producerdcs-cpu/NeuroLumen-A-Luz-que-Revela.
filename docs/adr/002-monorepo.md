# ADR-002 — Monorepo como estratégia de longo prazo

**Status:** Aceito  
**Data:** 2026-07-30  
**Build:** 0.2

## Contexto

O NeuroLumen terá Web, Mobile, Admin, packages compartilhados (UI, AI Engine, BioData, Graph) e backend.

## Decisão

Adotar estrutura de monorepositório:

```
apps/ (web, mobile, admin)
packages/ (ui, ai-engine, biodata, graph, api-client, shared)
backend/
docs/
```

## Consequências

- Compartilhamento de código e tipos entre plataformas.
- Versionamento e CI unificados.
- Maior disciplina de modularidade.

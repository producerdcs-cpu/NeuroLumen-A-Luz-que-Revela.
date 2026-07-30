# ADR-004 — Não personificação de figuras históricas

**Status:** Aceito  
**Data:** 2026-07-30  
**Build:** 0.1

## Contexto

Chatbots que “falam como Leonardo” criam falsas impressões de autenticidade e podem atribuir intenções ou citações sem base documental.

## Decisão

O módulo Historical Mind Explorer **não personifica** figuras históricas.  
Ele utiliza um simulador que declara explicitamente a base evidencial, por exemplo:

> “Com base em manuscritos, cartas, obras e contexto histórico, uma abordagem plausível seria…”

Citações sem comprovação de autoria nunca são apresentadas como fatos.

## Consequências

- Maior rigor ético e científico.
- Experiência de usuário mais honesta.
- Evita controvérsias de atribuição falsa.

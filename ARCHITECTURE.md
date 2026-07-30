# Arquitetura NeuroLumen

**Documento de arquitetura geral — Build 0.1**

---

## 1. Visão Arquitetural

O NeuroLumen é organizado em **quatro camadas oficiais** e evoluirá como um **monorepositório**.

```
CAMADA I   — Fundação          (documentação, padrões, ADRs)
CAMADA II  — Interface         (experiência visual e navegação)
CAMADA III — Inteligência      (IA multimodal + BioData + Graph)
CAMADA IV  — Plataforma        (web, mobile, APIs, infra, deploy)
```

Nenhuma camada inferior deve depender de detalhes de implementação de camadas superiores.

---

## 2. Fluxo de Dados de Alto Nível

```
Imagem  ──┐
Texto   ──┤
Áudio   ──┼──► Encoder(s) ──► Transformer / Modelos ──► Knowledge Graph
Vídeo   ──┘                                              │
                                                         ▼
                                              Motor de Hipóteses
                                                         │
                                                         ▼
                                              Explicabilidade
                                                         │
                                                         ▼
                                                   Interface
```

Cada hipótese gerada carrega obrigatoriamente:
- nível de confiança
- fontes utilizadas
- evidências
- limitações conhecidas

---

## 3. Módulos Principais

| Módulo | Responsabilidade |
|--------|------------------|
| **Neural Art Decoder** | Segmentação, reconstrução, comparação histórica, análise de estilo, visualização em camadas |
| **Historical Mind Explorer** | Simulador baseado em evidências (nunca personificação direta) |
| **BioData Collective** | Biblioteca viva de perfis históricos e contemporâneos (com consentimento) |
| **Neural Voice Explorer** | Análise de prosódia, ritmo, estrutura linguística |
| **Manuscript Decoder** | OCR manuscrito, escrita espelhada, paleografia, reconstrução |
| **Universe Graph** | Visualização 3D de conexões entre arte, ciência, história, matemática, filosofia etc. |

---

## 4. Stack Tecnológico (alvo)

### Front-end
- Next.js / React / TypeScript
- Three.js + D3.js + WebGPU
- Tailwind CSS

### Back-end
- Python + FastAPI
- Rust (componentes de performance)
- gRPC onde fizer sentido

### IA
- PyTorch / ONNX
- OpenCV, DINOv2, Segment Anything, CLIP
- RAG + LLM multimodal
- NVIDIA Triton + Ray (serving e orquestração)

### Banco de Dados
- PostgreSQL (relacional)
- Neo4j (Knowledge Graph)
- Milvus (vetores)
- MinIO (objetos)

### Infraestrutura
- Docker + Kubernetes
- GitHub Actions
- Vercel (frontend) + Railway / cloud (backend)

---

## 5. Estrutura de Monorepositório (alvo a partir da Build 0.2)

```
NeuroLumen/
├── apps/
│   ├── web/
│   ├── mobile/
│   └── admin/
├── packages/
│   ├── ui/
│   ├── ai-engine/
│   ├── biodata/
│   ├── graph/
│   ├── api-client/
│   └── shared/
├── backend/
├── docs/
├── docker/
├── scripts/
└── .github/
```

---

## 6. Princípios Arquiteturais

1. **Modularidade** — cada pacote e módulo independente
2. **Transparência** — classificação obrigatória de fatos / inferências / hipóteses / criativo
3. **Escalabilidade** — crescimento horizontal sem reescrita da base
4. **Explicabilidade** — toda saída de IA acompanhada de evidências e limitações
5. **Preservação Cultural** — respeito ao contexto histórico

---

## 7. Architecture Decision Records (ADRs)

As decisões importantes serão registradas em `docs/adr/` a partir da Build 0.2.

Exemplos de decisões já tomadas na 0.1:

- Documentação antes de qualquer código de aplicação
- Monorepo como estratégia de longo prazo
- Diferenciação obrigatória entre tipos de evidência
- Não personificação de figuras históricas

---

*Documento oficial da Build 0.1 — Genesis*

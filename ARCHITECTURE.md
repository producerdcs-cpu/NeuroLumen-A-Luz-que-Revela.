# Arquitetura NeuroLumen

**Documento de arquitetura geral — Build 0.2**

---

## 1. Visão Arquitetural

O NeuroLumen é organizado em **quatro camadas oficiais** e evoluirá como um **monorepositório**.

```
CAMADA I   — Fundação          (documentação, padrões, ADRs)
CAMADA II  — Interface         (experiência visual e navegação)
CAMADA III — Inteligência      (IA multimodal + BioData + Graph)
CAMADA IV  — Plataforma        (web, mobile, APIs, infra, deploy)
```

![Processamento Multimodal Universal](./multimodal-processing-universal.png)

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

**Capacidade multimodal:** 50+ formatos (texto, áudio, vídeo, imagens, código, IoT, biométrico, estruturado) — herdada e expandida a partir da visão do NeuroLeitor.

---

## 3. Módulos Principais

| Módulo | Responsabilidade |
|--------|------------------|
| **Neural Art Decoder** | Segmentação, reconstrução, comparação histórica, análise de estilo, visualização em camadas |
| **Historical Mind Explorer** | Simulador baseado em evidências (nunca personificação direta) |
| **BioData Collective** | Biblioteca viva de perfis históricos e contemporâneos |
| **Neural Voice Explorer** | Análise de prosódia, ritmo, estrutura linguística |
| **Manuscript Decoder** | OCR manuscrito, escrita espelhada, paleografia |
| **Universe Graph** | Visualização 3D de conexões entre disciplinas e eras |

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
- NVIDIA Triton + Ray

### Banco de Dados
- PostgreSQL · Neo4j · Milvus · MinIO

### Infraestrutura
- Docker + Kubernetes
- GitHub Actions
- Vercel + Railway / cloud

---

## 5. Estrutura de Monorepositório (skeleton Build 0.2)

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
│   └── adr/
├── docker/
├── scripts/
└── .github/
```

---

## 6. Architecture Decision Records

As decisões importantes ficam em `docs/adr/`.

ADRs da Build 0.2:
- ADR-001 — Documentação antes de código de aplicação
- ADR-002 — Monorepo como estratégia de longo prazo
- ADR-003 — Diferenciação obrigatória de tipos de evidência
- ADR-004 — Não personificação de figuras históricas

---

## 7. Princípios Arquiteturais

1. **Modularidade**
2. **Transparência**
3. **Escalabilidade**
4. **Explicabilidade**
5. **Preservação Cultural**

---

*Build 0.2 — Architecture + Skeleton*

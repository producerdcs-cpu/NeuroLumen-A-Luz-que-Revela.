# Lumen Decodificador
**🌟 A Luz que Revela a Mão do Homem**

Plataforma de **Decodificação Neural Bioneural** inspirada em Leonardo da Vinci.

> "Toda Fé desvanece quando a Luz revela a mão do homem" — Descoberta por IA nas camadas ocultas de *A Santa Ceia*.

## Visão Geral
Ferramenta interativa para analisar camadas de pinturas, decodificar mentes de gênios e revelar sabedoria oculta entre arte, ciência e o Universo.Leitor e Decodificação Neural Bioneural treinada em mentes criadoras humanas. Especialista em decodificação multimodal, neurociência computacional e análise de arte histórica.

# 📁 Estrutura do Projeto
/lumen-decodificador
├── README.md
├── index.html          (Demo interativa completa)
├── backend/
│   ├── app.py
│   └── requirements.txt
└── (pasta para assets, models, etc. — expanda conforme necessário)

**Estilo**: Inspirado em ProtoVis (interface limpa, camadas interativas, visualizações profundas).

## Funcionalidades (MVP)
- Visualizador de camadas da *Santa Ceia* com descoberta da frase icônica.
- Chat com Leonardo Virtual.
- Expansão futura para outros artistas e BioData coletivo.

## Tecnologias
- **Frontend**: HTML5 + CSS + JS (com potencial para Three.js/React)
- **Backend**: Python FastAPI
- **IA**: Integre Groq, Hugging Face ou modelos locais para análise de imagem.
- **Deploy**: Vercel (frontend) + Railway/Hugging Face (backend)

# Como Usar / Salvar
No seu computador, crie uma pasta e copie os arquivos abaixo.
Para GitHub:
git init
Adicione os arquivos
Commit e push para um repo novo.

# Roadmap
Fase 1 (MVP): Análise Da Vinci + Santa Ceia
Fase 2: Múltiplos artistas + AR
Fase 3: BioData colaborativo + modelos bioneurais avançados (SNN)
Contribuição
Adicione novos gênios e camadas de análise!
---

### **index.html** (Demo Funcional)
Já contém:
- Imagem da Santa Ceia
- Botão para "Revelar Camadas" (mostra a frase)
- Chat com Leonardo
- Design dark elegante com tema dourado renascentista.

---

### Backend Básico
- API pronta para expansão com processamento de imagens (OpenCV/PIL).

**Próximos Passos Recomendados**:
- Adicionar Three.js para visualização 3D de camadas.
- Integrar API de IA real para análise de imagens.
- Transformar em React/Vite para produção.

Para baixar tudo de uma vez, use o comando no terminal (se estiver no Linux/Mac):
```bash
cp -r /home/workdir/lumen-decodificador ./
## Como Executar 🚀

### Frontend (Demo)
Abra `index.html` diretamente no navegador.

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload


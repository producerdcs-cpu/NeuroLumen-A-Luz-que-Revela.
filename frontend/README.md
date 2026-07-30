# frontend/

Interface do NeuroLumen.

## Builds

| Build | Conteúdo |
|-------|----------|
| **0.4** | HTML semântico sem JavaScript |
| **0.5** | CSS completo + GitHub Pages |

## Arquivos

```
frontend/
├── index.html
├── css/
│   ├── variables.css
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
└── README.md
```

## Visualizar localmente

Abra `frontend/index.html` no navegador.

## Visualizar online (GitHub Pages)

Após ativar Pages (Settings → Pages → Source: GitHub Actions), o site fica em:

```
https://producerdcs-cpu.github.io/NeuroLumen-A-Luz-que-Revela./
```

(O ponto no nome do repositório faz parte da URL.)

O workflow `.github/workflows/pages.yml` publica a pasta `frontend/` a cada push em `main`.

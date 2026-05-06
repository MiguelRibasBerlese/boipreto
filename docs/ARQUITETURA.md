# Arquitetura do Projeto

## Estrutura de Pastas

```
boipreto/
│
├── public/                        # Arquivos estáticos servidos diretamente
│   ├── logo.png                   # Logo oficial Boi Preto
│   ├── boi-nelore.jpg             # Imagem de fundo do Hero (Home)
│   ├── nelore-angus.jpg           # Imagem da seção Equilíbrio Semiótico (Sobre)
│   ├── rebanho-nelore.jpg         # Imagem de rebanho (Serviços)
│   ├── escritorio.jpg             # Foto da equipe/escritório (Sobre e Contato)
│   └── brazil.json                # GeoJSON do Brasil para o mapa interativo
│
├── src/
│   ├── components/                # Componentes reutilizáveis
│   │   ├── TopNavBar.tsx          # Barra de navegação superior (fixa)
│   │   ├── Footer.tsx             # Rodapé com logo, links e redes sociais
│   │   ├── Layout.tsx             # Wrapper geral: NavBar + conteúdo + Footer
│   │   └── BrazilMap.tsx          # Mapa SVG interativo do Brasil
│   │
│   ├── pages/                     # Páginas do site (uma por rota)
│   │   ├── Home.tsx               # Página inicial (/)
│   │   ├── Services.tsx           # Página de serviços (/servicos)
│   │   ├── Cases.tsx              # Página de cases (/cases)
│   │   ├── About.tsx              # Página sobre (/sobre)
│   │   └── Contact.tsx            # Página de contato (/contato)
│   │
│   ├── constants/
│   │   └── site.ts                # ⭐ Fonte única de verdade para conteúdo
│   │
│   ├── types/
│   │   └── index.ts               # Interfaces TypeScript do projeto
│   │
│   ├── lib/
│   │   └── utils.ts               # Utilitários (cn para classnames)
│   │
│   ├── App.tsx                    # Configuração de rotas (React Router)
│   ├── main.tsx                   # Ponto de entrada da aplicação
│   └── index.css                  # Estilos globais e variáveis de design
│
├── vercel.json                    # Configuração de SPA rewrites para Vercel
├── .npmrc                         # Configuração do npm (legacy-peer-deps)
├── vite.config.ts                 # Configuração do Vite
├── tailwind.config.ts             # Configuração do Tailwind CSS
├── tsconfig.json                  # Configuração do TypeScript
└── package.json                   # Dependências e scripts
```

---

## Fluxo de Navegação

```
Usuário acessa URL
       ↓
   App.tsx (React Router)
       ↓
   Layout.tsx
   ┌─────────────────────┐
   │  TopNavBar.tsx      │ ← fixo no topo
   │─────────────────────│
   │  <Outlet />         │ ← página atual renderiza aqui
   │   ├── Home.tsx      │   rota: /
   │   ├── Services.tsx  │   rota: /servicos
   │   ├── Cases.tsx     │   rota: /cases
   │   ├── About.tsx     │   rota: /sobre
   │   └── Contact.tsx   │   rota: /contato
   │─────────────────────│
   │  Footer.tsx         │ ← fixo no rodapé
   └─────────────────────┘
```

---

## Fluxo de Dados

Todo o conteúdo do site parte de **um único arquivo**:

```
src/constants/site.ts
       ↓
  exporta constantes:
  - SERVICES_DATA    → Services.tsx
  - ATUACAO_STATES   → About.tsx → BrazilMap.tsx
  - textos/links     → qualquer página
```

**Regra:** Para alterar qualquer texto, copy ou dado estrutural do site, edite **apenas** `src/constants/site.ts`. Nunca coloque strings fixas dentro das páginas.

---

## Componentes — Responsabilidades

### `TopNavBar.tsx`
- Barra de navegação fixa no topo da tela
- Logo da Boi Preto (esquerda) + links de navegação (centro) + botão CTA (direita)
- Destaca a rota ativa com borda dourada
- Efeito hover com underline animado nos links

### `Footer.tsx`
- Rodapé com logo, links de política e redes sociais
- Links externos (LinkedIn, Instagram) abrem em nova aba
- Links internos (Privacidade, Termos) ainda sem destino definido

### `Layout.tsx`
- Wrapper que envolve todas as páginas
- Renderiza NavBar → página atual (`<Outlet />`) → Footer

### `BrazilMap.tsx`
- Mapa SVG interativo do Brasil via `react-simple-maps`
- Carrega GeoJSON de `/public/brazil.json`
- 6 estados ativos destacados em dourado (#C9A84C)
- Hover: estado acende com glow dourado
- Clique: exibe painel lateral com nome e descrição do estado
- Dados dos estados vêm de `ATUACAO_STATES` em `site.ts`

---

## Fontes e Identidade Visual

| Variável CSS | Fonte | Uso |
|---|---|---|
| `font-logo` | Montserrat | H1, títulos de marca, botões |
| `font-headline` | Newsreader | Textos editoriais, itálicos |
| `font-body` | Space Grotesk | Parágrafos e textos corridos |
| `font-label` | Space Grotesk | Labels, badges, navegação |

### Cores principais

| Nome | Hex | Uso |
|---|---|---|
| `primary` | `#C9A84C` | Dourado — destaque, botões, ícones |
| `background` | `#0a0a0a` | Fundo escuro principal |
| `surface` | `#111111` | Fundo de cards e seções |
| `on-surface` | `#f5f5f5` | Texto principal |
| `on-surface-variant` | `#aaaaaa` | Texto secundário |

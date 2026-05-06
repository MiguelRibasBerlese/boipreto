# Boi Preto Consultoria — Site Institucional

![Deploy](https://img.shields.io/github/deployments/MiguelRibasBerlese/boipreto/production?label=vercel&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)

Site institucional da **Boi Preto Consultoria Agropecuária** — especializada em gestão de alta performance para pecuaristas. SPA com tema escuro editorial, animações de entrada e mapa interativo de presença territorial.

---

## Páginas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Hero, pain points, metodologia e CTA |
| `/servicos` | Serviços | Cards dos 3 produtos da consultoria |
| `/cases` | Cases | Resultados auditáveis da Fazenda Nova Era |
| `/sobre` | Sobre | Narrativa de marca e mapa SVG interativo |
| `/contato` | Contato | Formulário de lead + Google Maps |

---

## Stack

| Tecnologia | Versão | Função |
|---|---|---|
| React | 19 | Framework de UI |
| TypeScript | 5.8 | Tipagem estática |
| Vite | 6 | Build tool e dev server (porta 3000) |
| Tailwind CSS | 4 | Estilização utilitária via `@theme` |
| React Router DOM | 7 | Roteamento client-side |
| Motion | 12 | Animações (fork do Framer Motion) |
| Lucide React | latest | Ícones SVG |
| react-simple-maps | 3 | Mapa SVG interativo do Brasil |

---

## Funcionalidades

- **Mapa SVG interativo** — estados de atuação destacados em dourado com glow, clique exibe painel lateral com detalhes
- **CTA WhatsApp** — formulário de contato abre conversa direta no WhatsApp ao submeter
- **Google Maps embed** — mapa do escritório em Araguaína-TO com filtro grayscale
- **Navegação funcional** — todos os botões roteados corretamente via React Router
- **Links externos** — LinkedIn e Instagram com `target="_blank"`
- **Hover effects** — `scale`, `brightness` e underline animado em todos os elementos interativos
- **Favicon e título** — identidade visual Boi Preto na aba do navegador

---

## Estrutura de Pastas

```
src/
├── components/
│   ├── ui/
│   │   └── Image.tsx        # Wrapper <img> com lazy loading e no-referrer
│   ├── BrazilMap.tsx        # Mapa SVG interativo (react-simple-maps)
│   ├── Footer.tsx
│   ├── Layout.tsx           # Shell: TopNavBar + Outlet + Footer
│   └── TopNavBar.tsx
├── constants/
│   ├── site.ts              # Fonte única de verdade para conteúdo e imagens
│   └── theme.ts             # Tokens de design (cores, fontes, breakpoints)
├── lib/
│   └── utils.ts             # Utilitário cn() para merge de classes Tailwind
├── pages/
│   ├── About.tsx            # /sobre
│   ├── Cases.tsx            # /cases
│   ├── Contact.tsx          # /contato
│   ├── Home.tsx             # /
│   └── Services.tsx         # /servicos
├── types/
│   └── index.ts             # Interfaces TypeScript globais
├── App.tsx                  # Definição de rotas
├── index.css                # Tokens de tema via @theme + fontes Google
└── main.tsx                 # Entry point React

public/
├── brazil.json              # GeoJSON dos estados brasileiros (servido localmente)
├── logo.png                 # Logo oficial — usado também como favicon
└── ...
```

---

## Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento (http://localhost:3000)
npm run dev

# Build para produção
npm run build

# Pré-visualizar o build de produção
npm run preview

# Verificar tipos TypeScript
npm run lint
```

---

## Como Trocar Conteúdo

Todos os textos e imagens estão centralizados em **`src/constants/site.ts`**. Edite o valor correspondente — a mudança reflete automaticamente em todas as páginas.

### Textos

```typescript
HOME.hero.headline              // título principal da home
HOME.hero.ctaPrimary            // texto do botão primário do hero
SERVICES_DATA                   // array de cards de serviços (título, descrição, CTA)
CASES.novaEra.metrics           // métricas do case Fazenda Nova Era
ABOUT.breeds.quote              // citação da seção Equilíbrio Semiótico
CONTACT.form.submitLabel        // texto do botão de envio do formulário
BRAND.copyright                 // texto de copyright do rodapé
FOOTER_LINKS                    // links do rodapé (Privacidade, Termos, LinkedIn, Instagram)
```

### Imagens

```typescript
IMAGES.heroAngus.src            // imagem de fundo do hero (Home)
IMAGES.farmEquipment.src        // imagem da seção Solução (Home)
IMAGES.serviceShowcase.src      // imagem showcase (Serviços)
IMAGES.aboutNelore.src          // foto do boi nelore (Sobre)
IMAGES.caseNovaEra.src          // foto do case Fazenda Nova Era (Cases)
IMAGES.contactAtmospheric.src   // imagem atmosférica da coluna esquerda (Contato)
```

Use sempre o wrapper `<Image />` de `src/components/ui/Image.tsx` — ele aplica `referrerPolicy="no-referrer"`, `loading="lazy"` e exige `alt` via TypeScript.

### Estados do mapa

```typescript
ATUACAO_STATES   // array com state, code, desc — alimenta o BrazilMap
```

---

## Deploy

O projeto está configurado para deploy contínuo na **Vercel**. Cada push na branch `main` aciona um novo deploy de produção automaticamente.

O arquivo `vercel.json` configura rewrite de todas as rotas para `index.html`, necessário para o roteamento client-side da SPA funcionar corretamente em reload direto de URL.

---

## Convenções de Código

- **Sem magic strings** — use as constantes de `src/constants/` em vez de literais inline
- **Tipos globais** — interfaces ficam em `src/types/index.ts`
- **Imagens** — use `<Image />` de `src/components/ui/Image.tsx`
- **Classes Tailwind** — mescle com `cn()` de `src/lib/utils.ts`
- **Sem comentários óbvios** — apenas comentários que explicam o *porquê*, não o *o quê*

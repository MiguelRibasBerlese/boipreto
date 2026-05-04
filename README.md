# Boi Preto — Site Institucional

Site institucional da **Boi Preto Consultoria Agropecuária**, especializada em gestão de alta performance para pecuaristas.

## Visão Geral

Aplicação SPA (Single Page Application) com roteamento client-side, tema escuro e animações de entrada. O site apresenta o posicionamento de marca, serviços, cases de sucesso e formulário de captação de leads.

## Stack Utilizada

| Tecnologia | Versão | Função |
|---|---|---|
| React | 19 | Framework de UI |
| TypeScript | 5.8 | Tipagem estática |
| Vite | latest | Build tool e dev server (porta 3000) |
| Tailwind CSS | 4 | Estilização utilitária via `@theme` |
| React Router DOM | 7 | Roteamento client-side |
| Motion | 12 | Animações (fork do Framer Motion) |
| Lucide React | 0.5 | Biblioteca de ícones SVG |

## Estrutura de Pastas

```
src/
├── components/
│   ├── ui/
│   │   └── Image.tsx        # Wrapper <img> com lazy loading e no-referrer
│   ├── Footer.tsx
│   ├── Layout.tsx           # Shell: TopNavBar + Outlet + Footer
│   └── TopNavBar.tsx
├── constants/
│   ├── site.ts              # Fonte única de verdade para todo o conteúdo textual
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
│   └── index.ts             # Interfaces TypeScript globais (NavItem, Service, etc.)
├── App.tsx                  # Definição de rotas
├── index.css                # Tokens de tema via @theme do Tailwind + fontes Google
└── main.tsx                 # Entry point React
```

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
```

## Como Trocar Textos

Todos os textos do site estão centralizados em **`src/constants/site.ts`**. Cada página tem seu próprio objeto de conteúdo nomeado. Exemplos:

```typescript
HOME.hero.headline              // título principal da home
HOME.solution.pillars           // lista de pilares da metodologia
SERVICES_PAGE.header.badge      // badge da página de serviços
SERVICES                        // array de cards de serviços (título, descrição, CTA)
CASES.novaEra.metrics           // métricas do case Fazenda Nova Era
ABOUT.territory.states          // cards de estados (Mato Grosso, Pará, Tocantins)
CONTACT.form.stateOptions       // opções do select de estado no formulário
BRAND.copyright                 // texto de copyright do rodapé
```

Para alterar um texto, edite o valor correspondente em `site.ts`. A mudança reflete automaticamente em todas as páginas que consomem aquela constante.

## Como Trocar Imagens

As URLs das imagens também estão em `src/constants/site.ts`, no objeto `IMAGES`:

```typescript
IMAGES.heroAngus.src       // imagem de fundo do hero (Home)
IMAGES.farmEquipment.src   // imagem da seção Solução (Home)
IMAGES.serviceShowcase.src // imagem da seção showcase (Serviços)
IMAGES.aboutNelore.src     // foto do boi nelore (Sobre)
IMAGES.caseNovaEra.src     // foto do case Fazenda Nova Era (Cases)
IMAGES.contactAtmospheric  // imagem atmosférica da coluna esquerda (Contato)
```

Substitua a `src` pela URL da nova imagem e atualize o campo `alt` com uma descrição acessível.

Ao usar imagens nos componentes, prefira o wrapper `<Image />` de `src/components/ui/Image.tsx` em vez de `<img>` diretamente — ele aplica `referrerPolicy="no-referrer"`, `loading="lazy"` e exige `alt` obrigatório via TypeScript.

## Convenções de Código

- **Sem magic strings:** use as constantes de `src/constants/` em vez de strings literais inline
- **Tipos:** interfaces globais ficam em `src/types/index.ts`
- **Imagens:** use `<Image />` de `src/components/ui/Image.tsx`
- **Classes Tailwind:** mescle com o utilitário `cn()` de `src/lib/utils.ts`
- **Imports absolutos:** o alias `@` aponta para a raiz do projeto (`tsconfig.json`)

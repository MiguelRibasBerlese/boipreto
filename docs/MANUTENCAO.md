# Guia de Manutenção

> Este guia foi feito para quem vai dar manutenção no site sem precisar conhecer o código completo. Siga os passos de cada seção conforme a necessidade.

---

## 1. Trocar textos e copies

**Arquivo:** `src/constants/site.ts`

Todos os textos principais do site estão centralizados neste arquivo. Para alterar qualquer copy, abra o arquivo e edite o campo correspondente.

Exemplo: para trocar o texto do hero da Home, localize a constante `HOME_HERO_DESCRIPTION` e altere o valor.

> ⚠️ Nunca edite textos diretamente dentro das páginas (`src/pages/`). Sempre use `site.ts`.

---

## 2. Trocar imagens

**Pasta:** `/public/`

| Arquivo | Onde aparece no site | Como substituir |
|---|---|---|
| `logo.png` | NavBar (topo) e Footer (rodapé) | Substitua o arquivo mantendo o nome `logo.png` |
| `boi-nelore.jpg` | Fundo do Hero na página Início | Substitua mantendo o nome `boi-nelore.jpg` |
| `nelore-angus.jpg` | Seção "Equilíbrio Semiótico" na página Sobre | Substitua mantendo o nome `nelore-angus.jpg` |
| `rebanho-nelore.jpg` | Seção de rebanho na página Serviços | Substitua mantendo o nome `rebanho-nelore.jpg` |
| `escritorio.jpg` | Seção da equipe (Sobre) e Contato | Substitua mantendo o nome `escritorio.jpg` |
| `brazil.json` | Mapa interativo (Sobre) | **Não substituir** — é o GeoJSON do Brasil |

**Passo a passo:**
1. Substitua o arquivo na pasta `/public/` mantendo o mesmo nome
2. Faça commit e push — o deploy é automático

> ⚠️ Se precisar mudar o nome do arquivo de imagem, atualize também a referência `src="..."` no componente correspondente.

---

## 3. Adicionar ou remover estados do mapa

**Arquivo:** `src/constants/site.ts`  
**Constante:** `ATUACAO_STATES`

Cada estado é um objeto com os seguintes campos:

```ts
{
  state: 'Nome do Estado',        // Nome exato como aparece no GeoJSON do Brasil
  description: 'Descrição...',    // Texto exibido ao clicar no estado no mapa
}
```

**Para adicionar um estado:**
1. Abra `src/constants/site.ts`
2. Adicione um novo objeto no array `ATUACAO_STATES`
3. O `state` deve ser o nome exato do estado em português (ex: `'São Paulo'`, `'Mato Grosso'`)

**Para remover um estado:**
1. Apague o objeto correspondente do array

> ℹ️ O destaque do estado no mapa é automático — basta o nome estar correto no array.

---

## 4. Alterar os serviços

**Arquivo:** `src/constants/site.ts`  
**Constante:** `SERVICES_DATA`

Cada serviço tem os seguintes campos:

```ts
{
  title: 'Nome do Serviço',
  description: 'Descrição completa do serviço.',
  cta: 'Texto do Botão',
}
```

**Para alterar um serviço:** edite os campos diretamente no array.  
**Para adicionar:** inclua um novo objeto seguindo a estrutura acima.  
**Para remover:** apague o objeto do array.

---

## 5. Alterar cores e fontes

**Arquivo:** `src/index.css`

As variáveis de cor e fonte ficam no bloco `@theme`:

```css
@theme {
  --color-primary: #C9A84C;       /* Dourado principal */
  --color-background: #0a0a0a;    /* Fundo escuro */
  --font-logo: "Montserrat";      /* Fonte dos H1 e títulos de marca */
  --font-headline: "Newsreader";  /* Fonte editorial/itálica */
  --font-body: "Space Grotesk";   /* Fonte de parágrafos */
}
```

Para trocar uma cor, altere o valor hex da variável correspondente.  
Para trocar uma fonte, altere o nome da fonte e atualize o `@import` do Google Fonts no topo do arquivo.

---

## 6. Alterar links de redes sociais e WhatsApp

**Arquivo:** `src/constants/site.ts`

Localize as constantes:

```ts
LINKEDIN_URL = 'https://www.linkedin.com/in/...'
INSTAGRAM_URL = 'https://www.instagram.com/...'
WHATSAPP_URL  = 'https://wa.me/55...'
```

Substitua as URLs pelos novos links.

> Para o WhatsApp, o formato é: `https://wa.me/55DDNÚMERO` — sem espaços, traços ou parênteses.

---

## 7. Alterar o endereço do escritório

**Arquivo:** `src/pages/Contact.tsx`

Localize o bloco com o texto `"Escritório Central"` e atualize o endereço no parágrafo abaixo.

Se precisar atualizar o link do Google Maps, localize o `href` no elemento `<a>` próximo ao ícone de mapa e substitua pela nova URL do Google Maps.

---

## 8. Alterar o mapa do Google Maps na página Contato

**Arquivo:** `src/pages/Contact.tsx`

Localize o `<iframe>` do Google Maps e substitua o atributo `src` pela nova URL de embed.

Para gerar uma nova URL de embed:
1. Acesse [maps.google.com](https://maps.google.com)
2. Pesquise o endereço
3. Clique em **Compartilhar → Incorporar um mapa**
4. Copie o `src` do `<iframe>` gerado
5. Cole no lugar do `src` atual

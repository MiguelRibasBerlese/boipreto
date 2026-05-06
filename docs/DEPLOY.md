# Guia de Deploy

## Como funciona o deploy automático

O site usa **Vercel + GitHub** com deploy contínuo:

```
Você faz alterações no código
        ↓
git push origin main
        ↓
Vercel detecta o push automaticamente
        ↓
Vercel executa: npm install → npm run build
        ↓
Site atualizado em produção (≈ 1-2 minutos)
```

Não é necessário acessar o painel da Vercel para fazer deploy. O push no GitHub já dispara tudo automaticamente.

---

## Passo a passo para subir uma alteração

```bash
# 1. Faça as alterações nos arquivos

# 2. Adicione os arquivos modificados
git add .

# 3. Crie um commit descritivo
git commit -m "feat: descrição clara do que foi alterado"

# 4. Envie para o repositório
git push origin main

# 5. Aguarde 1-2 minutos e acesse https://boipreto.vercel.app
```

### Convenção de mensagens de commit

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade ou conteúdo |
| `fix:` | Correção de bug ou problema visual |
| `docs:` | Alteração em documentação |
| `chore:` | Ajuste técnico sem impacto visual |

---

## Como verificar se o deploy foi bem sucedido

1. Acesse o painel da Vercel: [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique no projeto `boipreto`
3. Na aba **Deployments**, o último deploy deve ter status **Ready** (ícone verde)
4. Se o status for **Error**, clique no deploy para ver o log de erro

---

## Por que o `vercel.json` existe?

O site é uma **SPA (Single Page Application)** — toda a navegação é gerenciada pelo React Router no navegador, não pelo servidor.

Sem o `vercel.json`, ao acessar diretamente uma URL como `boipreto.vercel.app/contato` ou ao pressionar **F5**, a Vercel tentaria encontrar um arquivo físico `/contato` no servidor — o que não existe — e retornaria erro 404.

O `vercel.json` instrui a Vercel a sempre servir o `index.html` para qualquer rota, deixando o React Router assumir o controle:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

> ⚠️ **Não remova o `vercel.json`** — o site quebrará no F5 e em acessos diretos por URL.

---

## Por que o `.npmrc` existe?

A biblioteca `react-simple-maps` (usada no mapa interativo) não declarou suporte oficial ao React 19, mas funciona corretamente. Sem o `.npmrc`, o `npm install` falharia com erro de peer dependency na Vercel.

O arquivo contém:

```
legacy-peer-deps=true
```

Isso instrui o npm a ignorar conflitos de versão entre peer dependencies.

> ⚠️ **Não remova o `.npmrc`** — o deploy na Vercel falhará com erro `ERESOLVE`.

---

## Variáveis de ambiente

Atualmente o projeto não usa variáveis de ambiente em produção. Se no futuro forem necessárias (ex: chave de API), adicione-as em:

- **Localmente:** arquivo `.env` na raiz (nunca comitar no Git)
- **Vercel:** painel do projeto → **Settings → Environment Variables**

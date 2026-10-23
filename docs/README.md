# Tutoriais Clinic All

Site estático de tutoriais em vídeo (YouTube) com passo a passo escrito, dicas e perguntas frequentes para quem usa o **Clinic All Web** e o **Clinic All Desktop**.

É um projeto **independente e não oficial**. Clinic All e Focus são marcas de seus titulares.

- Produção: https://help.samlabs.com.br
- Repositório: `Samuelsts/helpsam` (deploy automático a cada push na `main`)

## Stack

- Next.js 15 (App Router) exportado como site 100% estático (`out/`)
- React 19, TypeScript, Tailwind CSS 3, lucide-react
- Hospedagem: Cloudflare Pages
- Sem banco de dados, sem login e sem API

## Rodar localmente

Precisa de Node 18 ou superior (o build na Cloudflare usa Node 22).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera out/ e out/_headers
npm run thumbs     # baixa as miniaturas que faltam (veja abaixo)
```

## Estrutura

```
app/                      páginas (home, /web, /desktop, /tutorial/[slug], /sobre, /contato, /termos, /privacidade)
components/               componentes (ConsentBanner, YouTubeFacade, TutorialCard, Footer...)
lib/consent.ts            regras do consentimento de cookies/anúncios
src/data/tutorials.ts     TODOS os tutoriais (dados + passo a passo + FAQ)
public/thumbs/            miniaturas locais dos vídeos (<youtubeId>.jpg)
scripts/fetch-thumbs.mjs  baixa as miniaturas
scripts/generate-headers.mjs  gera out/_headers (CSP e demais headers) depois do build
docs/prompt-tutoriais.md  prompt para gerar o texto de cada tutorial
```

## Adicionar um tutorial novo (passo a passo)

1. **Publique o vídeo no YouTube** e confirme que a incorporação está permitida (YouTube Studio, Detalhes, Mostrar mais, "Permitir incorporação"). O vídeo não pode mostrar dados reais de pacientes nem de clientes, nem na tela, nem no áudio, nem na miniatura.
2. **Copie o ID do vídeo.** É o trecho depois de `v=` na URL (11 caracteres). Em `https://www.youtube.com/watch?v=c6Z0SEnPViA`, o ID é `c6Z0SEnPViA`.
3. **Pegue a transcrição.** No YouTube, abra o vídeo, clique em `...` abaixo do player e em "Mostrar transcrição". Copie o texto. (No YouTube Studio, também dá em Legendas.)
4. **Gere o texto do tutorial** (resumo, passos, dicas e FAQ) com o prompt de [`docs/prompt-tutoriais.md`](docs/prompt-tutoriais.md), colando a transcrição. **Confira o resultado assistindo ao vídeo**: nomes de menus, botões e ordem dos passos.
5. **Adicione a entrada em `src/data/tutorials.ts`**, dentro do array `tutorials`, usando o modelo abaixo.
6. **Baixe a miniatura:**
   ```bash
   npm run thumbs
   ```
7. **Abra `public/thumbs/<youtubeId>.jpg` e confira** se o quadro não mostra nada sensível (nome de clínica, licença, usuário logado, dados de paciente). Se mostrar, veja "Trocar uma miniatura".
8. **Teste:**
   ```bash
   npm run build
   ```
   O build precisa passar sem erro de tipo. Abra `npm run dev` e veja `/tutorial/<slug>` e o cartão na listagem.
9. **Publique:**
   ```bash
   git status
   git add src/data/tutorials.ts public/thumbs/<youtubeId>.jpg
   git commit -m "feat: tutorial <nome>"
   git push
   ```
10. **Confira no ar** em 1 a 3 minutos. O sitemap se atualiza sozinho a partir do `tutorials.ts`.

### Modelo de entrada

```ts
{
  id: "web-016",              // único: web-NNN ou desktop-NNN
  slug: "como-fazer-x-web",   // vira /tutorial/<slug> (minúsculas, sem acento, com hífens)
  title: "Como fazer X",
  description: "Uma frase para o cartão e para a meta description.",
  app: "web",                 // "web" | "desktop"
  category: "Operacional",    // uma das categorias de categoryOrder
  level: "básico",            // "básico" | "intermediário" | "avançado"
  duration: "3 min",
  youtubeId: "XXXXXXXXXXX",
  hasImageTutorial: false,    // só true se existir "images" preenchido
  summary: "Resumo de uma ou duas frases.",
  steps: [
    { title: "Título do passo (único no tutorial)", text: "O que fazer, em 1 a 3 frases." },
  ],
  tips: ["Ponto de atenção."],
  faq: [{ question: "Pergunta frequente?", answer: "Resposta curta." }],
},
```

Categorias atuais: Recepção, Operacional, Agenda, Módulo Médico, Financeiro, Faturamento, Relatórios. Para criar outra, acrescente em `categoryOrder`.

Os títulos dos passos, as dicas e as perguntas precisam ser **únicos dentro do mesmo tutorial** (são usados como `key` no React).

## Miniaturas (thumbs)

**Por que são locais.** Se a miniatura viesse de `i.ytimg.com`, o navegador do visitante contataria o Google só por abrir a página, antes de qualquer clique ou consentimento. Por isso as imagens ficam em `public/thumbs/` e o YouTube só é carregado quando a pessoa clica em reproduzir.

**Como funciona o script.** O `npm run thumbs` lê todos os `youtubeId` de `src/data/tutorials.ts`, baixa `maxresdefault.jpg` (1280x720) e, se não existir, `hqdefault.jpg` (480x360), e salva em `public/thumbs/<id>.jpg`. Arquivos que já existem são **pulados**, então rodar de novo só busca o que falta.

**Não é automático.** Ele não roda no build nem no deploy, de propósito: assim você sempre olha a imagem antes de publicar (o quadro escolhido pelo YouTube pode mostrar uma tela sem blur).

### Trocar uma miniatura

1. No YouTube Studio, defina uma miniatura personalizada para o vídeo.
2. Apague o arquivo antigo e baixe de novo:
   ```bash
   rm public/thumbs/<youtubeId>.jpg
   npm run thumbs
   ```
3. Faça commit e push do `.jpg` novo.

### Se uma miniatura falhar

- O script imprime `falhou: <id>`: confira o ID, se o vídeo é público ou não listado e se já terminou de processar. O `maxresdefault` de vídeos recém-publicados pode demorar a existir.
- Quadro preto no cartão: o arquivo `public/thumbs/<youtubeId>.jpg` não existe ou o nome não bate com o `youtubeId`.
- Para achar arquivos suspeitos (muito pequenos): `find public/thumbs -size -5k`.

## Variáveis de ambiente

Todas são lidas **em tempo de build** (Cloudflare Pages, ambiente de Produção, Settings, Variables and Secrets). Depois de mudar qualquer uma, é preciso um **novo build**.

| Variável | Para que serve |
|---|---|
| `NEXT_PUBLIC_ADSENSE_CLIENT` | ID do AdSense (`ca-pub-...`). Liga a meta tag de verificação, o banner com Recusar/Aceitar anúncios, o script do AdSense (só após aceite) e a CSP permissiva. Sem ela, o site fica sem anúncios |
| `NEXT_PUBLIC_ADS_SLOTS` | `1` mostra as colunas laterais de anúncio nos tutoriais. Só depois da aprovação do AdSense |
| `CSP_REPORT_ONLY` | `1` troca a CSP para o modo de teste (só registra violações, não bloqueia). Use temporariamente e remova depois |

Para testar o banner de anúncios no computador, crie um `.env.local` (já ignorado pelo Git) com `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-...`, reinicie o `npm run dev` e apague o arquivo depois. Os headers (`out/_headers`) só refletem a variável no build da Cloudflare.

## Deploy (Cloudflare Pages)

- Comando de build: `npm run build` (roda `next build` e depois `scripts/generate-headers.mjs`)
- Diretório de saída: `out`
- Cada push na `main` gera um deploy de produção.
- **Para forçar um deploy novo** (por exemplo, depois de mudar variáveis), use um commit vazio:
  ```bash
  git commit --allow-empty -m "chore: redeploy"
  git push
  ```
  Evite "Retry deployment" em implantações antigas: ele reconstrói **aquele commit**, não o mais recente.
- Para conferir os headers no ar:
  ```bash
  curl -sI "https://help.samlabs.com.br/?v=$(date +%s)" | grep -iE "content-security|permissions-policy|strict-transport"
  ```

## Privacidade e consentimento (regras ao mexer no site)

- Nada de anúncios ou medição pode carregar **antes** do aceite. O script do AdSense só é criado por `components/ConsentBanner.tsx` depois que a pessoa aceita.
- **Recusar e Aceitar têm o mesmo peso visual.** Não induza a escolha, e não trave o acesso ao conteúdo por causa da recusa.
- Quem recusa só é perguntado de novo após `REASK_MIN_VISITS` visitas e `REASK_MIN_DAYS` dias (constantes em `lib/consent.ts`), e a recusa continua valendo.
- **Se mudar o comportamento, atualize os textos legais** (`app/privacidade`, `app/termos`) e a data de "Última atualização". Eles precisam descrever exatamente o que o site faz.
- Não adicione scripts de terceiros (analytics, pixels, widgets) sem tratá-los no banner, na Política e na CSP.

## Boas práticas de conteúdo

- O texto do tutorial vem **da transcrição do vídeo**. Não invente menus, botões, atalhos nem endereços.
- Nada de dados reais de pacientes, clientes ou licenças nos vídeos, nas miniaturas ou no texto.
- Escreva em palavras próprias. Não copie a fala do vídeo.
- Um tutorial com texto próprio e bem escrito pesa mais na avaliação do AdSense do que vários só com vídeo.

## Problemas comuns

| Sintoma | O que fazer |
|---|---|
| Cartão com quadro preto | `npm run thumbs` e conferir o nome do arquivo |
| `Cannot find module '@/...'` no editor | Ctrl+Shift+P, "TypeScript: Restart TS Server"; se persistir, `npx tsc --noEmit` |
| Build falha com erro de tipo em `tutorials.ts` | Confira vírgulas, aspas e se `category`, `level` e `app` usam valores válidos |
| Mudei uma variável e nada mudou | Variáveis `NEXT_PUBLIC_` entram no build: faça um commit vazio |
| `package-lock.json` apareceu modificado sem eu mexer | `git restore package-lock.json` antes do commit |
| Deploy não pegou meu commit | Confira em Deployments qual commit está ativo; use commit vazio |
| `git push` pede senha e trava | Autentique com `gh auth login` |

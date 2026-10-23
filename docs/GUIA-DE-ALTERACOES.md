# Guia de alterações e localização do projeto

Este arquivo serve como um manual rápido para você se localizar dentro do projeto e saber onde alterar as informações mais comuns do site.

O site é uma biblioteca independente de tutoriais para Clinic All Web e Clinic All Desktop. Ele não possui login, banco de dados ou painel administrativo. Existem áreas preparadas para anúncios, mas a integração com AdSense ou outro provedor só deve ser feita quando você decidir publicar anúncios de fato. Todo o conteúdo principal é controlado por arquivos locais.

## 1. Visão geral do site

O site tem estas páginas principais:

```txt
/                 Página inicial
/web              Tutoriais do Clinic All Web
/desktop          Tutoriais do Clinic All Desktop
/tutorial/[slug]  Página individual de cada tutorial
/termos           Termos de uso e privacidade
```

Exemplos de página individual:

```txt
/tutorial/como-acessar-o-sistema-web
/tutorial/como-cadastrar-um-paciente-web
/tutorial/como-emitir-um-relatorio-desktop
```

## 2. Estrutura principal de pastas

```txt
app/
  page.tsx
  web/page.tsx
  desktop/page.tsx
  tutorial/[slug]/page.tsx
  termos/page.tsx
  layout.tsx
  globals.css

components/
  Header.tsx
  Footer.tsx
  DisclaimerBanner.tsx
  AppChoiceCard.tsx
  ContinueSuggestion.tsx
  TutorialList.tsx
  TutorialGrid.tsx
  TutorialCard.tsx
  SearchInput.tsx
  AdPlaceholder.tsx
  VideoEmbed.tsx
  RelatedTutorials.tsx
  OfficialNoticePopup.tsx

src/data/
  tutorials.ts

next.config.ts
```

## 3. Mapa rápido: onde alterar cada coisa

| O que você quer alterar | Arquivo |
|---|---|
| Adicionar, remover ou editar tutoriais | `src/data/tutorials.ts` |
| Alterar nome/descrição de Clinic All Web ou Desktop | `src/data/tutorials.ts` |
| Alterar a página inicial | `app/page.tsx` |
| Alterar layout das páginas Web/Desktop | `components/TutorialList.tsx` |
| Alterar card de tutorial | `components/TutorialCard.tsx` |
| Alterar busca | `components/TutorialGrid.tsx` e `components/SearchInput.tsx` |
| Alterar página individual do tutorial | `app/tutorial/[slug]/page.tsx` |
| Alterar termos de uso e privacidade | `app/termos/page.tsx` |
| Alterar vídeo incorporado | `components/VideoEmbed.tsx` |
| Alterar tutoriais relacionados | `components/RelatedTutorials.tsx` |
| Alterar aviso de site não oficial | `components/DisclaimerBanner.tsx` |
| Alterar popup inicial de aviso | `components/OfficialNoticePopup.tsx` |
| Alterar header/menu superior | `components/Header.tsx` |
| Alterar rodapé | `components/Footer.tsx` |
| Alterar anúncios/placeholder | `components/AdPlaceholder.tsx` |
| Alterar cores globais, fundo e animações | `app/globals.css` |
| Alterar título/descrição SEO | `app/layout.tsx` |
| Alterar cabeçalhos básicos de segurança | `next.config.ts` |

## 4. Onde ficam os dados dos tutoriais

Todos os tutoriais ficam em:

```txt
src/data/tutorials.ts
```

Cada tutorial tem esta estrutura:

```ts
{
  id: "web-001",
  slug: "como-acessar-o-sistema-web",
  title: "Como acessar o sistema",
  description: "Veja o fluxo básico para entrar no ambiente web.",
  app: "web",
  category: "Acesso",
  level: "básico",
  duration: "4 min",
  youtubeId: "dQw4w9WgXcQ",
  hasImageTutorial: true,
  imageTutorialUrl: "#imagens"
}
```

Significado dos campos:

- `id`: identificador único do tutorial. Não repita.
- `slug`: endereço da página do tutorial.
- `title`: título exibido no card e na página individual.
- `description`: descrição curta.
- `app`: use `"web"` ou `"desktop"`.
- `category`: categoria do tutorial.
- `level`: use `"básico"`, `"intermediário"` ou `"avançado"`.
- `duration`: tempo estimado.
- `youtubeId`: ID do vídeo do YouTube.
- `hasImageTutorial`: `true` se existe tutorial por imagens; `false` se ainda não existe.
- `imageTutorialUrl`: link para imagens, PDF, página externa ou seção de prints.

## 5. Como adicionar um novo vídeo

Abra:

```txt
src/data/tutorials.ts
```

Procure:

```ts
export const tutorials: Tutorial[] = [
```

Adicione um novo objeto dentro desse array.

Exemplo para Web:

```ts
{
  id: "web-005",
  slug: "como-localizar-um-atendimento-web",
  title: "Como localizar um atendimento",
  description: "Aprenda a buscar um atendimento usando informações simples.",
  app: "web",
  category: "Atendimento",
  level: "intermediário",
  duration: "6 min",
  youtubeId: "ID_DO_VIDEO_AQUI",
  hasImageTutorial: false
}
```

Exemplo para Desktop:

```ts
{
  id: "desktop-005",
  slug: "como-consultar-agenda-desktop",
  title: "Como consultar agenda",
  description: "Veja como consultar horários e informações da agenda.",
  app: "desktop",
  category: "Agenda",
  level: "básico",
  duration: "5 min",
  youtubeId: "ID_DO_VIDEO_AQUI",
  hasImageTutorial: true,
  imageTutorialUrl: "#imagens"
}
```

Depois disso, o tutorial aparecerá automaticamente na página correta:

- `app: "web"` aparece em `/web`
- `app: "desktop"` aparece em `/desktop`

## 6. Como pegar o ID do YouTube

Se o link for:

```txt
https://www.youtube.com/watch?v=abc123
```

O `youtubeId` será:

```txt
abc123
```

Se o link for:

```txt
https://youtu.be/abc123
```

O `youtubeId` também será:

```txt
abc123
```

## 7. Como editar um tutorial existente

Abra:

```txt
src/data/tutorials.ts
```

Procure pelo `slug`, `id` ou `title`.

Exemplo:

```txt
como-cadastrar-um-paciente-web
```

Depois altere apenas os campos necessários, como:

```ts
title: "Novo título",
description: "Nova descrição curta.",
duration: "8 min",
youtubeId: "NOVO_ID_DO_VIDEO"
```

## 8. Como remover um tutorial

Abra:

```txt
src/data/tutorials.ts
```

Remova o objeto inteiro do tutorial dentro do array `tutorials`.

Importante: remova da primeira `{` até a última `}` daquele tutorial, incluindo a vírgula se necessário.

## 9. Como adicionar prints ou tutorial por imagens

No tutorial desejado, use:

```ts
hasImageTutorial: true,
imageTutorialUrl: "#imagens"
```

Se você ainda não tiver prints:

```ts
hasImageTutorial: false
```

Se quiser mandar o usuário para um link externo:

```ts
hasImageTutorial: true,
imageTutorialUrl: "https://link-do-material.com"
```

Onde fica a área de imagens na página individual:

```txt
app/tutorial/[slug]/page.tsx
```

Procure por:

```tsx
<section id="imagens"
```

Atualmente essa seção mostra um bloco preparado para receber prints. No futuro, você pode trocar esse bloco por uma galeria real.

## 10. Como alterar as informações de Clinic All Web e Desktop

Abra:

```txt
src/data/tutorials.ts
```

Procure:

```ts
export const appInfo
```

Ali você pode alterar:

- nome exibido
- nome curto
- rota
- descrição da página Web ou Desktop

Exemplo:

```ts
web: {
  name: "Clinic All Web",
  shortName: "Web",
  href: "/web",
  description: "Texto da página Web."
}
```

## 11. Como a busca funciona

A busca fica em:

```txt
components/TutorialGrid.tsx
```

Atualmente ela busca por:

- título
- descrição
- categoria

Trecho principal:

```ts
const searchable = `${tutorial.title} ${tutorial.description} ${tutorial.category}`.toLowerCase();
```

Para incluir o nível na busca, altere para:

```ts
const searchable = `${tutorial.title} ${tutorial.description} ${tutorial.category} ${tutorial.level}`.toLowerCase();
```

O visual do campo de busca fica em:

```txt
components/SearchInput.tsx
```

## 12. Como alterar os cards dos tutoriais

Arquivo:

```txt
components/TutorialCard.tsx
```

Esse componente controla:

- espaçamento interno do card
- categoria
- nível
- título
- descrição
- tempo
- indicação de prints
- botão “Assistir tutorial”

Se os cards ficarem muito altos, procure:

```txt
min-h-[280px]
```

Se quiser mais ou menos espaço interno, procure:

```txt
p-6
```

Se quiser alterar o espaço antes do rodapé do card, procure:

```txt
pt-8
```

## 13. Como alterar a página inicial

Arquivo:

```txt
app/page.tsx
```

Ali ficam:

- headline
- subheadline
- cards de escolha Web/Desktop
- sugestão para continuar na última aplicação acessada
- aviso de site não oficial

Texto principal atual:

```txt
Tutoriais práticos para Clinic All
```

Os cards da página inicial ficam em:

```txt
components/AppChoiceCard.tsx
```

A sugestão “Você acessou recentemente...” fica em:

```txt
components/ContinueSuggestion.tsx
```

## 14. Como funciona o localStorage

A preferência do usuário é salva com a chave:

```txt
preferredClinicAllApp
```

Valores possíveis:

```txt
web
desktop
```

Esse código fica em:

```txt
components/AppChoiceCard.tsx
components/ContinueSuggestion.tsx
```

Ao clicar em Clinic All Web ou Clinic All Desktop, a escolha é salva e o usuário é redirecionado.

O aviso inicial de site independente também usa `localStorage`, com a chave:

```txt
focusIndependentNoticeAccepted
```

Essa chave fica em:

```txt
components/OfficialNoticePopup.tsx
```

Quando o usuário clica em “Entendi e desejo continuar” ou fecha o aviso, o valor `"true"` é salvo no navegador. Se o usuário limpar o `localStorage`, o aviso aparecerá novamente.

Importante: esses dados ficam apenas no navegador do usuário. Não existe envio para servidor, banco de dados ou cadastro interno.

## 15. Como alterar o header

Arquivo:

```txt
components/Header.tsx
```

Esse componente controla:

- logo/ícone superior
- nome do site
- texto “Guias independentes”
- links do menu

Links atuais:

```txt
Início
Clinic All Web
Clinic All Desktop
```

## 16. Como alterar o rodapé

Arquivo:

```txt
components/Footer.tsx
```

Esse componente controla:

- nome no rodapé
- texto de apoio
- aviso discreto de que o site não é oficial
- links rápidos

O rodapé é usado em:

```txt
app/page.tsx
components/TutorialList.tsx
app/tutorial/[slug]/page.tsx
```

## 17. Como alterar o aviso obrigatório

Arquivo:

```txt
components/DisclaimerBanner.tsx
```

Texto atual:

```txt
Este site não é oficial do Clinic All. As informações aqui são materiais independentes de apoio. Em caso de dúvidas, entre em contato com o suporte oficial.
```

Esse aviso aparece na home, nas páginas de listagem e na página individual do tutorial.

## 17.1. Como alterar o popup inicial de aviso

Arquivo:

```txt
components/OfficialNoticePopup.tsx
```

Esse popup aparece quando o usuário abre o site pela primeira vez, ou quando o `localStorage` do navegador é limpo.

Ele informa que:

- o site não é oficial da Focus;
- o site não representa um canal oficial do Clinic All;
- a plataforma não oferece suporte;
- o conteúdo foi criado de forma voluntária e não remunerada;
- dúvidas e problemas devem ser tratados pelos canais oficiais.

Se você alterar esse texto, mantenha a linguagem clara e sem promessa de suporte. Evite frases que possam dar a entender que o site é oficial.

## 17.2. Como alterar os termos de uso e privacidade

Arquivo:

```txt
app/termos/page.tsx
```

Essa página contém os termos básicos do site, incluindo:

- natureza independente da plataforma;
- ausência de suporte pela plataforma;
- finalidade voluntária;
- privacidade e LGPD;
- anúncios e terceiros;
- controle do usuário sobre cookies e preferências de privacidade;
- limitações do conteúdo.

Sempre que você adicionar uma integração importante, como AdSense, analytics, formulário, captura de e-mail ou qualquer recurso que trate dados do usuário, revise essa página.

O link para os termos aparece no rodapé e também no popup inicial.

## 18. Como alterar anúncios futuros

O placeholder de anúncio fica em:

```txt
components/AdPlaceholder.tsx
```

Hoje ele mostra:

```txt
Publicidade
Espaço reservado para anúncio
```

Ele aparece em:

```txt
components/TutorialList.tsx
app/tutorial/[slug]/page.tsx
```

## 19. Como adicionar AdSense futuramente

Ainda não existe AdSense implementado.

Quando for adicionar:

1. Crie um componente novo:

```txt
components/AdSenseBlock.tsx
```

2. Coloque nele o código oficial fornecido pelo Google AdSense.

3. Substitua `AdPlaceholder` por `AdSenseBlock` nos arquivos:

```txt
components/TutorialList.tsx
app/tutorial/[slug]/page.tsx
```

4. Se o Google pedir um script global, adicione em:

```txt
app/layout.tsx
```

Use apenas o código oficial da sua conta do AdSense.

Depois de adicionar anúncios reais, revise também:

```txt
app/termos/page.tsx
next.config.ts
```

Em `app/termos/page.tsx`, confirme se o texto explica que provedores externos de anúncios podem usar cookies, identificadores, endereço IP, informações do navegador, localização aproximada e interações com anúncios, conforme as políticas desses terceiros.

Em `next.config.ts`, talvez seja necessário liberar domínios do provedor de anúncios na política de segurança `Content-Security-Policy`, especialmente em diretivas como `script-src`, `img-src`, `frame-src` e `connect-src`. Use apenas os domínios oficiais indicados pelo provedor.

## 20. Como alterar cores, fundo e aparência premium

O CSS global fica em:

```txt
app/globals.css
```

Ali ficam:

- fundo geral do site
- animações de entrada
- classe `premium-surface`
- ajustes de seleção de texto
- regra de acessibilidade para reduzir movimento

Classes visuais comuns usadas nos componentes:

```txt
bg-blue-600
text-blue-700
border-slate-200
text-slate-950
bg-white
shadow-sm
shadow-2xl
rounded-3xl
```

Para mudar o azul principal, procure por:

```txt
blue-
```

Exemplo:

```txt
bg-blue-600
```

Pode virar:

```txt
bg-sky-600
```

ou:

```txt
bg-indigo-600
```

## 21. Como alterar animações

As animações ficam em:

```txt
app/globals.css
```

Classes criadas:

```txt
animate-fade-up
animate-fade-in
animate-scale-in
delay-100
delay-150
delay-200
delay-300
```

Exemplo de uso:

```tsx
className="animate-fade-up delay-150"
```

Se quiser remover animação de algum elemento, remova a classe `animate-*`.

## 22. Como alterar SEO e título do site

Arquivo:

```txt
app/layout.tsx
```

Procure:

```ts
export const metadata
```

Ali ficam:

- título do site
- descrição
- Open Graph básico

## 22.1. Como alterar cabeçalhos básicos de segurança

Arquivo:

```txt
next.config.ts
```

Esse arquivo configura cabeçalhos HTTP básicos, como:

- `Content-Security-Policy`;
- `Referrer-Policy`;
- `X-Content-Type-Options`;
- `X-Frame-Options`;
- `Permissions-Policy`.

Essas regras ajudam a reduzir riscos comuns, como carregamento indevido de scripts, uso de iframes não autorizados e exposição desnecessária de permissões do navegador.

Ao integrar serviços externos, como YouTube, AdSense ou ferramentas de métricas, talvez seja necessário ajustar a `Content-Security-Policy`. Faça isso liberando apenas os domínios realmente necessários.

Evite adicionar regras muito abertas, como:

```txt
*
https:
```

Também evite liberar scripts de qualquer origem sem necessidade. Quanto mais específico for o cabeçalho, melhor.

## 23. Como entender as páginas Web e Desktop

Arquivos:

```txt
app/web/page.tsx
app/desktop/page.tsx
```

Eles são pequenos porque chamam o mesmo componente:

```tsx
<TutorialList app="web" />
<TutorialList app="desktop" />
```

A diferença entre Web e Desktop vem dos dados em:

```txt
src/data/tutorials.ts
```

O componente `TutorialList` filtra os tutoriais de acordo com a aplicação.

## 24. Como entender a página individual do tutorial

Arquivo:

```txt
app/tutorial/[slug]/page.tsx
```

Ela usa o `slug` da URL para encontrar o tutorial em:

```txt
src/data/tutorials.ts
```

Exemplo:

```txt
/tutorial/como-cadastrar-um-paciente-web
```

Procura:

```ts
slug: "como-cadastrar-um-paciente-web"
```

Essa página mostra:

- título
- descrição
- aplicação relacionada
- categoria
- nível
- duração
- vídeo YouTube
- tutorial por imagens
- anúncios
- tutoriais relacionados

## 25. Como rodar o projeto

Instalar dependências:

```bash
corepack pnpm install
```

Rodar em desenvolvimento:

```bash
corepack pnpm dev
```

Rodar na porta 3000:

```bash
corepack pnpm dev --hostname 127.0.0.1 --port 3000
```

Gerar build de produção:

```bash
corepack pnpm build
```

## 26. Se o site ficar sem estilo durante o desenvolvimento

Às vezes o Next.js em modo desenvolvimento pode ficar com cache quebrado e o CSS pode não carregar.

Sintomas:

- página aparece sem Tailwind;
- HTML carrega, mas sem estilo;
- arquivo `layout.css` retorna 404.

Solução:

1. Pare o servidor.
2. Apague a pasta `.next`.
3. Rode novamente:

```bash
corepack pnpm dev --hostname 127.0.0.1 --port 3000
```

No navegador, use também:

```txt
Ctrl + F5
```

## 27. Checklist ao adicionar um tutorial

Antes de considerar pronto:

- o `id` é único?
- o `slug` é único?
- o `app` está correto?
- o `youtubeId` está correto?
- o `level` usa apenas `"básico"`, `"intermediário"` ou `"avançado"`?
- o tutorial aparece na página correta?
- o botão “Assistir tutorial” abre a página individual?
- se não houver prints, `hasImageTutorial` está como `false`?
- rode `corepack pnpm build`.

## 28. Checklist antes de publicar alterações

- rode `corepack pnpm build`;
- abra `/`;
- abra `/web`;
- abra `/desktop`;
- abra pelo menos uma página `/tutorial/...`;
- teste a busca;
- confira se o aviso de site não oficial continua visível;
- confira se o rodapé aparece;
- confira se os anúncios placeholder aparecem;
- confira se o site continua responsivo no mobile.

## 29. Linguagem recomendada

Use sempre termos que deixem claro que o site é independente:

```txt
guia independente
material de apoio
tutorial prático
biblioteca independente
conteúdo de apoio
```

Evite termos que pareçam oficiais:

```txt
portal oficial
documentação oficial
suporte oficial deste site
central oficial
```

## 30. Resumo dos arquivos mais importantes

Se você estiver perdido, comece por estes:

```txt
src/data/tutorials.ts
```

Conteúdo dos tutoriais e informações de Web/Desktop.

```txt
components/TutorialCard.tsx
```

Visual dos cards.

```txt
components/TutorialList.tsx
```

Layout das páginas `/web` e `/desktop`.

```txt
app/tutorial/[slug]/page.tsx
```

Página individual do tutorial.

```txt
app/globals.css
```

Cores globais, fundo e animações.

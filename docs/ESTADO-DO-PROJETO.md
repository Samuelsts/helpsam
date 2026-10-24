# Estado do projeto e guia de continuidade

Documento para quem for **continuar o trabalho** (uma pessoa ou outra IA): onde paramos, o que foi decidido e por quê, o que falta e o que não pode ser quebrado. Para o "como fazer", veja o [README](../README.md) e o [prompt dos tutoriais](prompt-tutoriais.md).

> **Mantenha este arquivo atualizado.** Ao fim de cada sessão de trabalho, atualize a seção "Onde paramos" e acrescente uma linha ao "Histórico". Não coloque dados pessoais (CPF, endereço, contas bancárias) nem segredos aqui.

Última atualização: 24/10/2026

## 1. Resumo

- `help.samlabs.com.br`: site estático de **tutoriais em vídeo com passo a passo escrito** sobre o sistema Clinic All (Web e Desktop). Independente e não oficial. Mantido por Samuel J. Santos, que é colaborador da empresa dona do sistema e fez o site com autorização dela.
- Objetivo atual: **ser aprovado no Google AdSense** e exibir anúncios de forma legal e respeitando o consentimento (LGPD).
- Projeto irmão: `samlabs.com.br` (site de serviços do mantenedor, repositório separado). O AdSense avalia o **domínio raiz**, então os dois sites importam para a aprovação.
- Os dois sites estão na **Cloudflare Pages** (saíram da Vercel porque o plano Hobby proíbe anúncios).

## 2. Onde paramos

| Item | Situação |
|---|---|
| Site `help.` no ar, 18 tutoriais com texto próprio | Feito |
| Banner de consentimento (barra no rodapé, Recusar e Aceitar com o mesmo peso) | Feito |
| Regra de perguntar de novo após recusa (10 visitas e 30 dias, uma vez) | Feito |
| Páginas Sobre, Contato, Termos e Privacidade, sitemap e `robots.txt` | Feito |
| Migração Vercel para Cloudflare Pages (os dois sites) | Feito |
| CSP e demais headers via `scripts/generate-headers.mjs` | Feito, em modo de aplicação (enforcing) |
| Cloudflare Web Analytics | Desligado nos dois sites; as políticas não o citam |
| `samlabs.com.br`: consentimento antes do Google Analytics, políticas atualizadas | Feito |
| AdSense: site `samlabs.com.br` adicionado, `ads.txt` autorizado, meta tag no ar | Feito |
| `NEXT_PUBLIC_ADSENSE_CLIENT` definida na produção do `help.` | Feito (o AdSense só carrega após o aceite) |
| **Análise do AdSense** | **Em andamento** (status "Preparando"). Aguardando resultado |
| `NEXT_PUBLIC_ADS_SLOTS` (colunas laterais de anúncio) | **Não definida de propósito**, até a aprovação |
| Search Console (propriedade de domínio e sitemaps) | **A confirmar** se foi feito |
| Botão "Ver detalhes" do projeto "Painel de Gastos" no `samlabs.com.br` (estava com `href: "#"`) | **A confirmar** |
| Bot Fight Mode da Cloudflare não bloqueia o Googlebot nem o `Mediapartners-Google` | **A confirmar** |

## 3. Próximos passos, conforme o resultado do AdSense

Acompanhe em AdSense, **Sites**, coluna "Status de aprovação", e pelo e-mail.

**Se aprovado ("Pronto")**
1. Criar `NEXT_PUBLIC_ADS_SLOTS=1` na Cloudflare Pages do `help.` (Produção) e fazer um deploy novo (commit vazio).
2. Definir os formatos e as posições dos anúncios (hoje o espaço é o componente `AdPlaceholder`, na coluna lateral dos tutoriais).
3. Se usar anúncios automáticos, **excluir** `/termos`, `/privacidade`, `/contato`, `/sobre` e a home, que têm pouco conteúdo.
4. Em AdSense, Pagamentos: configurar o recebimento.
5. Testar de novo: nenhuma requisição `pagead` antes do aceite, console sem `Refused to...`, vídeo e tela cheia funcionando.

**Se "Precisa de revisão" ou "Requer atenção"**
1. Abrir "Detalhes do status" e **copiar o motivo exato**.
2. Corrigir só o que o motivo aponta. Causas comuns: conteúdo de pouco valor, site em construção, navegação, falta de política de privacidade. Mais tutoriais com texto próprio ajudam.
3. Pedir nova revisão no painel.

**Enquanto aguarda**
- Não fazer mudanças grandes (domínio, apagar tutoriais, trocar a estrutura).
- Publicar mais tutoriais com texto próprio (veja o README).
- Confirmar os itens "A confirmar" da tabela acima.

## 4. Decisões tomadas e por quê

1. **Cloudflare Pages em vez da Vercel Hobby.** A Vercel Hobby é para uso pessoal não comercial e proíbe anúncios (inclui AdSense). A alternativa era pagar o plano Pro.
2. **Consentimento livre.** Recusar e Aceitar têm o mesmo peso visual, nenhum conteúdo é bloqueado por causa da recusa e nenhum script de anúncio carrega antes do aceite. Foi descartado "aceite os anúncios ou não entra" (consentimento deixaria de ser livre, o robô do Google não clica em botão e as políticas do site prometem o contrário).
3. **Perguntar de novo após recusa:** só com 10 visitas **e** 30 dias, uma única vez, e a recusa continua valendo. Dez visitas sozinhas poderiam ser vistas como pressão.
4. **Aviso de independência como barra no rodapé**, não janela de tela cheia. Uma janela que cobre a página pode prejudicar a análise do AdSense e a indexação.
5. **Miniaturas locais** (`public/thumbs/`) e **vídeo do YouTube só após clique**, em `youtube-nocookie.com`. Evita contatar o Google antes de qualquer consentimento.
6. **CSP permissiva só quando os anúncios estão ligados.** O Google não suporta lista de domínios na CSP; só *nonce* com `strict-dynamic` (que tornaria todas as páginas dinâmicas) ou uma política permissiva. Escolhida a permissiva com `https:`, ativada pela variável `NEXT_PUBLIC_ADSENSE_CLIENT`.
7. **AdSense com o domínio raiz.** O formulário só aceita `samlabs.com.br`. A verificação é feita por **meta tag** e **`ads.txt`** no site raiz, que não são anúncios e não dependem do consentimento.
8. **Textos dos tutoriais vêm de transcrições reais.** Resumos gerados sem a transcrição saíram inventados: 10 de 17 descreviam outro vídeo e traziam menus e atalhos que não existem.
9. **Contribuição voluntária (Pix)** foi estudada e **descartada**. Não há página `/apoie`.
10. **Cloudflare Web Analytics desativado** nos dois sites. O Google Analytics do `samlabs.com.br` só carrega após o aceite.

## 5. Regras que não podem ser quebradas

- Nenhum script de terceiros (anúncios, analytics, pixels) carrega **antes** do consentimento.
- Recusar e Aceitar sempre com o mesmo peso. Nunca bloquear conteúdo por recusa.
- Mudou o comportamento do site? **Atualize os textos legais** (Termos, Privacidade, Cookies) e a data de "Última atualização".
- Texto de tutorial só do que está na transcrição. Nada de menus, atalhos ou URLs inventados.
- Nenhum dado real de paciente, cliente ou licença em vídeos, miniaturas ou texto.
- Não definir `NEXT_PUBLIC_ADS_SLOTS` antes da aprovação do AdSense.
- Não ativar o Funding Choices do Google (duplicaria o banner).
- Não clicar nos próprios anúncios nem pedir que outras pessoas cliquem.
- O site é **independente e não oficial**: nunca apresentar como canal oficial da empresa dona do sistema nem prometer suporte.
- Não voltar a hospedar na Vercel Hobby enquanto houver anúncios.

## 6. Mapa de arquivos importantes

| Arquivo | Para que serve |
|---|---|
| `src/data/tutorials.ts` | Todos os tutoriais (dados, passo a passo, dicas e FAQ) |
| `components/ConsentBanner.tsx` | Barra de consentimento e carregamento do script do AdSense |
| `lib/consent.ts` | Leitura e gravação da escolha, regra de perguntar de novo |
| `components/YouTubeFacade.tsx`, `VideoEmbed.tsx` | Vídeo só após clique, em `youtube-nocookie.com` |
| `scripts/fetch-thumbs.mjs` | Baixa as miniaturas (`npm run thumbs`) |
| `scripts/generate-headers.mjs` | Gera `out/_headers` (CSP e demais), lendo as variáveis do build |
| `app/tutorial/[slug]/page.tsx` | Página de cada tutorial (usa `NEXT_PUBLIC_ADS_SLOTS` para mostrar espaços de anúncio) |
| `app/termos`, `app/privacidade` | Textos legais |
| `app/sitemap.ts`, `app/robots.ts` | SEO |

## 7. Armadilhas conhecidas

- **"Retry deployment" na Cloudflare reconstrói aquele commit antigo**, não o mais recente. Para um deploy novo, use `git commit --allow-empty -m "chore: redeploy"` e `git push`.
- Variáveis `NEXT_PUBLIC_*` são gravadas no build. Mudou a variável, precisa de build novo. No log do build, a linha `generate-headers: ... (ads=ON|OFF, ...)` confirma se a variável chegou.
- O `.env.local` só vale no `npm run dev`; ele **não** altera o `out/_headers` do build local.
- `package-lock.json` costuma aparecer modificado sem motivo: `git restore package-lock.json` antes do commit.
- Fim de linha (CRLF/LF) pode inflar o diff. Opcional: `.gitattributes` com `* text=auto eol=lf`.
- Erros "Cannot find module '@/...'" no VS Code geralmente são cache: "TypeScript: Restart TS Server".
- O `git push` pelo terminal do VS Code (snap) pode falhar com `askpass.sh`: usar `gh auth login` e um terminal novo.
- `npm audit` ainda aponta o PostCSS embutido no Next 15 (só afeta o build, não é explorável aqui). A correção é migrar para o Next 16, em momento oportuno.
- A Cloudflare usa Node 22, que está em manutenção: considerar fixar a versão do Node no build quando fizer sentido.

## 8. Projeto irmão: samlabs.com.br

- Site de serviços do mantenedor (repositório separado), Next.js 16, na Cloudflare Pages. **Não tem anúncios.**
- Serve `public/ads.txt` e a meta tag `google-adsense-account` (verificação do AdSense do domínio raiz). `samlabs.com.br` redireciona para `www.samlabs.com.br`.
- Usa Google Analytics, carregado **só depois do aceite** no banner. O banner grava a escolha em `localStorage`, e o link "Preferências de cookies" no rodapé permite revogar.
- Políticas em `/privacidade`, `/politica-de-cookies` e `/termos-de-uso`. Se o mantenedor tiver CNPJ ou MEI, o controlador na Política (seção 1) deve ser a empresa.
- O link "Conheça o SAM" do `help.` aponta para esse site. Vale o mantenedor avisar a empresa dona do sistema de que ele existe, por transparência.

## 9. Pendências e perguntas em aberto

- Confirmar o Search Console (propriedade de domínio `samlabs.com.br` por TXT no Cloudflare, sitemaps de `help.` e `www.`).
- Confirmar o botão "Ver detalhes" do Painel de Gastos no `samlabs.com.br`.
- Confirmar que Rocket Loader e Bot Fight Mode não atrapalham o crawler do AdSense.
- Avisar a empresa dona do sistema sobre o link para o site de serviços.
- Decidir, após a aprovação, entre anúncios automáticos e manuais.

## 10. Comandos úteis de verificação

```bash
# Headers no ar (CSP sem "report-only", HSTS, fullscreen do YouTube)
curl -sI "https://help.samlabs.com.br/?v=$(date +%s)" | grep -iE "content-security|permissions-policy|strict-transport"

# Meta tag do AdSense no help. e no domínio raiz
curl -s "https://help.samlabs.com.br/?v=$(date +%s)" | grep -o 'google-adsense-account[^>]*' | head -1
curl -s https://www.samlabs.com.br | grep -o 'google-adsense-account[^>]*' | head -1

# ads.txt do domínio raiz
curl -s https://www.samlabs.com.br/ads.txt
curl -sIL https://samlabs.com.br/ads.txt | grep -iE "^HTTP|location"

# Sitemap (deve listar 25 URLs: 7 páginas e 18 tutoriais)
curl -s https://help.samlabs.com.br/sitemap.xml | grep -c "<loc>"

# Nada da Cloudflare Analytics sendo injetado (deve imprimir 0)
curl -s https://help.samlabs.com.br/ | grep -c cloudflareinsights
```

Teste do banner em janela anônima: Network com filtro `pagead` **vazio** antes da escolha; depois de Aceitar, aparece `adsbygoogle.js`; depois de Recusar, nenhuma requisição `pagead` e `sam_consent` com `"ads":false`.

## 11. Histórico resumido

- Auditoria inicial de segurança e LGPD; textos legais reescritos; banner de consentimento criado.
- Vídeo do YouTube com carregamento só após clique, em `youtube-nocookie.com`, e miniaturas locais.
- Headers de segurança e CSP corrigidos (tela cheia do vídeo, miniaturas locais).
- 18 tutoriais com passo a passo, dicas e FAQ escritos a partir das transcrições; páginas Sobre e Contato; sitemap e `robots.txt`.
- Banner do `samlabs.com.br` refeito (Google Analytics só após aceite) e políticas atualizadas.
- Conta AdSense criada; `samlabs.com.br` adicionado; `ads.txt` e meta tag no ar.
- Migração dos dois sites da Vercel para a Cloudflare Pages (Vercel Hobby proíbe anúncios).
- Variáveis do AdSense ligadas na produção do `help.`, CSP em modo de teste e depois enforcing; teste de Aceitar, Recusar e revogar aprovado.
- Aviso de independência virou barra no rodapé; regra de perguntar de novo após recusa; README e prompts documentados.
- Análise do AdSense em andamento.

## 12. Prompt para retomar o trabalho com uma IA

Copie, cole na nova conversa e anexe os arquivos indicados:

````text
Vou continuar um projeto já em andamento. Leia com atenção o README.md e os arquivos docs/ESTADO-DO-PROJETO.md e docs/prompt-tutoriais.md (anexados) antes de responder.

Regras: respeite a seção "Regras que não podem ser quebradas"; não refaça decisões da seção "Decisões tomadas" sem me explicar o motivo; peça para eu colar a saída de comandos em vez de presumir resultados; para qualquer tutorial novo, use apenas a transcrição do vídeo.

Resuma em poucas linhas o estado do projeto e o que falta, e depois me pergunte qual é o status atual da análise do AdSense para escolhermos o próximo passo da seção 3.

Tom: colega sênior, direto e técnico, sem explicar o básico de redes e Linux. Responda em português do Brasil.
````

# Prompt para gerar o texto dos tutoriais

Este arquivo guarda o prompt usado para transformar a **transcrição de um vídeo** nos campos escritos de um tutorial (`summary`, `steps`, `tips` e `faq` em `src/data/tutorials.ts`). Funciona com qualquer assistente de IA.

## Como usar

1. Pegue a transcrição do vídeo: no YouTube, abra o vídeo, clique em `...` abaixo do player e em "Mostrar transcrição" (ou use Legendas, no YouTube Studio). Copie todo o texto.
2. Copie o **Prompt principal** abaixo, preencha o bloco `ENTRADAS` e cole a transcrição no final.
3. Cole o resultado em `src/data/tutorials.ts`, dentro da entrada do tutorial.
4. **Confira assistindo ao vídeo.** Veja principalmente nomes de menus, botões, ícones e a ordem dos passos. A IA só vê o texto da legenda, e a legenda automática erra.
5. Rode `npm run build` e confira a página `/tutorial/<slug>`.

> Por que exigir a transcrição: resumos gerados só a partir do título ou do link do vídeo saem plausíveis, mas **inventados** (menus que não existem, atalhos errados, endereços falsos). Todo texto precisa vir do que foi dito no vídeo.

## Prompt principal

````text
Você vai redigir o conteúdo escrito de um tutorial para o site "Tutoriais Clinic All", um site independente e não oficial com vídeos e passo a passo sobre o sistema Clinic All (versões Web e Desktop). Os leitores são profissionais e recepcionistas de clínicas que querem executar uma tarefa no sistema. Tom: claro, direto e instrucional, em português do Brasil, com verbos no imperativo ("Clique em...", "Informe...").

ENTRADAS
- Título do vídeo: [PREENCHER]
- Versão do sistema: [Web ou Desktop]
- Categoria: [Recepção | Operacional | Agenda | Módulo Médico | Financeiro | Faturamento | Relatórios]
- Duração: [PREENCHER]
- Transcrição (legenda automática do vídeo):
[COLAR A TRANSCRIÇÃO AQUI]

REGRAS DE FIDELIDADE (as mais importantes)
1. Use SOMENTE o que está na transcrição. Não invente menus, botões, atalhos de teclado, endereços (URLs), campos obrigatórios, valores nem funcionalidades.
2. Mantenha os nomes de menus e botões como foram falados (por exemplo, "Cadastro, Operacional, Paciente"). Escreva-os de forma legível, com vírgulas ou o sinal ">".
3. A legenda automática erra. Corrija o óbvio ("Clinical" ou "Clínica All" viram "Clinic All"), mas se um trecho estiver ininteligível, NÃO o inclua no texto e liste-o em "Conferir antes de publicar".
4. Reescreva com suas próprias palavras. Não copie frases da transcrição. Não cite o nome de quem narra.
5. Não inclua dados reais de pessoas, clínicas, licenças ou endereços de servidor, mesmo que apareçam na fala.
6. Não faça promessas sobre o sistema além do que o vídeo mostra (por exemplo, não diga que algo é "obrigatório" ou "sempre" se o vídeo não afirma).

FORMATO DE SAÍDA
Devolva um único bloco de código TypeScript, pronto para colar dentro do objeto do tutorial, com apenas estes campos, nesta ordem:

summary: "..." (1 a 2 frases dizendo o que o tutorial ensina)
steps: [ { title: "...", text: "..." }, ... ]
tips: [ "...", ... ]
faq: [ { question: "...", answer: "..." }, ... ]

Regras do formato:
- Aspas duplas nas strings. Não use aspas duplas DENTRO do texto (use aspas simples ou reescreva). Sem markdown dentro das strings.
- steps: de 5 a 14 passos. Cada title é curto e começa com verbo ("Abra a agenda"). Cada text tem de 1 a 3 frases. Se o vídeo mostra duas formas de fazer a mesma tarefa, prefixe os títulos com "Forma 1:" e "Forma 2:".
- Os títulos dos passos devem ser todos DIFERENTES entre si; as dicas, também; e as perguntas da FAQ, também (são usados como chave no React).
- tips: de 2 a 4 dicas ou pontos de atenção que aparecem no vídeo.
- faq: de 2 a 3 perguntas que um usuário faria, com respostas curtas baseadas só no vídeo. Em vídeos de até 1 minuto, use 1 pergunta.
- Tamanho total: entre 250 e 500 palavras (menos para vídeos curtos).

DEPOIS DO BLOCO DE CÓDIGO
Acrescente uma seção "Conferir antes de publicar" com uma lista curta de:
- trechos ininteligíveis que você deixou de fora;
- nomes de menus, botões ou ícones que você não tem certeza de que estão corretos (inclusive ícones citados por apelido);
- qualquer passo cuja ordem ficou ambígua na transcrição.

EXEMPLO DO FORMATO (conteúdo fictício, só para mostrar a estrutura)
summary: "Veja como alterar o valor de um item cadastrado no sistema.",
steps: [
  { title: "Abra o cadastro", text: "No menu, acesse o cadastro do item e use a busca para localizá-lo." },
  { title: "Altere o valor e salve", text: "Informe o novo valor no campo correspondente e clique em Salvar." },
],
tips: ["Os valores novos valem só a partir do momento da alteração."],
faq: [
  { question: "O novo valor muda registros antigos?", answer: "Não. Os registros já lançados mantêm o valor anterior." },
],
````

## Prompt de revisão (para um texto que já existe)

Use quando já houver um tutorial escrito e você quiser conferi-lo contra a transcrição, sem reescrevê-lo.

````text
Compare o texto abaixo com a transcrição do vídeo e aponte divergências. NÃO reescreva o texto.

Para cada passo, dica e pergunta da FAQ, diga se está:
- CONFIRMADO: aparece na transcrição;
- NÃO ENCONTRADO: não aparece na transcrição (provável invenção);
- DIVERGENTE: aparece, mas com nome, ordem ou detalhe diferente (explique a diferença).

Liste também o que o vídeo ensina e o texto deixou de fora. Responda em português do Brasil, em lista curta, citando o trecho da transcrição quando houver divergência.

TEXTO A CONFERIR:
[COLAR summary, steps, tips e faq]

TRANSCRIÇÃO:
[COLAR A TRANSCRIÇÃO]
````

## Prompt de padronização (para organizar vários tutoriais de uma vez)

Use quando houver vários textos escritos em momentos diferentes e você quiser uniformizá-los.

````text
Padronize os tutoriais abaixo mantendo o conteúdo, sem acrescentar informação nova:
- títulos dos passos começando com verbo no imperativo e únicos dentro de cada tutorial;
- 5 a 14 passos, 2 a 4 dicas e 2 a 3 perguntas por tutorial;
- "Forma 1:" e "Forma 2:" quando o tutorial mostra duas maneiras de fazer a tarefa;
- nenhuma aspa dupla dentro das strings;
- "Clinic All" sempre escrito assim.

Se algo parecer inventado ou inconsistente com o título do tutorial, NÃO corrija por conta própria: liste em "Dúvidas" para eu conferir com a transcrição.

Devolva o mesmo formato TypeScript do arquivo de origem.

TUTORIAIS:
[COLAR OS OBJETOS]
````

## Lista de conferência humana (antes de publicar)

- [ ] Assisti pelo menos aos momentos em que aparecem menus e botões, e os nomes batem.
- [ ] A ordem dos passos é a mesma do vídeo.
- [ ] Nenhum dado real (paciente, cliente, licença, servidor) aparece no texto, nem nas miniaturas.
- [ ] Nada foi inventado: atalhos, URLs, campos obrigatórios ou funcionalidades que o vídeo não mostra.
- [ ] Os títulos dos passos, as dicas e as perguntas são únicos dentro do tutorial.
- [ ] `npm run build` passou e a página `/tutorial/<slug>` está correta.

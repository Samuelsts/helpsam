export type ClinicAllApp = "web" | "desktop";

export type TutorialLevel = "básico" | "intermediário" | "avançado";

export const categoryOrder = [
  "Recepção",
  "Operacional",
  "Agenda",
  "Módulo Médico",
  "Financeiro",
  "Faturamento",
  "Relatórios",
] as const;

export type TutorialCategory = (typeof categoryOrder)[number];

export type TutorialStep = {
  title: string;
  text: string;
};

export type TutorialImage = {
  src: string; // ex.: "/tutorials/como-cadastrar-um-paciente-web/01.png"
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type TutorialFaq = {
  question: string;
  answer: string;
};

export type Tutorial = {
  id: string;
  slug: string;
  title: string;
  description: string;
  app: ClinicAllApp;
  category: TutorialCategory;
  level: TutorialLevel;
  duration: string;
  youtubeId: string;
  hasImageTutorial: boolean;
  imageTutorialUrl?: string;
  summary?: string;
  steps?: TutorialStep[];
  tips?: string[];
  faq?: TutorialFaq[];
  images?: TutorialImage[];
};

export const appInfo: Record<
  ClinicAllApp,
  {
    name: string;
    shortName: string;
    href: string;
    description: string;
  }
> = {
  web: {
    name: "Clinic All Web",
    shortName: "Web",
    href: "/web",
    description:
      "Tutoriais práticos para quem usa a versão no navegador, com foco em rotinas simples e consulta rápida.",
  },
  desktop: {
    name: "Clinic All Desktop",
    shortName: "Desktop",
    href: "/desktop",
    description:
      "Guias objetivos para a versão instalada, pensados para apoiar tarefas comuns do dia a dia.",
  },
};

export const tutorials: Tutorial[] = [
  {
    id: "web-001",
    slug: "como-acessar-o-sistema-web",
    title: "Como acessar o sistema",
    description:
      "Veja o fluxo básico para entrar no ambiente web e localizar a tela inicial.",
    app: "web",
    category: "Operacional",
    level: "básico",
    duration: "2 min",
    youtubeId: "7yBtwbKHQgU",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Veja como abrir o Clinic All Web no navegador, entrar com usuário e senha e o que fazer quando não for possível acessar.",
    steps: [
      {
        title: "Use um navegador recomendado",
        text: "O vídeo recomenda o Mozilla Firefox ou o Google Chrome para usar o sistema.",
      },
      {
        title: "Digite o endereço da clínica",
        text: "Na barra de endereços do navegador, digite a URL da sua clínica. Ela é fornecida ao administrador da clínica assim que o sistema fica disponível para uso.",
      },
      {
        title: "Aguarde a tela de acesso",
        text: "O sistema carrega a tela de acesso com a logo da clínica.",
      },
      {
        title: "Informe usuário e senha",
        text: "Digite o nome de usuário e a senha que foram cadastrados e entre no sistema.",
      },
      {
        title: "Se não conseguir entrar, peça a redefinição da senha",
        text: "Avise a administração da clínica e use a opção Esqueci a senha. O administrador, ou quem tem acesso ao cadastro, corrige o e-mail no campo do usuário. Depois, você informa o seu nome de usuário e o sistema envia um link de redefinição de senha para o e-mail cadastrado.",
      },
    ],
    tips: [
      "O endereço (URL) do sistema é fornecido ao administrador da clínica. Se você não o tem, peça a ele.",
      "O link de redefinição de senha vai para o e-mail que está cadastrado no sistema, por isso mantenha esse e-mail correto.",
    ],
    faq: [
      {
        question: "Onde consigo o endereço do sistema?",
        answer:
          "Com o administrador da clínica, que recebe a URL assim que o sistema é liberado para uso.",
      },
      {
        question: "Não consigo entrar. O que faço?",
        answer:
          "Fale com a administração da clínica e use a opção Esqueci a senha. Depois que o e-mail do usuário estiver correto, o sistema envia o link de redefinição.",
      },
      {
        question: "Qual navegador devo usar?",
        answer: "O vídeo recomenda o Mozilla Firefox ou o Google Chrome.",
      },
    ],
  },
  {
    id: "web-002",
    slug: "como-cadastrar-um-paciente-web",
    title: "Como cadastrar um paciente",
    description:
      "Neste vídeo, acompanhe a rotina básica de cadastro de pacientes, preenchendo as principais informações necessárias para o registro no sistema.",
    app: "web",
    category: "Recepção",
    level: "básico",
    duration: "4 min",
    youtubeId: "c6Z0SEnPViA",
    hasImageTutorial: false,
    summary:
      "Veja as duas formas de cadastrar um paciente no Clinic All Web: a partir de um pré-agendamento na agenda ou direto na tela de pacientes.",
    steps: [
      {
        title: "Forma 1: abra a agenda",
        text: "Clique no ícone de agenda no topo do sistema, ou use o caminho de agendamento e marcação, para ir à tela de marcação.",
      },
      {
        title: "Forma 1: selecione o paciente pré-agendado",
        text: "Localize o paciente pré-agendado e clique no nome dele.",
      },
      {
        title: "Forma 1: confirme a conclusão do cadastro",
        text: "O sistema pergunta se você deseja concluir o cadastro. Ao confirmar, a tela de cadastro abre com o nome e o celular já preenchidos, vindos do agendamento.",
      },
      {
        title: "Forma 1: complete os dados pessoais",
        text: "Informe o gênero, o estado civil e a raça do paciente.",
      },
      {
        title: "Forma 1: preencha o endereço",
        text: "Digite o CEP para o sistema pesquisar o endereço, ou use a busca detalhada informando o endereço e a cidade. Também dá para preencher os campos manualmente.",
      },
      {
        title: "Forma 1: adicione os contatos",
        text: "No campo de contato, preencha o e-mail ou outro número do paciente, marque a bolinha de descrição (por exemplo, e-mail pessoal) e clique no ícone de nuvem para adicionar. Repita o mesmo passo para outros contatos.",
      },
      {
        title: "Forma 1: informe o CPF e salve",
        text: "Digite o CPF do paciente. Para o sistema fazer a verificação, ele precisa ser um CPF válido. Depois, clique em Salvar para finalizar o cadastro.",
      },
      {
        title: "Forma 2: abra o cadastro de pacientes",
        text: "Se o paciente não foi pré-agendado, clique em Paciente ou vá ao menu Cadastro, Operacional, Paciente. O sistema lista os pacientes já cadastrados.",
      },
      {
        title: "Forma 2: clique em Novo e preencha",
        text: "Clique em Novo e preencha os dados na mesma tela da Forma 1, depois salve.",
      },
    ],
    tips: [
      "Se o paciente já foi pré-agendado, prefira a Forma 1: nome e celular vêm preenchidos e você evita digitar duas vezes.",
      "Em cada contato adicional, marque a descrição (por exemplo, e-mail pessoal) e clique no ícone para adicioná-lo à lista antes de salvar.",
      "O CPF precisa ser válido para o sistema fazer a verificação.",
    ],
    faq: [
      {
        question: "Preciso passar pela agenda para cadastrar um paciente?",
        answer:
          "Não. Você pode cadastrar direto em Cadastro, Operacional, Paciente, clicando em Novo. A agenda é útil quando o paciente já foi pré-agendado, porque o cadastro começa com nome e celular preenchidos.",
      },
      {
        question: "Como adiciono mais de um e-mail ou telefone?",
        answer:
          "No campo de contato, preencha a informação, marque a descrição e clique no ícone para adicionar. Para outros contatos, repita o mesmo passo.",
      },
      {
        question: "O que faço se o endereço não aparece ao digitar o CEP?",
        answer:
          "Use a busca detalhada pelo endereço e cidade, ou preencha os campos de endereço manualmente.",
      },
    ],
  },
  {
    id: "web-003",
    slug: "como-registrar-atendimento-no-particular-web",
    title: "Como registrar atendimentos no particular",
    description:
      "Veja o fluxo de como registrar um atendimento particular no sistema.",
    app: "web",
    category: "Recepção",
    level: "intermediário",
    duration: "5 min",
    youtubeId: "ZgFUWfvq4JI",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Há duas formas de lançar o atendimento de um paciente particular: pela agenda ou direto pela tela de atendimento. O vídeo mostra as duas e também como registrar o pagamento.",
    steps: [
      {
        title: "Forma 1: abra a agenda",
        text: "Vá em Operacional, Agendamento, Marcação, ou clique no ícone da agenda.",
      },
      {
        title: "Forma 1: lance o atendimento pelo agendamento",
        text: "No agendamento do paciente, clique no ícone de lançamento do atendimento. O sistema preenche automaticamente o serviço e o profissional.",
      },
      {
        title: "Forma 1: complete os campos e salve",
        text: "Se for necessário, preencha o número da guia e o profissional solicitante. Clique em Salvar e confirme.",
      },
      {
        title: "Registre a forma de pagamento",
        text: "Em atendimento particular, o sistema habilita Dados de pagamento e mostra uma notificação de pendência de pagamento. Abra o campo, escolha a forma de pagamento do paciente e clique em Salvar pagamento.",
      },
      {
        title: "Divida o pagamento em mais de uma forma",
        text: "Informe a primeira forma de pagamento e o valor recebido, e clique em Salvar pagamento. O sistema cobra o saldo restante, e você informa a outra forma. Para refazer, apague a forma anterior no ícone da lixeira.",
      },
      {
        title: "Aplique desconto, se houver",
        text: "Informe o desconto antes das formas de pagamento. Ele pode ser em valor fixo ou em porcentagem: clique no ícone da unidade monetária para alternar e confirme no ícone de visto.",
      },
      {
        title: "Forma 2: lance pela tela de atendimento",
        text: "Clique no ícone Atendimento ou vá em Operacional, Recepção, Guia OS. Pesquise o paciente e clique no ícone de mais para lançar um novo atendimento.",
      },
      {
        title: "Forma 2: informe serviço e profissional",
        text: "Como esse atendimento não tem vínculo com a agenda, informe o profissional e o procedimento (e o profissional solicitante, se precisar) e salve. Depois, registre o pagamento da mesma forma.",
      },
      {
        title: "Apague o atendimento ou emita o recibo",
        text: "Se o usuário tiver permissão, ele pode usar a opção Apagar OS. Para imprimir o recibo, use a opção Recibo e escolha se ele sai no nome da clínica ou no nome do profissional.",
      },
    ],
    tips: [
      "Informe o desconto sempre antes de lançar as formas de pagamento.",
      "Na Forma 1, depois de lançar, o agendamento fica vinculado à guia que você acabou de criar.",
      "Apagar um atendimento depende da permissão do usuário.",
    ],
    faq: [
      {
        question: "Posso dividir o pagamento em duas formas?",
        answer:
          "Sim. Informe a primeira forma de pagamento e o valor, salve, e o sistema cobra o saldo restante para você informar a segunda forma.",
      },
      {
        question: "O desconto pode ser em porcentagem?",
        answer:
          "Sim. O desconto pode ser em valor fixo ou em porcentagem, alternando no ícone da unidade monetária.",
      },
      {
        question: "Dá para escolher em nome de quem sai o recibo?",
        answer:
          "Sim. Ao emitir o recibo, você escolhe entre o nome da clínica e o nome do profissional.",
      },
    ],
  },
  {
    id: "web-004",
    slug: "modulo-financeiro-web",
    title: "Módulo Financeiro",
    description:
      "Conheça a rotina básica de uso do módulo financeiro do Clinic All, explorando as principais funcionalidades para controle e acompanhamento das movimentações financeiras da clínica.",
    app: "web",
    category: "Financeiro",
    level: "avançado",
    duration: "17 min",
    youtubeId: "dz_4g9ghj2g",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Antes de usar o financeiro, é preciso fazer alguns cadastros prévios. O vídeo mostra esses cadastros e depois o uso de contas a pagar, contas a receber, envio financeiro e relatórios.",
    steps: [
      {
        title: "Cadastre o fornecedor",
        text: "Vá em Cadastro, Financeiro, Fornecedor e clique em Novo. Escolha se é pessoa jurídica ou física (se o CPF já existir como profissional, o sistema unifica as informações). Preencha CNPJ, razão social e nome fantasia, além de dados bancários, endereço e contato, e salve.",
      },
      {
        title: "Cadastre as agências",
        text: "Em Tabelas, Financeiro, Agência, cadastre as agências com que a clínica trabalha, incluindo o caixa interno. Para o caixa interno, crie um banco caixa interno e uma agência caixa interna, necessários para o envio financeiro. Informe número, nome, gerente e banco.",
      },
      {
        title: "Confira os bancos e as bandeiras de cartão",
        text: "Os bancos que operam no Brasil, inclusive os digitais, já vêm cadastrados, e só é preciso cadastrar um novo se necessário. Em Bandeira de cartão há as principais bandeiras (Amex, Diners, Elo, Hipercard, Mastercard, Visa), e você pode cadastrar outras ou inativar.",
      },
      {
        title: "Cadastre as contas",
        text: "Em Tabelas, Financeiro, Conta, escolha a agência e informe número da conta, tipo (corrente, poupança ou investimento), se é de movimentação ou aplicação, limite especial e data de abertura. Isso vincula a conta à agência.",
      },
      {
        title: "Crie históricos",
        text: "Em Tabelas, Financeiro, Histórico, cadastre palavras-chave (por exemplo, aluguel de sala ou pagamento à vista). Elas facilitam as buscas e os relatórios.",
      },
      {
        title: "Configure as formas de pagamento",
        text: "Em Forma de pagamento, dê atenção à taxa do cartão (confirme com o fornecedor da maquininha), ao imposto e ao intervalo de dias entre parcelas. Defina a regra de aproximação de centavos (a diferença fica na primeira ou na última parcela) e a regra para parcela que cai em dia não útil (antecipar ou prorrogar). Informe também tipo (crédito ou débito), bandeira, conta de destino, plano de contas e prazo de compensação.",
      },
      {
        title: "Veja o plano de contas e os tipos de documento",
        text: "O sistema já traz um plano de contas padrão, com grupos e subgrupos, e permite criar novos subgrupos (por exemplo, fardamento em despesas operacionais). Em Tipo de documento, cadastre os documentos usados, como boleto bancário e promissória.",
      },
      {
        title: "Lance uma conta a pagar",
        text: "Vá em Financeiro, Título, Contas a pagar e clique em Novo. Escolha a empresa (o sistema é multiempresa), o centro de resultado, o plano de contas, o fornecedor, o tipo e o número do documento e o valor. Se quiser, detalhe histórico, complemento, parcelas, desconto, taxas e multa. Ao salvar, o título fica como não pago.",
      },
      {
        title: "Dê baixa no pagamento",
        text: "Na área de pagamento, informe a data, a conta de onde saiu o dinheiro, o tipo de pagamento e de documento, o número do boleto, desconto, juros e multa (se houver), se já foi compensado e uma observação. Salve, e o título passa a pago. O sistema avisa quando o pagamento é parcial ou divergente.",
      },
      {
        title: "Use o filtro para ver os títulos pagos",
        text: "Pelo botão de filtro ao lado da busca, você pode buscar por número do documento, fornecedor, data de emissão, vencimento ou pagamento. Deixando as datas em branco, ele traz tudo.",
      },
      {
        title: "Entenda as contas a receber",
        text: "A tela é parecida com a de contas a pagar. O envio financeiro e a baixa feita pelo faturamento já caem em contas a receber, então só lance manualmente o que for recebimento fora de atendimento e de convênio.",
      },
      {
        title: "Conheça conciliação e orçamento",
        text: "Na conciliação bancária você importa o arquivo OFX da movimentação bancária e registra transferências entre contas. O orçamento serve, por exemplo, para orçar uma obra da clínica e entregar aos gestores.",
      },
      {
        title: "Processe o envio financeiro",
        text: "Faça o envio financeiro diariamente, junto com o fechamento do caixa (imprima antes o relatório de fechamento). Clique em Novo, informe empresa e centro de resultado, salve o cabeçalho, consulte, marque o que será enviado e clique em Processar. Os itens enviados passam para a aba Enviados. Preencha antes as taxas e as parcelas das formas de pagamento, porque o envio já abate as taxas.",
      },
      {
        title: "Consulte os relatórios financeiros",
        text: "Em Aplicação, Relatórios financeiros, há extrato de pagamento, contas a pagar, resultado e fluxo de caixa. Por exemplo, o extrato bancário de um período e de uma conta traz as entradas e saídas dela.",
      },
    ],
    tips: [
      "Faça os cadastros prévios (fornecedor, agência, conta, forma de pagamento, plano de contas) antes de lançar títulos.",
      "Mantenha o cadastro de fornecedores completo e correto para que o banco de dados seja confiável.",
      "O envio financeiro deve ser feito todos os dias, junto com o fechamento do caixa.",
      "Confira com o fornecedor da maquininha a taxa do cartão antes de cadastrar a forma de pagamento.",
    ],
    faq: [
      {
        question: "Preciso cadastrar os bancos?",
        answer:
          "Em geral, não. Os bancos que operam no Brasil, inclusive os digitais, já vêm cadastrados. Só cadastre um novo se precisar, como o caixa interno.",
      },
      {
        question: "Quando devo lançar manualmente em contas a receber?",
        answer:
          "Somente para recebimentos fora de atendimento e fora de convênio. O envio financeiro e a baixa do faturamento já alimentam contas a receber.",
      },
      {
        question: "Para que serve o histórico?",
        answer:
          "É uma palavra-chave usada para facilitar buscas e relatórios, como aluguel de sala ou pagamento à vista.",
      },
    ],
  },
  {
    id: "web-005",
    slug: "como-registrar-atendimento-dos-convenios-web",
    title: "Como registrar atendimentos dos convênios",
    description:
      "Veja na prática a rotina básica de registro de um atendimento de convênio, desde a abertura até a finalização do serviço prestado ao paciente.",
    app: "web",
    category: "Recepção",
    level: "intermediário",
    duration: "6 min",
    youtubeId: "ytRbOmEZS_g",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Assim como no particular, o atendimento de convênio pode ser lançado pela agenda ou direto pela tela de atendimento. O vídeo mostra também como preencher as informações da guia.",
    steps: [
      {
        title: "Abra a agenda",
        text: "Vá em Operacional, Agendamento, Marcação, ou clique no ícone da agenda.",
      },
      {
        title: "Lance o atendimento pelo agendamento",
        text: "No paciente, clique no ícone de lançamento do atendimento. O sistema carrega o serviço, o profissional e o convênio conforme o agendamento.",
      },
      {
        title: "Preencha os dados da guia",
        text: "Se for necessário, informe o número da guia, o profissional solicitante, o CID e a empresa solicitante. O ícone de mais permite cadastrar um solicitante que ainda não existe, e o X remove um CID informado por engano. Depois, clique em Salvar.",
      },
      {
        title: "Informe a autorização",
        text: "Como é atendimento de convênio, o campo Dados de pagamento não fica habilitado. Preencha, em Autorização, a senha de liberação, a data da autorização e a data de validade.",
      },
      {
        title: "Complete as informações da guia",
        text: "Em Informações da guia, indique o tipo (por exemplo, SADT, consulta, honorários ou resumo de internação) e preencha, se necessário, o número da guia da operadora, o número da guia principal e o tipo de acidente.",
      },
      {
        title: "Adicione mais procedimentos à mesma guia",
        text: "Em Itens da OS, clique no ícone de mais, informe o segundo procedimento e salve. Ele é adicionado à mesma guia.",
      },
      {
        title: "Imprima para conferir",
        text: "Clique em Imprimir para ver como a guia será gerada. Se faltar algum campo, feche, volte à tela de atendimento, preencha (por exemplo, a senha de autorização), salve e confira de novo.",
      },
      {
        title: "Lance sem vínculo com a agenda",
        text: "Clique em Atendimento, informe o nome do paciente e use o ícone de mais para abrir uma nova OS. Informe o profissional e o procedimento, preencha o restante e salve. Depois, complete autorização, informações da guia e itens, se precisar.",
      },
    ],
    tips: [
      "Em atendimento de convênio, o campo Dados de pagamento fica desabilitado. As informações da guia são preenchidas em Autorização e Informações da guia.",
      "Imprima a guia antes de encerrar para conferir se algum campo ficou sem preencher.",
    ],
    faq: [
      {
        question:
          "Por que não consigo informar o pagamento no atendimento do convênio?",
        answer:
          "Porque, em atendimento de convênio, o campo Dados de pagamento não é habilitado. Use os campos de autorização e de informações da guia.",
      },
      {
        question: "Como adiciono outro procedimento à mesma guia?",
        answer:
          "Em Itens da OS, clique no ícone de mais, informe o novo procedimento e salve.",
      },
      {
        question: "Informei o CID errado. Como removo?",
        answer: "Clique no X do CID informado para removê-lo.",
      },
    ],
  },
  {
    id: "web-006",
    slug: "como-cadastrar-medicos-e-profissionais-web",
    title: "Como cadastrar médicos e profissionais",
    description:
      "Conheça a rotina básica de cadastro dos profissionais de saúde, registrando suas informações essenciais no sistema.",
    app: "web",
    category: "Operacional",
    level: "básico",
    duration: "3 min",
    youtubeId: "5m6YUeEIL6s",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "O vídeo mostra como cadastrar um profissional juntamente com o usuário dele no sistema, na mesma tela.",
    steps: [
      {
        title: "Abra a lista de profissionais",
        text: "Clique em Profissional ou vá em Cadastro, Organizacional, Profissional. O sistema lista os profissionais já cadastrados.",
      },
      {
        title: "Clique em Novo",
        text: "Para cadastrar um profissional novo, clique no botão Novo.",
      },
      {
        title: "Preencha os dados do profissional",
        text: "Informe os dados do profissional, incluindo o CPF, a data de nascimento, o conselho, o número do conselho e o estado.",
      },
      {
        title: "Defina corpo clínico e especialidade",
        text: "Informe se o profissional é interno ou externo (corpo clínico) e a especialidade dele.",
      },
      {
        title: "Preencha os dados de usuário",
        text: "Informe o nome de usuário, que não aceita espaço nem caracteres especiais, e o e-mail.",
      },
      {
        title: "Escolha o perfil e a unidade",
        text: "Selecione o perfil que será aplicado ao profissional. Os perfis contêm as restrições do usuário dentro do sistema, e um usuário pode ter mais de um perfil. Informe também a unidade do profissional.",
      },
      {
        title: "Salve",
        text: "Clique em Salvar. O profissional fica cadastrado já com o usuário dele, e a senha para acessar o sistema chega no e-mail cadastrado.",
      },
    ],
    tips: [
      "No nome de usuário, não use espaço nem caracteres especiais.",
      "A senha de acesso chega no e-mail cadastrado, então confira se o e-mail está correto.",
      "As restrições de acesso vêm do perfil escolhido.",
    ],
    faq: [
      {
        question: "Como o profissional recebe a senha?",
        answer:
          "O sistema envia a senha para o e-mail informado no cadastro. O profissional deve acessar o e-mail e verificar a senha.",
      },
      {
        question: "Um profissional pode ter mais de um perfil?",
        answer: "Sim. O usuário pode ser informado em mais de um perfil.",
      },
      {
        question: "Posso usar espaço no nome de usuário?",
        answer: "Não. Esse campo não permite espaço nem caracteres especiais.",
      },
    ],
  },
  {
    id: "web-007",
    slug: "como-cadastrar-usuarios-web",
    title: "Como cadastrar usuários",
    description:
      "Aprenda a rotina básica de criação e configuração de usuários, definindo acessos dentro do Clinic All.",
    app: "web",
    category: "Operacional",
    level: "básico",
    duration: "3 min",
    youtubeId: "t-a0BQt46dE",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Veja como cadastrar um novo usuário no Clinic All Web, desde as informações necessárias antes do cadastro até a criação do acesso.",
    steps: [
      {
        title: "Reúna as informações antes",
        text: "Tenha em mãos o nome do usuário, o CPF, os perfis que serão aplicados e o e-mail.",
      },
      {
        title: "Abra a tela de usuários",
        text: "Use o atalho de usuário ou vá em Cadastro, Segurança, Usuário. O sistema lista os usuários cadastrados com o status de cada um: novo, ativo ou inativo.",
      },
      {
        title: "Clique em Novo",
        text: "O botão Novo fica no canto superior direito da tela.",
      },
      {
        title: "Preencha os dados do usuário",
        text: "Informe o nome, o CPF, a data de nascimento, o nome de usuário (o login que ele usará para entrar) e o e-mail.",
      },
      {
        title: "Siga a regra do nome de usuário",
        text: "O sistema não permite caracteres especiais nem espaço. Para nome e sobrenome, o vídeo aconselha usar nome, ponto e sobrenome, para identificar melhor o usuário.",
      },
      {
        title: "Selecione o perfil",
        text: "As restrições, ou seja, até onde o usuário pode acessar, são aplicadas em cada perfil. Por isso os perfis precisam estar configurados antes.",
      },
      {
        title: "Informe unidade, centro de resultado e CEP",
        text: "Informe a unidade do usuário, o centro de resultado e o CEP.",
      },
      {
        title: "Salve",
        text: "Clique em Salvar. O usuário recebe no e-mail as informações com a senha para acessar o sistema.",
      },
    ],
    tips: [
      "Configure os perfis antes de criar o usuário, para saber o que cada um poderá acessar.",
      "Para nome e sobrenome no login, prefira o formato nome.sobrenome.",
    ],
    faq: [
      {
        question: "Como o usuário recebe a senha?",
        answer:
          "O sistema envia por e-mail as informações de acesso, com a senha, depois que o cadastro é salvo.",
      },
      {
        question: "O que define o que cada usuário pode acessar?",
        answer:
          "O perfil. As restrições de acesso são aplicadas em cada perfil, que deve estar configurado previamente.",
      },
      {
        question: "Posso usar espaço no nome de usuário?",
        answer:
          "Não. O sistema não aceita espaço nem caracteres especiais nesse campo.",
      },
    ],
  },
  {
    id: "web-008",
    slug: "evolucoes-e-agenda-profissional-web",
    title: "Evoluções e agenda profissional",
    description:
      "Neste vídeo, acompanhe a rotina básica de registro de evoluções e gerenciamento da agenda profissional no Clinic All Web.",
    app: "web",
    category: "Módulo Médico",
    level: "básico",
    duration: "7 min",
    youtubeId: "YbaEoqSa8UE",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "A agenda profissional é onde o profissional acessa evoluções antigas, registra novas evoluções e emite documentos como exames, receituários, atestados, relatórios e laudos.",
    steps: [
      {
        title: "Abra a agenda profissional",
        text: "Se tudo estiver configurado, quando o profissional faz login o sistema já o leva a essa tela. Para voltar a ela, siga Operacional, Atendimento, Agenda profissional. O sistema lista os pacientes agendados para o profissional na data.",
      },
      {
        title: "Procure um paciente fora da lista",
        text: "Se o paciente não aparece nos agendamentos, informe o nome no campo Paciente. Se ele estiver cadastrado, o profissional consegue acessar o prontuário.",
      },
      {
        title: "Entenda os status",
        text: "A recepção sinaliza por status se o paciente está pronto para o atendimento, se faltou ou se está confirmado. O ícone de interrogação abre a legenda com cores e ícones de cada status.",
      },
      {
        title: "Veja informações do paciente",
        text: "Ao clicar no nome do paciente, o sistema abre informações adicionais. Um ícone de mais após o nome do procedimento indica que o paciente tem mais de um procedimento a realizar.",
      },
      {
        title: "Acesse o prontuário e as evoluções antigas",
        text: "Clique no ícone do documento. O sistema lista as evoluções antigas, e nessa tela também há acesso a anamnese, evolução, exame, receituário, laudo, atestados e relatórios. Clique na data para ver uma evolução antiga.",
      },
      {
        title: "Faça uma nova evolução",
        text: "Clique no ícone de mais ao lado do nome do paciente. Se existirem modelos pré-definidos de anamnese ou de evolução, selecione o modelo e escreva a evolução.",
      },
      {
        title: "Compare com o histórico lado a lado",
        text: "O ícone de relógio abre as evoluções antigas ao lado da nova. Os botões de mais e menos ajustam o zoom, e o X fecha o painel.",
      },
      {
        title: "Salve a evolução",
        text: "O sistema salva automaticamente o que foi digitado, mas você pode clicar em Salvar para confirmar.",
      },
      {
        title: "Use as outras opções da evolução",
        text: "Há opções para repetir o documento, imprimir, salvar de novo, abrir o histórico lado a lado e anexar ou visualizar anexos (vídeos, fotos e documentos do paciente). Também há a opção de tirar foto do paciente.",
      },
      {
        title: "Edite no mesmo dia",
        text: "Enquanto estiver na data em que foi lançada, a evolução pode ser editada no ícone da caneta. Depois dessa data, ela não pode mais ser editada nem excluída.",
      },
      {
        title: "Sinalize que o paciente foi atendido",
        text: "De volta à lista de pacientes, clique no ícone de check. O nome do paciente fica em amarelo com o ícone, sinalizando para a recepção que o atendimento foi finalizado.",
      },
    ],
    tips: [
      "O sistema salva automaticamente o que você digita na evolução.",
      "A edição ou exclusão da evolução só é possível na data em que ela foi lançada.",
      "Use o ícone de interrogação para consultar a legenda dos status, com as cores e ícones.",
    ],
    faq: [
      {
        question: "Como encontro um paciente que não aparece na minha agenda?",
        answer:
          "Digite o nome dele no campo Paciente. Se o paciente estiver cadastrado, o profissional tem acesso ao prontuário.",
      },
      {
        question: "Posso editar uma evolução depois de salvar?",
        answer:
          "Sim, mas só no dia em que ela foi lançada, pelo ícone da caneta. Depois dessa data não é possível editar nem excluir.",
      },
      {
        question: "Como aviso a recepção que terminei o atendimento?",
        answer:
          "Clique no ícone de check na lista de pacientes. O nome fica em amarelo com o ícone, sinalizando a finalização.",
      },
    ],
  },
  {
    id: "web-009",
    slug: "como-consultar-agenda-e-marcacoes-web",
    title: "Como consultar agenda e marcações",
    description:
      "Aprenda a navegar por datas, localizar horários e conferir detalhes de agendamento.",
    app: "web",
    category: "Agenda",
    level: "intermediário",
    duration: "8 min",
    youtubeId: "SxZB89pYBoE",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Veja como consultar a agenda de um profissional, agendar, remarcar, copiar e cancelar horários, usar os status e fazer o pré-agendamento de pacientes novos.",
    steps: [
      {
        title: "Abra a tela da agenda",
        text: "Clique no segundo ícone da parte superior (o ícone de agenda) ou siga Operacional, Agendamento, Marcação.",
      },
      {
        title: "Escolha o profissional",
        text: "Clique no campo Profissional e informe o nome de quem você quer ver. O sistema carrega a agenda dele.",
      },
      {
        title: "Navegue pelas datas",
        text: "No topo aparece a data selecionada. Embaixo estão as datas disponíveis (se a agenda do profissional estiver aberta) e a lista de pacientes agendados com os horários. Você escolhe o dia por essas datas ou pelo ícone de calendário.",
      },
      {
        title: "Agende um paciente",
        text: "Escolha o horário e clique no ícone da caneta. Informe o paciente e o procedimento e clique em Agendar. Se aparecer um aviso de agendamento futuro (o paciente já tem um procedimento agendado), clique em OK e confirme.",
      },
      {
        title: "Abra um horário extra",
        text: "Clique no ícone de mais no canto superior direito e informe o profissional, o grupo de horários, o primeiro horário, a data, o intervalo entre atendimentos e o horário do último paciente. Confirme. Esse horário extra vale só para a data informada. Para os demais dias, configure a abertura da agenda no cadastro do profissional.",
      },
      {
        title: "Remarque um paciente",
        text: "Clique nos três pontinhos do agendamento e em Selecionar. Escolha o novo horário (no mesmo dia ou em outro) e, nos três pontinhos do horário de destino, use a opção Remarcar.",
      },
      {
        title: "Copie um agendamento",
        text: "Clique nos três pontinhos, em Selecionar, vá ao horário de destino e use a opção Copiar. O sistema pergunta se você deseja alterar o serviço: confirmar permite alterar, e cancelar mantém o serviço do agendamento original.",
      },
      {
        title: "Cancele um agendamento",
        text: "Nos três pontinhos, escolha Cancelar, informe quem cancelou e o motivo e confirme.",
      },
      {
        title: "Use os status",
        text: "A comunicação entre a recepção e os profissionais usa status. Nos três pontinhos do lado esquerdo você marca, por exemplo, pronto, confirmado, atendido ou faltou. Para remover, clique novamente e use Limpar. O ícone de legenda mostra as cores e os ícones.",
      },
      {
        title: "Faça um pré-agendamento",
        text: "Para um paciente de primeira vez que ainda não está cadastrado, clique no ícone da caneta no horário e informe o nome. O sistema entende que é um paciente novo, e você preenche data de nascimento, celular, e-mail (opcional), convênio e procedimento e clica em Agendar.",
      },
      {
        title: "Conclua o cadastro do paciente pré-agendado",
        text: "Clique no nome do paciente, confirme que deseja concluir o cadastro e preencha as demais informações. Os campos obrigatórios têm um asterisco ao lado. Dois cliques no nome levam ao cadastro do paciente, e o ícone de agenda volta para a agenda.",
      },
    ],
    tips: [
      "O horário extra vale apenas para a data em que foi aberto. Para os outros dias, configure a abertura da agenda no cadastro do profissional.",
      "Preencha todos os campos marcados com asterisco antes de concluir o cadastro do paciente.",
      "Use o ícone de legenda para lembrar o significado das cores e dos ícones dos status.",
    ],
    faq: [
      {
        question: "Posso agendar um paciente que ainda não está cadastrado?",
        answer:
          "Sim. Faça o pré-agendamento informando o nome e os dados básicos. Depois, clique no nome do paciente para concluir o cadastro.",
      },
      {
        question: "Como remarco um paciente para outro dia?",
        answer:
          "Nos três pontinhos do agendamento, use Selecionar. Depois escolha a nova data e o horário de destino e use Remarcar nos três pontinhos desse horário.",
      },
      {
        question: "O que acontece ao copiar um agendamento?",
        answer:
          "O paciente fica agendado nas duas datas. O sistema pergunta se você quer alterar o serviço: confirmar altera, e cancelar mantém o mesmo serviço.",
      },
    ],
  },
  {
    id: "web-010",
    slug: "abertura-de-agenda-dos-profissionais-web",
    title: "Abertura de Agenda dos profissionais",
    description:
      "Acompanhe a rotina básica de configuração e abertura da agenda dos profissionais para receber agendamentos no sistema Clinic All Web.",
    app: "web",
    category: "Operacional",
    level: "intermediário",
    duration: "4 min",
    youtubeId: "9i2FNtgEqgs",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Para abrir a agenda de um profissional, você cadastra os dias e horários de atendimento e depois executa uma operação de abertura para o período desejado.",
    steps: [
      {
        title: "Abra o cadastro do profissional",
        text: "Clique no ícone Profissional, na parte superior, ou vá em Cadastro, Organizacional, Profissional.",
      },
      {
        title: "Localize o profissional",
        text: "Digite o nome no campo de pesquisa e clique no ícone da lupa. Logo abaixo, abra a aba Horário.",
      },
      {
        title: "Cadastre os dias e horários",
        text: "Clique em Novo e informe o dia da semana, o grupo de horários, o início (horário do primeiro paciente), o intervalo entre um atendimento e outro e o horário do último paciente. Informe a unidade e clique em Salvar.",
      },
      {
        title: "Copie para outros dias",
        text: "Use o botão copiar, informe o dia da semana desejado e salve novamente. No exemplo do vídeo, segundas e terças ficam cadastradas.",
      },
      {
        title: "Abra a operação de abertura",
        text: "Clique no ícone Operação, na barra superior (um ícone de chave), e depois em Novo. Em tipo de operação, escolha abertura e informe o profissional, a empresa, a data de início e a data final. Clique em Salvar.",
      },
      {
        title: "Confira na agenda",
        text: "O sistema processa e abre os horários. Volte ao ícone da agenda e selecione o profissional para ver os horários disponíveis para agendamento.",
      },
      {
        title: "Cancele ou bloqueie quando precisar",
        text: "Em Operação, clique em Novo e, no tipo, escolha cancelamento, bloqueio de horário ou desbloqueio, conforme a necessidade. Informe profissional, empresa e as datas inicial e final e salve. No exemplo, após o cancelamento, o nome do profissional deixa de aparecer na listagem da agenda.",
      },
    ],
    tips: [
      "Cadastrar os dias e horários não basta: depois, é preciso fazer a operação de abertura para o período.",
      "A mesma tela de Operação serve para abertura, cancelamento, bloqueio de horário e desbloqueio.",
      "Use a opção de copiar para repetir os horários em outros dias da semana.",
    ],
    faq: [
      {
        question:
          "Cadastrei os horários, mas a agenda não aparece. O que falta?",
        answer:
          "Falta executar a operação de abertura. Clique no ícone Operação, escolha Novo, tipo abertura, informe profissional, empresa e o período e salve.",
      },
      {
        question: "Como bloqueio ou cancelo horários de um profissional?",
        answer:
          "Em Operação, clique em Novo e escolha o tipo cancelamento, bloqueio de horário ou desbloqueio. Informe profissional, empresa e as datas.",
      },
      {
        question: "Posso repetir os mesmos horários em outro dia?",
        answer:
          "Sim. Use o botão copiar na aba Horário, informe o dia da semana desejado e salve.",
      },
    ],
  },
  {
    id: "web-011",
    slug: "como-cadastrar-procedimento-web",
    title: "Como cadastrar procedimento",
    description: "Veja o fluxo básico para cadastrar um procedimento.",
    app: "web",
    category: "Operacional",
    level: "intermediário",
    duration: "2 min",
    youtubeId: "C0Hi05ic5Yc",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Veja como cadastrar um procedimento no Clinic All Web e depois vinculá-lo a um convênio e aos profissionais que o realizam.",
    steps: [
      {
        title: "Abra o cadastro de procedimentos",
        text: "Clique no atalho Procedimento ou vá em Cadastro, Credenciamento, Procedimento. Depois, clique em Novo, no canto superior direito.",
      },
      {
        title: "Preencha os dados do procedimento",
        text: "Informe o nome, o grupo, o indexador e o valor do serviço. Informe também o código, que pode ser um código de uso interno da clínica.",
      },
      {
        title: "Salve o cadastro",
        text: "Clique em Salvar, no canto superior direito.",
      },
      {
        title: "Vincule ao convênio",
        text: "Vá em Credenciamento, clique no ícone de mais e escolha o convênio e o contrato. Se o contrato não vier automaticamente, vincule o contrato do convênio. Salve.",
      },
      {
        title: "Vincule aos profissionais",
        text: "Abra Profissionais e clique em Adicionar. Escolha os profissionais que farão o serviço e o valor de participação de cada um, em percentual ou em reais. Se for apenas um profissional, deixe o campo apenas nele.",
      },
      {
        title: "Finalize",
        text: "Clique em Finalizar. O serviço fica cadastrado, vinculado ao convênio e aos profissionais.",
      },
    ],
    tips: [
      "O código do procedimento pode ser interno, de controle da própria clínica.",
      "A participação do profissional pode ser em percentual ou em reais.",
    ],
    faq: [
      {
        question: "O código do procedimento precisa ser oficial?",
        answer:
          "Não necessariamente. O vídeo explica que pode ser um código de uso interno e controle da clínica.",
      },
      {
        question: "Como defino quanto o profissional recebe pelo procedimento?",
        answer:
          "Na aba Profissionais, clique em Adicionar, escolha o profissional e informe a participação em percentual ou em reais.",
      },
      {
        question: "E se o contrato do convênio não vier preenchido?",
        answer: "Vincule manualmente o contrato do convênio e salve.",
      },
    ],
  },
  {
    id: "web-012",
    slug: "como-alterar-valor-procedimento-web",
    title: "Como alterar valor de um procedimento",
    description:
      "Nesse vídeo, aprenda como executar a rotina básica de edição do valor de um serviço no sistema.",
    app: "web",
    category: "Operacional",
    level: "intermediário",
    duration: "2 min",
    youtubeId: "zPTyWIhLRac",
    hasImageTutorial: false,
    summary:
      "O valor de um procedimento é alterado no contrato do convênio. O vídeo mostra o caminho e um aviso importante sobre atendimentos já lançados.",
    steps: [
      {
        title: "Abra o cadastro de convênios",
        text: "Clique em Convênio ou vá em Cadastro, Credenciamento, Convênio.",
      },
      {
        title: "Localize o convênio",
        text: "Digite o nome do convênio em que quer alterar os valores e clique no ícone da lupa.",
      },
      {
        title: "Abra o contrato ativo",
        text: "Vá em Contrato. O sistema lista os contratos do convênio. Escolha o contrato ativo, clicando na lupa.",
      },
      {
        title: "Encontre o procedimento",
        text: "Role um pouco para baixo até os serviços e valores. Em Buscar registro, procure o serviço pelo nome ou liste na própria tela.",
      },
      {
        title: "Altere o valor e salve",
        text: "Escolha o procedimento clicando na lupa, informe o valor atualizado e clique em Salvar, logo acima.",
      },
      {
        title: "Volte para a lista",
        text: "Clique em Lista para retornar à lista de procedimentos, já com o valor alterado.",
      },
    ],
    tips: [
      "Os valores nos atendimentos só mudam a partir do momento da alteração.",
      "Atendimentos já lançados continuam com os valores anteriores.",
    ],
    faq: [
      {
        question: "O novo valor muda os atendimentos que já foram lançados?",
        answer:
          "Não. Os atendimentos já lançados permanecem com os valores anteriores, e o novo valor vale a partir do momento da alteração.",
      },
      {
        question: "Onde altero o valor de um procedimento?",
        answer:
          "No contrato ativo do convênio, na área de serviços e valores, escolhendo o procedimento, informando o novo valor e salvando.",
      },
    ],
  },
  {
    id: "web-013",
    slug: "como-cadastrar-e-configurar-participacao-honorarios-dos-profissionais-web",
    title: "Honorários (participação/repasse) dos profissionais",
    description:
      "Entenda a rotina básica de inclusão e configuração da participação financeira dos profissionais nos atendimentos realizados pela clínica.",
    app: "web",
    category: "Operacional",
    level: "intermediário",
    duration: "4 min",
    youtubeId: "MhOwoQ0XQyo",
    hasImageTutorial: false,
    summary:
      "A participação do profissional pode ser um valor padrão ou configurada procedimento por procedimento, com filtros por convênio, especialidade, unidade e dia da semana.",
    steps: [
      {
        title: "Abra o cadastro do profissional",
        text: "Clique em Profissional ou vá em Cadastro, Organizacional, Profissional. Digite o nome no campo de pesquisa e clique na lupa.",
      },
      {
        title: "Abra a aba Participação",
        text: "Aqui você pode informar um valor de participação padrão, que vale independentemente do serviço ou do procedimento, em porcentagem ou em reais.",
      },
      {
        title: "Configure por procedimento",
        text: "Ao lado, abra Procedimento e clique no ícone de mais. Informe o procedimento e o valor em porcentagem, ou clique na unidade monetária para alternar para reais.",
      },
      {
        title: "Use os filtros quando for preciso",
        text: "Você pode definir que o valor se aplique apenas a determinado convênio, especialidade, unidade ou dia da semana. Se o valor é padrão, não precisa preencher os filtros.",
      },
      {
        title: "Salve",
        text: "Clique no ícone de nuvem para salvar. A participação do profissional fica registrada.",
      },
      {
        title: "Inclua outros procedimentos",
        text: "Clique novamente em mais, informe o outro procedimento e o valor ou percentual que o profissional receberá.",
      },
      {
        title: "Altere quando precisar",
        text: "Volte à mesma tela, clique na lupa, altere o valor ou o percentual e salve.",
      },
    ],
    tips: [
      "As alterações valem do momento em que são feitas em diante.",
      "Procedimentos já lançados com o valor ou percentual antigo mantêm o que estava informado.",
      "Se o valor é padrão para todos os casos, deixe os filtros em branco.",
    ],
    faq: [
      {
        question:
          "Posso ter uma participação padrão para todos os procedimentos?",
        answer:
          "Sim. Na aba Participação, informe o valor padrão em porcentagem ou em reais, que vale independentemente do serviço.",
      },
      {
        question: "Como aplico um valor só para um convênio?",
        answer:
          "Use os filtros ao configurar o procedimento. Dá para filtrar por convênio, especialidade, unidade e dia da semana.",
      },
      {
        question: "A mudança afeta atendimentos antigos?",
        answer:
          "Não. Os novos valores e percentuais são aplicados do momento da alteração em diante.",
      },
    ],
  },
  {
    id: "web-014",
    slug: "como-realizar-o-faturamento-de-convenios-web",
    title: "Como realizar o faturamento dos convênios (Geração XML)",
    description:
      "Veja a rotina básica de faturamento e geração de arquivo XML no sistema Clinic All.",
    app: "web",
    category: "Faturamento",
    level: "intermediário",
    duration: "8 min",
    youtubeId: "ai_i-lx0tbo",
    hasImageTutorial: false,
    summary:
      "O faturamento reúne as guias de um convênio em uma fatura e depois gera o arquivo XML para envio. O vídeo mostra filtros, fechamento das guias, correção de campos e como desfazer.",
    steps: [
      {
        title: "Abra as faturas e crie uma nova",
        text: "Vá em Operacional, Faturamento, Fatura. O sistema lista as faturas antigas, fechadas ou abertas. Clique em Novo.",
      },
      {
        title: "Escolha unidade, centro de custo e convênio",
        text: "Selecione a unidade, o centro de custo e o convênio que será faturado.",
      },
      {
        title: "Ajuste os filtros",
        text: "O sistema já vem com o filtro de data limite e com as guias de status normal. Em Adicionar filtro, você pode filtrar por profissional, grupo de serviço, status da guia, tipo de guia (consulta, SADT, honorários) e período. Sem filtro de tipo de guia, o faturamento fecha consultas e SADT no mesmo lote.",
      },
      {
        title: "Consulte as guias abertas",
        text: "O padrão é filtrar o status Aberta e clicar em Consultar. Também é possível ver todas, bloqueadas ou pendentes.",
      },
      {
        title: "Selecione e trate as guias",
        text: "Marque as guias nas caixinhas, ou todas no checkbox do alto. O ícone do canto direito leva à guia lançada, e você também pode bloquear a guia ou marcá-la como pendente, informando o motivo.",
      },
      {
        title: "Feche as guias selecionadas",
        text: "Clique em Fechar guias selecionadas e confirme. As guias passam para o status Fechada.",
      },
      {
        title: "Confira e salve a fatura",
        text: "Volte o filtro para Normal e clique em Consultar de novo para conferir as guias que serão faturadas. Depois, clique em Salvar para fechar o faturamento.",
      },
      {
        title: "Remova uma guia da fatura, se precisar",
        text: "Dentro do faturamento, a lupa permite verificar a guia e o ícone de cifrão cortado remove a guia da fatura. A guia removida não pode voltar para o mesmo lote. Para incluí-la, é preciso abrir o lote todo de novo e refazer o faturamento.",
      },
      {
        title: "Prepare a geração do arquivo",
        text: "Clique em Gerar arquivo. O sistema traz o convênio e o lote. Escolha se vai faturar consulta ou SADT, confira a versão do arquivo (vem a do cadastro do convênio, mas você pode escolher outra) e clique na lupa para listar as guias.",
      },
      {
        title: "Complete os campos que faltam",
        text: "Faça uma verificação rápida: o sistema mostra o que está faltando, como matrícula, data e senha de autorização e número da guia da operadora. Você pode preencher ali, usando o ícone de chave para a senha de liberação, ou clicar na lupa para abrir a página do paciente, preencher e salvar.",
      },
      {
        title: "Gere e baixe o arquivo",
        text: "Com tudo preenchido, clique em Gerar arquivo. Abra a aba Últimos arquivos gerados do lote e baixe em XML ou em arquivo ZIP.",
      },
      {
        title: "Desfaça o faturamento, se necessário",
        text: "Em Operacional, Faturamento, Fatura, clique na lupa da fatura. Dá para remover uma guia ou excluir todo o faturamento, em Liberar a fatura, informando o motivo e confirmando. As guias voltam para serem faturadas novamente.",
      },
    ],
    tips: [
      "Antes de salvar a fatura, volte o filtro para Normal e consulte de novo para conferir as guias.",
      "Uma guia removida da fatura não volta para o mesmo lote. Para incluí-la, é preciso refazer o lote inteiro.",
      "Sem o filtro de tipo de guia, consultas e SADT entram juntas no mesmo lote.",
      "Confira matrícula, data e senha de autorização e número da guia da operadora antes de gerar o arquivo.",
    ],
    faq: [
      {
        question: "Onde baixo o arquivo XML depois de gerar?",
        answer:
          "Na aba Últimos arquivos gerados do lote, onde dá para baixar em XML ou em arquivo ZIP.",
      },
      {
        question: "Faltam dados em algumas guias. Preciso reabrir a fatura?",
        answer:
          "Não necessariamente. Na verificação da geração do arquivo, você pode preencher campos direto ali, ou abrir a página do paciente pela lupa, preencher e salvar.",
      },
      {
        question: "Como desfaço um faturamento?",
        answer:
          "Abra a fatura pela lupa e use Liberar a fatura, informando o motivo. As guias voltam para serem faturadas novamente.",
      },
    ],
  },
  {
    id: "web-015",
    slug: "como-gerar-e-consultar-relatorios-de-atendimento-web",
    title: "Como gerar e consultar relatórios de atendimento",
    description:
      "Nesse vídeo, veja como realizar a rotina básica de consulta e geração do relatório de atendimentos realizados em um determinado período.",
    app: "web",
    category: "Relatórios",
    level: "básico",
    duration: "4 min",
    youtubeId: "fk3oioWArZo",
    hasImageTutorial: false,
    summary:
      "O vídeo mostra como gerar o relatório de atendimentos e os relatórios de fechamento de caixa, com filtros e parâmetros.",
    steps: [
      {
        title: "Abra os relatórios",
        text: "Vá em Aplicação, Relatórios. Os mais comuns são os de atendimento.",
      },
      {
        title: "Escolha o relatório de atendimento",
        text: "Clique em Atendimento e abra Atendimento por profissional e convênio. O sistema oferece duas opções para imprimir: analítico e sintético.",
      },
      {
        title: "Aplique os filtros",
        text: "Se quiser, filtre por profissional, especialidade ou convênio, e informe o período dos atendimentos que deseja ver.",
      },
      {
        title: "Ajuste os parâmetros",
        text: "Os parâmetros servem apenas para ocultar ou exibir colunas do relatório. Ative ou desative conforme precisar.",
      },
      {
        title: "Gere e imprima",
        text: "Clique em Gerar relatório. Sem filtros, o sistema traz todos os atendimentos lançados no período, entre data inicial e final. Para imprimir, clique no ícone da impressora no alto, ou clique fora para fechar.",
      },
      {
        title: "Abra o fechamento de caixa",
        text: "O caminho é o mesmo: Aplicação, Relatórios, e então Fechamento de caixa. Os dois mais usados são o de fechamento de caixa por tipo de pagamento e o de fechamento de atendimento.",
      },
      {
        title: "Entenda os dois relatórios de caixa",
        text: "O de tipo de pagamento separa os pacientes pela forma de pagamento. O de fechamento de atendimento lista os pacientes atendidos e pagantes no dia e mostra um totalizador por forma de pagamento. Os dois têm filtros e parâmetros.",
      },
    ],
    tips: [
      "Os relatórios de fechamento de caixa mostram apenas os convênios que exigem pagamento do paciente.",
      "Para ver todos os atendimentos do dia, o melhor é usar os relatórios de atendimento.",
      "Sem nenhum filtro, o relatório traz tudo o que foi lançado no período.",
    ],
    faq: [
      {
        question: "Qual a diferença entre o relatório analítico e o sintético?",
        answer:
          "O sistema oferece as duas opções para imprimir o relatório de atendimento. O vídeo apenas mostra que você pode escolher entre elas.",
      },
      {
        question: "Para que servem os parâmetros do relatório?",
        answer:
          "Servem apenas para ocultar ou exibir colunas dentro do relatório.",
      },
      {
        question: "Qual relatório uso para ver todos os atendimentos do dia?",
        answer:
          "Os relatórios de atendimento. Os de fechamento de caixa trazem só os convênios que exigem pagamento do paciente.",
      },
    ],
  },
  {
    id: "desktop-001",
    slug: "como-cadastrar-paciente",
    title: "Como cadastrar paciente",
    description: "Saiba como realizar o cadastro de um paciente no sistema",
    app: "desktop",
    category: "Recepção",
    level: "básico",
    duration: "1 min",
    youtubeId: "xYxuKBMdhoQ",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "No Clinic All Desktop, o cadastro de paciente é aberto por um atalho de teclado ou pelo ícone do módulo do paciente.",
    steps: [
      {
        title: "Abra o módulo do paciente",
        text: "Pressione a tecla F5 do teclado ou clique no ícone do módulo do paciente na bandeja do sistema.",
      },
      {
        title: "Clique no ícone do olho",
        text: "Em seguida, clique no ícone do olho.",
      },
      {
        title: "Informe o nome do paciente",
        text: "Digite o nome do paciente que deseja cadastrar no campo de texto.",
      },
      {
        title: "Clique em Novo",
        text: "Depois de informar o nome, clique em Novo.",
      },
      {
        title: "Preencha os dados e grave",
        text: "Preencha os dados do paciente e clique no botão para gravar a inclusão. O cadastro fica finalizado.",
      },
    ],
    tips: ["O atalho para abrir o módulo do paciente é a tecla F5."],
    faq: [
      {
        question:
          "Existe um atalho de teclado para abrir o cadastro de pacientes?",
        answer:
          "Sim. No Clinic All Desktop, pressione a tecla F5 ou clique no ícone do módulo do paciente na bandeja do sistema.",
      },
    ],
  },
  {
    id: "desktop-002",
    slug: "como-cadastrar-usuario",
    title: "Como cadastrar usuário",
    description: "Saiba como realizar o cadastro de um usuário no sistema",
    app: "desktop",
    category: "Operacional",
    level: "básico",
    duration: "5 min",
    youtubeId: "BHPFp3CE4oU",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "Veja como criar um usuário no Clinic All Desktop, preencher os campos principais e liberar as permissões com a senha master.",
    steps: [
      {
        title: "Abra Segurança e Usuário",
        text: "Na tela principal, no lado esquerdo, na parte inferior, clique em Segurança e depois em Usuário. Abre a tela de cadastro de usuário.",
      },
      {
        title: "Clique no sinal de mais",
        text: "Para cadastrar um usuário novo, clique no sinal de mais. Os campos são habilitados para preenchimento.",
      },
      {
        title: "Informe acesso, nome e grupo",
        text: "Preencha o acesso (o login do funcionário), o nome completo e o grupo, que é o grupo de atuação, ou o local onde ele trabalha (por exemplo, recepção).",
      },
      {
        title: "Marque o campo médico só quando for médico",
        text: "Esse campo só é selecionado se o usuário for um médico que terá acesso ao sistema.",
      },
      {
        title: "Defina a senha",
        text: "Informe a senha de acesso. O usuário padrão para mensagens é opcional.",
      },
      {
        title: "Preencha os demais campos",
        text: "O centro de resultado é importante. A data de nascimento é opcional, e o local de estoque vale para quem trabalha na área de estoque. Informe o tipo de atendimento padrão e o setor, se quiser padronizar.",
      },
      {
        title: "Veja os campos não obrigatórios",
        text: "Desconto máximo, comissão de agendamento, comissão de atendimento e e-mail não são obrigatórios, mas podem ser preenchidos.",
      },
      {
        title: "Grave o cadastro",
        text: "Clique em gravar. O usuário já foi cadastrado e já aparece na tela de login.",
      },
      {
        title: "Libere as permissões",
        text: "Abaixo ficam os parâmetros de permissões, em que o administrador define o que o usuário pode ou não pode fazer. É necessário ter a senha master, que geralmente fica com o administrador da clínica. Clique no triângulo, informe a senha master, clique na chave, marque as permissões (por exemplo, bloquear e desbloquear agenda, deixar atendimento pendente, alterar data do atendimento) e clique em Pronto.",
      },
      {
        title: "Teste o novo acesso",
        text: "Saia do sistema, volte à tela de login e entre com o novo usuário e a senha para conferir se ele está pronto para trabalhar.",
      },
    ],
    tips: [
      "As permissões só podem ser alteradas com a senha master, que costuma ficar com o administrador da clínica.",
      "Marque o campo médico apenas quando o usuário for médico e precisar de acesso ao sistema.",
      "O centro de resultado é um dos campos que o vídeo destaca como importantes.",
    ],
    faq: [
      {
        question: "O que é a senha master?",
        answer:
          "É a senha necessária para alterar as permissões do usuário. Geralmente fica com o administrador da clínica.",
      },
      {
        question: "Quando devo marcar o campo médico?",
        answer:
          "Somente quando o usuário for um médico que terá acesso ao sistema.",
      },
      {
        question: "O usuário já pode entrar logo depois de gravar?",
        answer:
          "Ele passa a aparecer na tela de login ao gravar. As permissões ficam na parte de baixo da tela e são definidas pelo administrador.",
      },
    ],
  },
  {
    id: "desktop-003",
    slug: "como-cadastrar-procedimento",
    title: "Como cadastrar procedimento",
    description: "Saiba como realizar o cadastro de um procedimento no sistema",
    app: "desktop",
    category: "Operacional",
    level: "intermediário",
    duration: "1 min",
    youtubeId: "5lJPa3uFTb8",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
    summary:
      "No Clinic All Desktop, o procedimento é cadastrado na aba Serviço e depois vinculado a um convênio na aba Credenciamento.",
    steps: [
      {
        title: "Abra Operacional",
        text: "Na tela principal do sistema, clique com o botão direito do mouse e vá em Operacional.",
      },
      {
        title: "Vá à aba Serviço",
        text: "Clique no ícone do olho e informe o nome do serviço que deseja cadastrar.",
      },
      {
        title: "Clique em Novo e preencha",
        text: "No campo código, informe o código do serviço, que pode ser uma codificação de uso interno, para controle da clínica. Informe também o grupo, o indexador e a quantidade de indexador, que será o valor do serviço.",
      },
      {
        title: "Salve",
        text: "Clique no V para salvar.",
      },
      {
        title: "Vincule ao convênio",
        text: "Depois do serviço criado, vá à aba Credenciamento e clique no ícone para vincular o serviço ao convênio. Escolha os convênios em que quer credenciar o serviço (no exemplo, apenas o particular) e clique em Credenciar.",
      },
    ],
    tips: [
      "O código do serviço pode ser de uso interno, para controle da clínica.",
      "O valor do serviço é definido pela quantidade de indexador.",
    ],
    faq: [
      {
        question: "O código do procedimento precisa ser oficial?",
        answer:
          "Não. O vídeo explica que pode ser uma codificação de uso interno, para controle da clínica.",
      },
      {
        question: "Como o procedimento passa a valer para um convênio?",
        answer:
          "Na aba Credenciamento, vincule o serviço ao convênio desejado e clique em Credenciar. No exemplo do vídeo, o serviço é credenciado apenas no particular.",
      },
    ],
  },
];

export function getTutorialsByApp(app: ClinicAllApp) {
  return tutorials.filter((tutorial) => tutorial.app === app);
}

export function getTutorialBySlug(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug);
}

export function getRelatedTutorials(tutorial: Tutorial, limit = 3) {
  return tutorials
    .filter(
      (item) =>
        item.id !== tutorial.id &&
        (item.app === tutorial.app || item.category === tutorial.category),
    )
    .slice(0, limit);
}

export type TutorialGroup = {
  category: TutorialCategory;
  tutorials: Tutorial[];
};

export function groupTutorialsByCategory(list: Tutorial[]): TutorialGroup[] {
  return categoryOrder
    .map((category) => ({
      category,
      tutorials: list.filter((tutorial) => tutorial.category === category),
    }))
    .filter((group) => group.tutorials.length > 0);
}

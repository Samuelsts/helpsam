export type ClinicAllApp = "web" | "desktop";

export type TutorialLevel = "básico" | "intermediário" | "avançado";

export const categoryOrder = [
  "Recepção",
  "Operacional",
  "Agenda",
  "Modulo Médico",
  "Financeiro",
  "Faturamento",
  "Relatórios",
] as const;

export type TutorialCategory = (typeof categoryOrder)[number];

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
  },
  {
    id: "web-004",
    slug: "modulo-financeiro-web",
    title: "Modulo Financeiro",
    description:
      "Conheça a rotina básica de uso do módulo financeiro do Clinic All, explorando as principais funcionalidades para controle e acompanhamento das movimentações financeiras da clínica.",
    app: "web",
    category: "Financeiro",
    level: "avançado",
    duration: "17 min",
    youtubeId: "dz_4g9ghj2g",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
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
  },
  {
    id: "web-008",
    slug: "evolucoes-e-agenda-profissional-web",
    title: "Evoluções e agenda profissional",
    description:
      "Neste vídeo, acompanhe a rotina básica de registro de evoluções e gerenciamento da agenda profissional no Clinic All Web.",
    app: "web",
    category: "Modulo Médico",
    level: "básico",
    duration: "7 min",
    youtubeId: "YbaEoqSa8UE",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
  },
  {
    id: "web-009",
    slug: "como-consultar-agenda-e-marcacoes-web",
    title: "Como consultar agenda e marcações ",
    description:
      "Aprenda a navegar por datas, localizar horários e conferir detalhes de agendamento.",
    app: "web",
    category: "Agenda",
    level: "intermediário",
    duration: "8 min",
    youtubeId: "SxZB89pYBoE",
    hasImageTutorial: true,
    imageTutorialUrl: "#imagens",
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
    hasImageTutorial: true,
    imageTutorialUrl: "#imagens",
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
  },
  {
    id: "web-015",
    slug: "como-gerar-e-consultar-relatorios-de-atendimento-web",
    title: "Como gerar e consultar relatórios de atendimento",
    description:
      "Nesse vídeo, veja como realizar a rotina básica de consulta e geração do relatório de atendimentos realizados em um determinado período..",
    app: "web",
    category: "Relatórios",
    level: "básico",
    duration: "4 min",
    youtubeId: "fk3oioWArZo",
    hasImageTutorial: false,
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
  },
  {
    id: "desktop-002",
    slug: "como-cadastrar-usuario",
    title: "Como cadastrar usúario",
    description: "Saiba como realizar o cadastro de um usúario no sistema",
    app: "desktop",
    category: "Operacional",
    level: "básico",
    duration: "5 min",
    youtubeId: "BHPFp3CE4oU",
    hasImageTutorial: false,
    imageTutorialUrl: "#imagens",
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

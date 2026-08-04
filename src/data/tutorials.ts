export type ClinicAllApp = 'web' | 'desktop';

export type TutorialLevel = 'básico' | 'intermediário' | 'avançado';

export type Tutorial = {
  id: string;
  slug: string;
  title: string;
  description: string;
  app: ClinicAllApp;
  category: string;
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
    name: 'Clinic All Web',
    shortName: 'Web',
    href: '/web',
    description:
      'Tutoriais práticos para quem usa a versão no navegador, com foco em rotinas simples e consulta rápida.',
  },
  desktop: {
    name: 'Clinic All Desktop',
    shortName: 'Desktop',
    href: '/desktop',
    description:
      'Guias objetivos para a versão instalada, pensados para apoiar tarefas comuns do dia a dia.',
  },
};

export const tutorials: Tutorial[] = [
  {
    id: 'web-001',
    slug: 'como-acessar-o-sistema-web',
    title: 'Como acessar o sistema',
    description:
      'Veja o fluxo básico para entrar no ambiente web e localizar a tela inicial.',
    app: 'web',
    category: 'Acesso',
    level: 'básico',
    duration: '2 min',
    youtubeId: '7yBtwbKHQgU',
    hasImageTutorial: false,
    imageTutorialUrl: '#imagens',
  },
  {
    id: 'web-002',
    slug: 'como-cadastrar-procedimento',
    title: 'Como cadastrar procedimento',
    description:
      'Veja o fluxo básico para cadastrar um procedimento.',
    app: 'web',
    category: 'Cadastro',
    level: 'intermediário',
    duration: '2 min',
    youtubeId: 'C0Hi05ic5Yc',
    hasImageTutorial: false,
    imageTutorialUrl: '#imagens',
  },
  // {
  //   id: 'web-002',
  //   slug: 'como-cadastrar-um-paciente-web',
  //   title: 'Como cadastrar um paciente',
  //   description:
  //     'Passo a passo genérico para criar um cadastro e revisar informações essenciais.',
  //   app: 'web',
  //   category: 'Cadastros',
  //   level: 'básico',
  //   duration: '7 min',
  //   youtubeId: 'ysz5S6PUM-U',
  //   hasImageTutorial: false,
  // },
  // {
  //   id: 'web-003',
  //   slug: 'como-consultar-agenda-web',
  //   title: 'Como consultar agenda',
  //   description:
  //     'Aprenda a navegar por datas, localizar horários e conferir detalhes de agendamento.',
  //   app: 'web',
  //   category: 'Agenda',
  //   level: 'intermediário',
  //   duration: '6 min',
  //   youtubeId: 'jNQXAC9IVRw',
  //   hasImageTutorial: true,
  //   imageTutorialUrl: '#imagens',
  // },
  // {
  //   id: 'web-004',
  //   slug: 'como-alterar-dados-de-cadastro-web',
  //   title: 'Como alterar dados de um cadastro',
  //   description:
  //     'Oriente-se sobre a revisão de dados cadastrais e conferência antes de salvar.',
  //   app: 'web',
  //   category: 'Cadastros',
  //   level: 'intermediário',
  //   duration: '5 min',
  //   youtubeId: 'dQw4w9WgXcQ',
  //   hasImageTutorial: false,
  // },
  {
    id: 'desktop-001',
    slug: 'como-cadastrar-paciente',
    title: 'Como cadastrar paciente',
    description: 'Saiba como realizar o cadastro de um paciente no sistema',
    app: 'desktop',
    category: 'Cadastro',
    level: 'básico',
    duration: '1 min',
    youtubeId: 'xYxuKBMdhoQ',
    hasImageTutorial: false,
    imageTutorialUrl: '#imagens',
  },
  {
    id: 'desktop-002',
    slug: 'como-cadastrar-usuario',
    title: 'Como cadastrar usúario',
    description: 'Saiba como realizar o cadastro de um usúario no sistema',
    app: 'desktop',
    category: 'Cadastro',
    level: 'básico',
    duration: '5 min',
    youtubeId: 'BHPFp3CE4oU',
    hasImageTutorial: false,
    imageTutorialUrl: '#imagens',
  },
  {
    id: 'desktop-003',
    slug: 'como-cadastrar-procedimento',
    title: 'Como cadastrar procedimento',
    description: 'Saiba como realizar o cadastro de um procedimento no sistema',
    app: 'desktop',
    category: 'Cadastro',
    level: 'intermediário',
    duration: '1 min',
    youtubeId: '5lJPa3uFTb8',
    hasImageTutorial: false,
    imageTutorialUrl: '#imagens',
  },
  // {
  //   id: 'desktop-002',
  //   slug: 'como-localizar-um-atendimento-desktop',
  //   title: 'Como localizar um atendimento',
  //   description:
  //     'Use filtros e informações de apoio para encontrar atendimentos já registrados.',
  //   app: 'desktop',
  //   category: 'Atendimento',
  //   level: 'intermediário',
  //   duration: '8 min',
  //   youtubeId: 'ysz5S6PUM-U',
  //   hasImageTutorial: false,
  // },
  // {
  //   id: 'desktop-003',
  //   slug: 'como-emitir-um-relatorio-desktop',
  //   title: 'Como emitir um relatório',
  //   description:
  //     'Entenda a escolha de filtros, geração e conferência de relatórios operacionais.',
  //   app: 'desktop',
  //   category: 'Relatórios',
  //   level: 'avançado',
  //   duration: '10 min',
  //   youtubeId: 'jNQXAC9IVRw',
  //   hasImageTutorial: true,
  //   imageTutorialUrl: '#imagens',
  // },
  // {
  //   id: 'desktop-004',
  //   slug: 'como-alterar-dados-de-cadastro-desktop',
  //   title: 'Como alterar dados de um cadastro',
  //   description:
  //     'Veja uma rotina genérica para atualizar dados e revisar alterações no desktop.',
  //   app: 'desktop',
  //   category: 'Cadastros',
  //   level: 'intermediário',
  //   duration: '6 min',
  //   youtubeId: 'dQw4w9WgXcQ',
  //   hasImageTutorial: false,
  // },
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

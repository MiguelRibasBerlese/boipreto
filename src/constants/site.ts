/**
 * Fonte única de verdade para todo o conteúdo textual e assets de imagem do site.
 * Para trocar textos ou imagens, edite apenas este arquivo — as páginas consomem
 * as constantes exportadas aqui e refletem as mudanças automaticamente.
 */

import type { NavItem, Service, StateInfo, FooterLink, SelectOption, ImageAsset } from '../types';

// ─── Marca ────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'Boi Preto',
  tagline: 'Consultoria Agropecuária de Elite',
  fullName: 'Boi Preto Consultoria Agropecuária',
  copyright: '© 2024 Boi Preto Consultoria Agropecuária.',
  email: 'contato@boipreto.com.br',
  address: 'Rua das Fazendas, Araguaína-TO',
} as const;

// ─── Navegação ────────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { name: 'Início', path: '/' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Cases', path: '/cases' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Contato', path: '/contato' },
];

export const NAV_CTA = 'Falar com Consultor';

// ─── Rodapé ───────────────────────────────────────────────────────────────────

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Privacidade', path: '#' },
  { label: 'Termos', path: '#' },
  { label: 'LinkedIn', path: '#' },
  { label: 'Instagram', path: '#' },
];

// ─── Imagens ──────────────────────────────────────────────────────────────────

export const IMAGES = {
  heroAngus: {
    src: '/Boi-Nelore.jpg',
    alt: 'Boi nelore em pastagem ao amanhecer',
  },
  farmEquipment: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs8sTl5oJLl_W1pkqYMINWPPA-CC-BnddZNio2IjwEoqN3NNnTSFr3UY_JvkSqgUxVd3MwQAdPBtW7ZDaVTS0o7KQiAOjpisBnjxeJpn5x91WNyhOZwMcYsy7brRLa2ronEanA5KmpL3gfA1WKxR7ApX7iTKiure_D5bXBAGqeh5Zp7TeIHZkKHa8UJTH3gI6IIdmTQIxIGbSGc5mcAozIQGFQ4tBOMwvJD7FuuWoocjrdpWwg6QLLMqzfSDmdjwY5HnbXZ2W3yIHW',
    alt: 'High-tech farm equipment',
  },
  neloreHome: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDymf36lNDp5qo45zddKqGvpv4wPIWzzvQzy9RAE591kAfounzvWTENJJYtUB9AOvpIryzsXdBeWS4eOpSVMTWI8vEs2lOxtjzRWiH67C_a_jOI-KgzAoa-NfIattQDrqa4I986dIGKHKDFEQkuuboP7NS2Fx49zroqVQ2gD6KQPHmDIs6QiYs4IFrXmN818RnZxYkA-pECfbfbybdZi8HTB8VNx7OAr2V57g1g9Hzf6pkKJtDqdQolCh4Px--8f2Aw9CLh06OCHVpl',
    alt: 'Nelore bull',
  },
  ctaBackground: {
    src: '/Rebanho-Nelore.jpg',
    alt: 'Rebanho nelore em pastagem',
  },
  serviceShowcase: {
    src: '/Rebanho-Nelore.jpg',
    alt: 'Rebanho nelore em pastagem - pecuária moderna',
  },
  aboutNelore: {
    src: '/Nelore-Angus.jpg',
    alt: 'Boi nelore e angus - equilíbrio entre raças',
  },
  aboutExecutive: {
    src: '/escritorio.jpg',
    alt: 'Equipe Boi Preto Consultoria no escritório',
  },
  aboutMap: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByQn6Y5wNQuqTDUI4ZgGuIJv_qp8hc9qmHwJCe31lbDH2LNXGpj3rn0SzO7hnH3GBt2pnwwFa20tZr7bBDEUPcC8OpQRSUMaKl9xVjLCdxHIQOHiTF6k8iqHzjgSZe6zj1fymhxkspvn_FLWkO5Dt91a5jWVT9vjSoOaqKI-yoC2531hOC6qGPMJfB4d_mUitxzJKGaoUgcpqJ0ierzH3jBRvsfgSm4lUeMB8ZLwHrOSngzg81PTp64XZr2qJBu33SPVKtXaTbTz94',
    alt: 'Mapa do Brasil - presença territorial',
  },
  caseNovaEra: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3l-k3JWbHuUiRb8OeBpyPGCsQQ503iKFyEfPykoNKvKgz12GLC0j4RDK9BH7dxq97eO15Qbj0K6oPQX_A3yi-SCXAp3cTo1a8oqkArF_QSoXcY_Ip5L6_mdH_Ll1Y0-fEGakkng56WfKPNlWo_NsrWlxpHmeKXTRJv6jDZknbXbIg6heljtoeRUYW-oIaxRodDlCMfA4mI_UWvOFmfydRdQVu-w0qSjMpxNZWwI-LSZI6rwv-XZc-RbknGMSoX4sf1DR8hRktaAkD',
    alt: 'Gado pastando - Fazenda Nova Era',
  },
  contactAtmospheric: {
    src: '/escritorio.jpg',
    alt: 'Escritório Boi Preto',
  },
  contactMap: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNPLc-JpZS0agVyf-tJI3wp_iw4emtji-KBSkAD8nmT3UzIS036dv_8QIAzZu4XJeEcyVMzUf_Kl2ydf_evtvUsfBSCmpeWiVF-6U8khJdyKZ80ETjxidYgwX31vXlhnsnRLfH17HoYZl7KwxqvFJ0Y3MOYChmkFkCopI_WM_L7wFX0zdAwdnPLnZrboA18LE2XvCS2gSoI4ueXLdZfDpklPvTzUQPMYjyxkVe1gHOgEJobOCdXeXqYStfsY7ii76nbPKXzx5zUAXc',
    alt: 'Mapa topográfico - região de Araguaína',
  },
} as const satisfies Record<string, ImageAsset>;

// ─── Página: Home ─────────────────────────────────────────────────────────────

export const HOME = {
  hero: {
    badge: 'Consultoria Agropecuária de Elite',
    headline: 'Sua fazenda fatura bem mas o dinheiro',
    headlineHighlight: 'some no final do mês?',
    subheading:
      'Transformamos sua fazenda em um negócio altamente lucrativo, unindo trabalho inteligente no campo e as contas na ponta do lápis.',
    ctaPrimary: 'Diagnosticar Minha Operação',
    ctaSecondary: 'Conhecer Metodologia',
    widget: {
      label: 'ROI Operacional',
      value: '+24.8%',
    },
  },
  problems: {
    sectionTitle: 'Onde a tradição encontra o Obstáculo.',
    sectionSubtitle:
      'Se a sua gestão ainda é baseada em intuição, você está operando abaixo do potencial real da sua terra.',
    cards: [
      {
        title: 'Endividamento Estrutural',
        description:
          'O produtor vive para retroalimentar juros, sem clareza sobre a margem líquida real de cada ciclo produtivo.',
      },
      {
        title: 'Sobrecarga do Gestor',
        description:
          'A operação é refém da presença física do proprietário. Sem processos, não há liberdade nem escalabilidade.',
      },
      {
        title: 'Confusão de Dados',
        description:
          'Decisões críticas tomadas no "sentimento". Falta de projeção de fluxo de caixa e custo de arroba produzido.',
      },
    ],
  },
  solution: {
    badge: 'Nossa Solução',
    headline: 'Instalamos',
    headlineHighlight: 'Cultura de Precisão',
    description:
      'Não somos apenas consultores, somos arquitetos de rentabilidade. Unimos a sabedoria do campo com metodologias de gestão de classe mundial.',
    pillars: [
      'Auditoria Financeira Forense',
      'Engenharia de Processos de Manejo',
      'Inteligência de Dados em Tempo Real',
    ],
    imageLabel: 'Heritage Data Analysis',
    dataCard: {
      title: 'Dados que Pastam',
      subtitle: 'Transformamos o comportamento biológico em rentabilidade exponencial.',
    },
  },
  cta: {
    headline: 'Pronto para profissionalizar seu legado?',
    subheading: 'O mercado é implacável com o amadorismo. Proteja seu patrimônio com gestão de elite.',
    button: 'Falar com Consultor Estratégico',
  },
} as const;

// ─── Página: Serviços ─────────────────────────────────────────────────────────

export const SERVICES_PAGE = {
  header: {
    badge: 'Estratégia e Precisão',
    headline: 'Soluções que acompanham o crescimento do seu rebanho e do seu caixa.',
    supporting:
      'Unimos o conhecimento do campo à precisão dos algoritmos para transformar sua fazenda em uma operação de alta performance financeira.',
  },
  showcase: {
    quote: '"Decisões baseadas em números, não em achismos."',
    quoteAuthor: 'Boi Preto Consultoria',
    title: 'Precisa de um modelo exclusivo?',
    description:
      'Entendemos que cada fazenda é um ecossistema único. Desenvolvemos estratégias híbridas que se moldam à sua realidade logística e produtiva.',
    ctaPrimary: 'Agendar Consultoria',
    ctaSecondary: 'Ver Documentação',
  },
} as const;

export const SERVICES_DATA: Service[] = [
  {
    id: '01',
    iconName: 'BarChart3',
    title: 'Análise de Oportunidade',
    description:
      'Um raio-x completo da fazenda. Levantamos o que está travando a produção e o financeiro para descobrir onde o dinheiro está escapando, focando no que pode ser ajustado agora para dar lucro rápido na operação atual.',
    cta: 'Agendar Diagnóstico',
    colSpan: 'md:col-span-6',
    bg: 'bg-surface-container',
  },
  {
    id: '02',
    iconName: 'ClipboardCheck',
    title: 'Auditoria',
    description:
      'Conferência rigorosa dos números da propriedade. Cruzamos os dados do escritório com a realidade do campo (rebanho, insumos, maquinário e caixa) para garantir que as contas fecham e evitar qualquer tipo de perda, desvio ou desperdício.',
    cta: 'Solicitar Auditoria',
    colSpan: 'md:col-span-6',
    bg: 'bg-surface',
  },
  {
    id: '03',
    iconName: 'LineChart',
    title: 'Projeção Agropecuária',
    description:
      'Planejamento de longo prazo para o futuro da sua fazenda. Desenhamos a rota segura para os próximos anos, focando em fazer a terra e o rebanho crescerem, além de preparar o terreno para a sucessão familiar.',
    cta: 'Iniciar Planejamento',
    colSpan: 'md:col-span-12',
    bg: 'bg-surface-container',
    features: ['Previsão e Controle do Fluxo de Caixa', 'Proteção contra os altos e baixos do mercado (Hedge)'],
  },
];

// ─── Página: Cases ────────────────────────────────────────────────────────────

export const CASES = {
  hero: {
    badge: 'Cases de Sucesso',
    headline: 'Contra dados, não há',
    headlineHighlight: 'intuição',
    headlineSuffix: 'que vença.',
    supporting:
      'Resultados auditáveis que transformam a pecuária tradicional em um centro de lucro de alta precisão tecnológica.',
  },
  novaEra: {
    title: 'Fazenda Nova Era, TO',
    category: 'Gestão Intensiva de Ciclo Completo',
    challenge: {
      label: 'O Desafio',
      text: 'Baixa rentabilidade por hectare devido ao manejo extensivo e falta de controle de custos variáveis.',
    },
    metrics: [
      { value: '+24%', label: 'Margem Líquida' },
      { value: 'R$ 1.8k', label: 'Lucro Médio/HA' },
    ],
    chart: {
      title: 'Evolução ROI (%)',
      from: 'Legado',
      to: 'Boi Preto',
    },
    performance: {
      title: 'Performance HA',
      investment: { label: 'Investimento', value: 'R$ 850,00' },
      netReturn: { label: 'Retorno Líquido', value: 'R$ 1.840,00' },
    },
  },
  capacity: {
    title: 'Aumento de Capacidade de Suporte',
    description:
      'Otimização de pastagens e suplementação estratégica para maximizar a Unidade Animal por Hectare através de monitoramento intensivo.',
    before: {
      label: 'Status: Anterior',
      value: '0.8',
      unit: 'UA / Hectare',
      note: '"Pastagem degradada com baixa lotação e dependência extrema do clima."',
    },
    after: {
      label: 'Status: Otimizado',
      value: '1.4',
      unit: 'UA / Hectare',
      note: 'Implementação de pastejo rotacionado e correção de solo sistemática com foco em solo vivo.',
    },
    kpis: [
      { label: 'Ganho de Carcaça', value: '+75%' },
      { label: 'Eficiência Hídrica', value: '+12%' },
      { label: 'Redução de Custos', value: '18% Global' },
    ],
  },
  cta: {
    headline: 'Sua fazenda pode render mais.',
    headlineHighlight: 'Deixe os números provarem.',
    ctaPrimary: 'Solicitar Diagnóstico',
    ctaSecondary: 'Ver Metodologia',
  },
} as const;

// ─── Página: Sobre ────────────────────────────────────────────────────────────

export const ABOUT = {
  hero: {
    badge: 'Nossa Essência',
    headline: 'A força da tradição',
    headlineHighlight: 'com a precisão',
    headlineSuffix: 'dos números.',
    supporting:
      'Elevando o padrão da pecuária brasileira através de uma consultoria que entende o chão da fazenda e o rigor das planilhas.',
  },
  breeds: {
    neloreBadge: 'Resiliência Nelore',
    neloreNote:
      'A base do rebanho brasileiro adaptada ao nosso clima, agora guiada por métricas de eficiência sem precedentes.',
    title: 'O Equilíbrio Semiótico',
    p1: 'Entendemos a dualidade que move o agronegócio moderno. De um lado, o Nelore: a rusticidade, a herança e o vigor de quem domina as pastagens tropicais.',
    p2: 'Do outro, o Angus: a precisão do acabamento, a precocidade e a exigência de um mercado global cada vez mais analítico.',
    quote:
      'A Boi Preto nasce na intersecção desses dois mundos. Não escolhemos entre a intuição do peão e o software do analista — nós os fundimos.',
  },
  executive: {
    title: 'O Executivo\ndo Campo',
    description:
      'O novo pecuarista não é apenas um produtor; ele é um gestor de ativos biológicos. Nossa missão é prover a inteligência estratégica que transforma a lida diária em uma operação de alta performance financeira.',
    metrics: [
      { value: '98%', label: 'Precisão de Dados' },
      { value: '+15%', label: 'Margem Líquida' },
    ],
  },
  territory: {
    badge: 'Presença Territorial',
    title: 'Onde a terra encontra a gestão.',
  },
} as const;

/** Estados de atuação exibidos no mapa e na lista lateral da página Sobre. */
export const ATUACAO_STATES: StateInfo[] = [
  { state: 'Pará',         code: 'PA', mapTop: 'top-[15%]', mapLeft: 'left-[36%]', desc: 'Região de atuação da Boi Preto Consultoria.' },
  { state: 'Maranhão',     code: 'MA', mapTop: 'top-[20%]', mapLeft: 'left-[50%]', desc: 'Região de atuação da Boi Preto Consultoria.' },
  { state: 'Tocantins',    code: 'TO', mapTop: 'top-[28%]', mapLeft: 'left-[46%]', desc: 'Região de atuação da Boi Preto Consultoria.' },
  { state: 'Piauí',        code: 'PI', mapTop: 'top-[27%]', mapLeft: 'left-[57%]', desc: 'Região de atuação da Boi Preto Consultoria.' },
  { state: 'Goiás',        code: 'GO', mapTop: 'top-[43%]', mapLeft: 'left-[46%]', desc: 'Região de atuação da Boi Preto Consultoria.' },
  { state: 'Minas Gerais', code: 'MG', mapTop: 'top-[52%]', mapLeft: 'left-[54%]', desc: 'Região de atuação da Boi Preto Consultoria.' },
];

// ─── Página: Contato ──────────────────────────────────────────────────────────

export const CONTACT = {
  badge: 'Consultoria de Elite',
  headline: 'Cavalo selado só passa uma vez.',
  headlineHighlight: 'Vamos organizar a sua fazenda?',
  supporting:
    'A gestão de precisão não é mais um diferencial, é a base da sobrevivência no novo agro. Preencha os dados e receba um diagnóstico preliminar da nossa equipe técnica.',
  address: {
    label: 'Escritório Central',
    value: 'Av. José de Brito, 794 - St. Anhanguera, Araguaína - TO, 77818-530',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+José+de+Brito,+794,+Araguaína,+TO',
  },
  email: {
    label: 'Email Direto',
    value: 'contato@boipreto.com.br',
  },
  form: {
    fields: {
      name: { label: 'Nome Completo', placeholder: 'Ex: João da Silva' },
      whatsapp: { label: 'WhatsApp', placeholder: '(00) 00000-0000' },
      state: { label: 'Estado da Propriedade', placeholder: 'Selecione...' },
      size: { label: 'Tamanho da Propriedade', placeholder: 'Ex: 1.500 Hectares' },
      challenge: {
        label: 'Resumo do Desafio Atual',
        placeholder: 'Qual o maior gargalo da sua fazenda hoje?',
      },
    },
    stateOptions: [
      { value: 'TO', label: 'Tocantins' },
      { value: 'MT', label: 'Mato Grosso' },
      { value: 'GO', label: 'Goiás' },
      { value: 'PA', label: 'Pará' },
      { value: 'MS', label: 'Mato Grosso do Sul' },
    ] satisfies SelectOption[],
    submitLabel: 'Solicitar Contato da Equipe',
    privacyNote: 'Seus dados estão seguros sob nossa política de privacidade.',
  },
  hub: {
    name: 'Araguaína',
    label: 'Hub Logístico',
  },
} as const;

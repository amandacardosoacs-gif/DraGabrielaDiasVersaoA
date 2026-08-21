// ============================================================================
// CONFIGURAÇÃO CENTRAL DO SITE — DRA. GABRIELA DIAS
// Atualize as informações abaixo para refletir dados reais.
// ============================================================================

/** Número de WhatsApp em formato internacional, somente dígitos.
 * ATENÇÃO: substitua pelo número real antes de publicar. */
export const WHATSAPP_NUMBER = "5511999999999";

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGES = {
  hero: "Olá, Dra. Gabriela! Conheci seu trabalho pelo site e gostaria de agendar uma avaliação.",
  services: "Olá, Dra. Gabriela! Gostaria de saber mais sobre os procedimentos de harmonização facial.",
  beforeAfter: "Olá, Dra. Gabriela! Vi os resultados no site e gostaria de agendar minha avaliação.",
  testimonials: "Olá, Dra. Gabriela! Gostaria de agendar uma avaliação com você.",
  journal: "Olá, Dra. Gabriela! Li o conteúdo do site e gostaria de tirar algumas dúvidas.",
  faq: "Olá, Dra. Gabriela! Tenho uma dúvida sobre os procedimentos.",
  final: "Olá, Dra. Gabriela! Gostaria de agendar minha avaliação.",
  floating: "Olá, Dra. Gabriela! Encontrei seu site e gostaria de mais informações.",
};

export const siteInfo = {
  name: "Dra. Gabriela Dias",
  specialty: "Harmonização Facial",
  instagram: "https://www.instagram.com/dragabrielamichielindias",
  instagramHandle: "@dragabrielamichielindias",
  address: "[Inserir endereço do consultório]",
  hours: "[Inserir horário de atendimento]",
  cro: "[Inserir CRO]",
  email: "[Inserir e-mail de contato]",
};

export const credentials = [
  {
    title: "Avaliação individualizada",
    description: "Cada plano de tratamento parte de uma análise única do rosto e das expectativas da paciente.",
  },
  {
    title: "Planejamento facial digital",
    description: "Estudo detalhado das proporções antes de qualquer procedimento.",
  },
  {
    title: "Ambiente seguro",
    description: "Protocolos de biossegurança e materiais de procedência confiável.",
  },
  {
    title: "Acompanhamento contínuo",
    description: "Suporte antes, durante e depois de cada etapa do tratamento.",
  },
];

export const aboutInfo = {
  title: "Técnica, cuidado e naturalidade em cada detalhe.",
  paragraphs: [
    "A Dra. Gabriela Dias é cirurgiã-dentista com atuação voltada à harmonização facial, unindo conhecimento técnico da anatomia orofacial a um olhar sensível para as características individuais de cada paciente.",
    "Sua abordagem parte do princípio de que a beleza não segue um padrão único — por isso, cada avaliação é conduzida de forma cuidadosa, respeitando a história, as proporções naturais e os objetivos de quem está à sua frente.",
    "Mais do que aplicar uma técnica, seu trabalho é planejar. Isso significa entender o que faz sentido para cada rosto antes de propor qualquer procedimento.",
  ],
  formation: [
    "[Inserir formação acadêmica]",
    "[Inserir especialização em Harmonização Facial]",
    "[Inserir cursos e certificações relevantes]",
  ],
  values: [
    "Planejamento antes da técnica",
    "Resultados naturais e equilibrados",
    "Segurança em cada etapa",
    "Atendimento humano e transparente",
  ],
};

export type Service = {
  id: string;
  name: string;
  description: string;
  goal: string;
  indication: string;
  care: string;
};

export const services: Service[] = [
  {
    id: "harmonizacao-facial",
    name: "Harmonização Facial",
    description: "Avaliação individual das proporções e características faciais, com planejamento personalizado das intervenções indicadas.",
    goal: "Buscar equilíbrio entre as estruturas do rosto, respeitando a identidade de cada pessoa.",
    indication: "Pacientes que desejam compreender melhor suas proporções faciais antes de decidir por qualquer procedimento.",
    care: "Acompanhamento contínuo e reavaliações periódicas do planejamento.",
  },
  {
    id: "preenchimentos",
    name: "Preenchimentos",
    description: "Procedimentos destinados à harmonização e/ou reposição de volume, conforme indicação profissional.",
    goal: "Suavizar sulcos, repor volume ou definir contornos específicos, sempre conforme avaliação individual.",
    indication: "Indicado conforme características anatômicas e objetivos identificados na consulta de avaliação.",
    care: "Orientações específicas de cuidados pós-procedimento fornecidas individualmente.",
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica",
    description: "Abordagem estética individualizada conforme necessidades e avaliação, para suavização de linhas de expressão.",
    goal: "Proporcionar naturalidade na expressão facial, evitando o efeito de rigidez.",
    indication: "Avaliado caso a caso, considerando musculatura facial e expressividade de cada paciente.",
    care: "Recomendações pós-aplicação alinhadas durante a consulta.",
  },
  {
    id: "contorno-facial",
    name: "Contorno Facial",
    description: "Planejamento de áreas específicas do rosto buscando equilíbrio e harmonia entre os terços faciais.",
    goal: "Valorizar a estrutura óssea natural e o contorno já existente.",
    indication: "Pacientes que buscam mais definição, sempre respeitando a anatomia individual.",
    care: "Plano de acompanhamento definido conforme técnica utilizada.",
  },
  {
    id: "labios",
    name: "Lábios",
    description: "Planejamento personalizado respeitando proporção facial e características individuais.",
    goal: "Buscar harmonia entre os lábios e o restante do rosto, sem padronização de formato.",
    indication: "Indicado a partir de avaliação da proporção labial em relação ao terço inferior da face.",
    care: "Orientações específicas fornecidas conforme técnica aplicada.",
  },
];

export type Testimonial = {
  name: string;
  text: string;
  photo?: string;
};

// Utilize somente depoimentos reais e autorizados. Substitua os placeholders abaixo.
export const testimonials: Testimonial[] = [
  {
    name: "[Inserir nome autorizado]",
    text: "[Inserir depoimento real autorizado]",
  },
  {
    name: "[Inserir nome autorizado]",
    text: "[Inserir depoimento real autorizado]",
  },
  {
    name: "[Inserir nome autorizado]",
    text: "[Inserir depoimento real autorizado]",
  },
];

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
};

export const articles: Article[] = [
  {
    id: "mudar-o-rosto",
    title: "Harmonização facial precisa mudar o rosto?",
    excerpt: "Entenda a diferença entre harmonizar as proporções naturais e buscar uma transformação exagerada.",
    image: "/images/journal-naturalidade.jpg",
  },
  {
    id: "procedimento-indicado",
    title: "Como saber qual procedimento é indicado para mim?",
    excerpt: "A importância de uma avaliação individual antes de qualquer decisão sobre tratamentos estéticos.",
    image: "/images/journal-avaliacao.jpg",
  },
  {
    id: "naturalidade",
    title: "Naturalidade: o que significa na harmonização facial?",
    excerpt: "Explicamos como o conceito de equilíbrio orienta o planejamento e a preservação das características.",
    image: "/images/journal-naturalidade.jpg",
  },
  {
    id: "antes-do-procedimento",
    title: "O que avaliar antes de realizar um procedimento estético?",
    excerpt: "Profissional, indicação, planejamento e expectativas: pontos essenciais antes de decidir.",
    image: "/images/journal-avaliacao.jpg",
  },
  {
    id: "cuidados",
    title: "Cuidados antes e depois dos procedimentos",
    excerpt: "Orientações gerais e responsáveis para apoiar sua recuperação com segurança.",
    image: "/images/journal-cuidados.jpg",
  },
  {
    id: "duracao",
    title: "Quanto tempo dura um procedimento?",
    excerpt: "A duração pode variar de acordo com a técnica e as características individuais de cada paciente.",
    image: "/images/journal-cuidados.jpg",
  },
  {
    id: "mitos-e-verdades",
    title: "Mitos e verdades sobre harmonização facial",
    excerpt: "Separamos informações responsáveis para ajudar você a entender melhor o tema.",
    image: "/images/journal-naturalidade.jpg",
  },
  {
    id: "contraindicacoes",
    title: "Quando não realizar um procedimento?",
    excerpt: "Contraindicações existem — e a avaliação profissional é insubstituível nessa decisão.",
    image: "/images/journal-avaliacao.jpg",
  },
  {
    id: "masculina-feminina",
    title: "Harmonização facial masculina e feminina",
    excerpt: "O planejamento deve respeitar características individuais, e não padrões rígidos de gênero.",
    image: "/images/journal-cuidados.jpg",
  },
  {
    id: "autoestima",
    title: "Beleza e autoestima",
    excerpt: "Uma reflexão humanizada sobre a relação entre estética, percepção pessoal e bem-estar.",
    image: "/images/journal-naturalidade.jpg",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona a primeira avaliação?",
    answer: "A primeira consulta é dedicada a entender seu rosto, sua história e suas expectativas, além de avaliar suas características individuais antes de qualquer indicação.",
  },
  {
    question: "A avaliação é personalizada?",
    answer: "Sim. Não trabalhamos com pacotes fechados — cada plano é construído a partir da avaliação individual de cada paciente.",
  },
  {
    question: "Como saber qual procedimento é indicado?",
    answer: "Isso só pode ser definido durante a consulta, após avaliação presencial das características faciais e da conversa sobre seus objetivos.",
  },
  {
    question: "Quanto tempo dura o atendimento?",
    answer: "O tempo varia conforme o procedimento e a complexidade do planejamento, sendo detalhado durante a avaliação.",
  },
  {
    question: "Como funciona o orçamento?",
    answer: "O orçamento é apresentado após a avaliação, já que depende do planejamento definido para cada paciente.",
  },
  {
    question: "Quais cuidados são necessários após o procedimento?",
    answer: "As orientações pós-procedimento são individualizadas e explicadas detalhadamente ao final de cada atendimento.",
  },
  {
    question: "Quando posso voltar às minhas atividades?",
    answer: "Isso depende do procedimento realizado e da resposta individual de cada paciente, sendo orientado caso a caso.",
  },
  {
    question: "Os resultados são imediatos?",
    answer: "Alguns efeitos podem ser percebidos logo após o procedimento, mas o resultado final costuma se estabelecer ao longo de dias ou semanas, variando conforme a técnica.",
  },
  {
    question: "Os resultados variam de pessoa para pessoa?",
    answer: "Sim. Características anatômicas, hábitos e resposta individual influenciam diretamente o resultado final.",
  },
  {
    question: "Posso combinar procedimentos?",
    answer: "Em alguns casos sim, desde que avaliado tecnicamente. Essa possibilidade é discutida durante a consulta.",
  },
  {
    question: "O procedimento é indicado para todas as pessoas?",
    answer: "Não. Existem contraindicações que só podem ser identificadas em uma avaliação individual e responsável.",
  },
  {
    question: "Como agendar pelo WhatsApp?",
    answer: "Basta clicar em qualquer botão de WhatsApp do site — você será direcionada(o) diretamente para a conversa com nossa equipe.",
  },
];

export type BeforeAfterItem = {
  id: string;
  label: string;
  beforeImage: string;
  afterImage: string;
  note: string;
};

// IMPORTANTE: inserir apenas imagens reais autorizadas por escrito pelos pacientes.
// Enquanto não houver autorizações, mantenha os placeholders abaixo.
export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "caso-1",
    label: "[Caso a ser inserido mediante autorização]",
    beforeImage: "/images/before-after-placeholder.jpg",
    afterImage: "/images/before-after-placeholder.jpg",
    note: "Imagem disponível somente após consentimento do(a) paciente.",
  },
  {
    id: "caso-2",
    label: "[Caso a ser inserido mediante autorização]",
    beforeImage: "/images/before-after-placeholder.jpg",
    afterImage: "/images/before-after-placeholder.jpg",
    note: "Imagem disponível somente após consentimento do(a) paciente.",
  },
];

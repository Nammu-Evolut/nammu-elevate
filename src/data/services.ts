export interface ServiceData {
  slug: string;
  name: string;
  paraQuem: string;
  entregas: string[];
  themes?: string[];
}

export const services: ServiceData[] = [
  {
    slug: "mentoria",
    name: "Mentoria",
    paraQuem:
      "Para gestores, líderes e profissionais que querem acelerar seu desenvolvimento para assumir um novo nível de responsabilidade, superar um obstáculo específico ou desenvolver uma habilidade crítica para o próximo passo.",
    entregas: [
      "Objetivos claros e plano de desenvolvimento personalizado",
      "Ferramentas práticas para vencer os obstáculos no dia a dia",
      "Acompanhamento síncrono e assíncrono em cada etapa do processo",
    ],
  },
  {
    slug: "treinamentos",
    name: "Treinamentos",
    paraQuem:
      "Para RHs, diretores, founders e gestores que precisam desenvolver times em liderança, produtividade, métricas, gestão de produto, estratégia e gestão de conflitos, com treinamentos desenhados para o contexto real do grupo.",
    entregas: [
      "Formato, carga horária e conteúdo desenhados para o objetivo específico do grupo",
      "Sessões presenciais ou remotas, com foco em aprendizagem prática",
      "Aplicação imediata: o que é aprendido funciona no trabalho real",
    ],
    themes: [
      "Liderança",
      "Produtividade",
      "Métricas",
      "Gestão de Produto",
      "Estratégia",
      "Gestão de Conflitos",
    ],
  },
  {
    slug: "palestras",
    name: "Palestras",
    paraQuem:
      "Para RHs, produtores de eventos e lideranças que querem criar awareness sobre um tema, habilidade ou prática, como ponto de partida para uma mudança mais ampla.",
    entregas: [
      "Apresentação de 1 hora, interativa e adaptada ao público",
      "Material estruturado sobre o tema abordado",
      "Avaliação de percepção ao final para medir o impacto junto aos participantes",
    ],
  },
  {
    slug: "consultoria",
    name: "Consultoria",
    paraQuem:
      "Para empresas que enfrentam um desafio crítico ou mudança estruturada que a equipe atual não consegue tratar sozinha (por falta de habilidade, experiência ou perfil) e que não têm tempo para esperar por uma capacitação.",
    entregas: [
      "Imersão junto à liderança: diagnóstico, plano de ação e execução lado a lado com a equipe",
      "A Nammu entra, resolve e transfere o conhecimento no processo",
      "Sem criar dependência: o objetivo é que a equipe saia mais capaz",
    ],
  },
  {
    slug: "executive-as-a-service",
    name: "Executive as a Service",
    paraQuem:
      "Para founders, CEOs e conselhos que precisam de um executivo sênior (COO, CPO, Head de Produto ou Diretor de Operações) em momentos de crescimento acelerado ou em projetos que exigem senioridade que o time atual ainda não tem.",
    entregas: [
      "Atuação direta no papel, em formato híbrido ou remoto",
      "Dedicação definida pelo contexto: de alguns dias por semana a tempo integral",
      "Ciclos de 6 meses com objetivos e entregas claros",
    ],
  },
];

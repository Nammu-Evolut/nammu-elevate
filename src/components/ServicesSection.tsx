import { Lightbulb, Users, Mic, Settings, Briefcase } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    name: "Mentoria",
    description: "Para líderes e profissionais que querem acelerar seu desenvolvimento para assumir um novo nível de responsabilidade ou superar um obstáculo específico.",
  },
  {
    icon: Users,
    name: "Treinamentos",
    description: "Capacitação para times em liderança, produtividade, gestão de produto, métricas e estratégia. Conteúdo e formato desenhados para o contexto real do grupo.",
  },
  {
    icon: Mic,
    name: "Palestras",
    description: "Para equipes que querem criar awareness sobre um tema como ponto de partida para uma mudança mais ampla. Formato de 1 hora, interativo e adaptado ao público.",
  },
  {
    icon: Settings,
    name: "Consultoria",
    description: "Para empresas com um desafio crítico que o time atual não consegue resolver sozinho. A Nammu entra, resolve e transfere o conhecimento no processo.",
  },
  {
    icon: Briefcase,
    name: "Executive as a Service",
    description: "Para founders e CEOs que precisam de um executivo sênior em momentos de crescimento acelerado. Atuação direta no papel, em ciclos de 6 meses.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24">
    <div className="container">
      <span className="font-body font-medium text-xs uppercase tracking-[0.1em] text-primary">
        O que fazemos
      </span>
      <h2 className="mt-4">Cinco formas de atuar junto com você</h2>
      <p className="mt-4 font-body text-lg text-text-secondary max-w-[600px] leading-relaxed">
        Do desenvolvimento individual à atuação executiva direta. Os serviços da Nammu se complementam ao longo da jornada de mudança.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.name}
            className="bg-surface border border-border rounded-lg p-8 hover:border-primary hover:bg-elevated transition-all duration-200"
          >
            <s.icon size={24} className="text-primary" />
            <h3 className="mt-4 font-heading text-xl font-bold">{s.name}</h3>
            <p className="mt-3 font-body text-[15px] text-text-secondary leading-relaxed">{s.description}</p>
            <a href="#" className="mt-4 inline-block font-body font-medium text-sm text-primary hover:underline">
              Saiba mais →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center font-body text-base text-text-secondary">
        Não sabe qual serviço faz sentido para o seu momento?{" "}
        <a href="#contato" className="text-primary font-medium hover:underline">
          Fale com a Nammu →
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;

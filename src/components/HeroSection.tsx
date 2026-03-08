const HeroDecoration = () => (
  <div className="hidden lg:block relative w-full h-full min-h-[400px]">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Grid lines */}
      {[80, 160, 240, 320].map((x) => (
        <line key={`v${x}`} x1={x} y1="40" x2={x} y2="360" stroke="#2D2D55" strokeWidth="0.5" />
      ))}
      {[80, 160, 240, 320].map((y) => (
        <line key={`h${y}`} x1="40" y1={y} x2="360" y2={y} stroke="#2D2D55" strokeWidth="0.5" />
      ))}
      {/* Glowing dots */}
      <circle cx="160" cy="160" r="4" fill="#6C47FF" opacity="0.8" />
      <circle cx="240" cy="80" r="3" fill="#00D4FF" opacity="0.7" />
      <circle cx="320" cy="240" r="4" fill="#6C47FF" opacity="0.6" />
      <circle cx="80" cy="320" r="3" fill="#00D4FF" opacity="0.5" />
      <circle cx="240" cy="320" r="3" fill="#6C47FF" opacity="0.4" />
      {/* Glow effects */}
      <circle cx="160" cy="160" r="20" fill="#6C47FF" opacity="0.08" />
      <circle cx="240" cy="80" r="16" fill="#00D4FF" opacity="0.06" />
    </svg>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
    {/* Purple radial glow */}
    <div
      className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(108,71,255,0.12) 0%, transparent 70%)" }}
    />

    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="font-body font-medium text-xs uppercase tracking-[0.1em] text-primary">
          Consultoria | Mentoria | Treinamento
        </span>

        <h1 className="mt-6">
          Desenvolvemos lideranças
          <br className="hidden md:block" />
          {" "}e negócios de alto impacto.
        </h1>

        <p className="mt-6 font-body text-lg text-text-secondary max-w-[520px] leading-relaxed">
          A Nammu trabalha lado a lado com founders, líderes e equipes para desenvolver as pessoas e transformar os resultados.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#servicos"
            className="bg-primary text-primary-foreground font-body font-medium text-base px-7 py-3.5 rounded-md hover:bg-[#7c5cff] transition-colors"
          >
            Conheça os serviços
          </a>
          <a
            href="#contato"
            className="border border-primary text-primary font-body font-medium text-base px-7 py-3.5 rounded-md bg-transparent hover:bg-primary-muted transition-colors"
          >
            Fale com a Nammu
          </a>
        </div>
      </div>

      <HeroDecoration />
    </div>
  </section>
);

export default HeroSection;

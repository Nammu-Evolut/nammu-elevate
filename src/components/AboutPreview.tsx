const AboutPreview = () => (
  <section id="sobre" className="bg-surface py-24">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="font-body font-medium text-xs uppercase tracking-[0.1em] text-primary">
          Quem somos
        </span>
        <h2 className="mt-4">Practitioners que trabalham lado a lado</h2>
        <p className="mt-6 font-body text-base text-text-secondary leading-[1.65]">
          A Nammu é uma consultoria fundada por Andressa Chiara e Marco Dubovski. Não somos uma empresa de frameworks ou decks bonitos. Somos profissionais que já estiveram do lado de quem executa, e é desse lugar que atuamos.
        </p>
        <a href="#" className="mt-6 inline-block font-body font-medium text-sm text-primary hover:underline">
          Conheça a nossa história →
        </a>
      </div>

      <div className="flex flex-col gap-6">
        <div className="bg-elevated border border-border rounded-lg p-6">
          <span className="font-heading text-4xl font-bold text-primary">20+</span>
          <p className="mt-2 font-body text-sm text-text-secondary">
            anos de experiência em produto e estratégia
          </p>
        </div>
        <div className="bg-elevated border border-border rounded-lg p-6">
          <span className="font-heading text-4xl font-bold text-secondary">5</span>
          <p className="mt-2 font-body text-sm text-text-secondary">
            formas de atuação, adaptadas ao seu momento e contexto
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPreview;

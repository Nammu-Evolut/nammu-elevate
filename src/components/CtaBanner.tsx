const CtaBanner = () => (
  <section id="contato" className="border-y border-border py-20" style={{ background: "linear-gradient(180deg, #1A1A35 0%, #252545 100%)" }}>
    <div className="container text-center">
      <h2>Pronto para o próximo passo?</h2>
      <p className="mt-4 font-body text-lg text-text-secondary">
        Fale com a Nammu e entenda qual serviço faz sentido para o seu momento.
      </p>
      <a
        href="/contato"
        className="mt-8 inline-block bg-primary text-primary-foreground font-body font-medium text-base px-9 py-4 rounded-md hover:bg-[#7c5cff] transition-colors"
      >
        Agendar uma conversa
      </a>
      <p className="mt-4 font-body text-[13px] text-text-muted">
        Sem compromisso. Apenas uma conversa.
      </p>
    </div>
  </section>
);

export default CtaBanner;

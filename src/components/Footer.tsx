const NammuLogo = () => (
  <span className="font-heading text-xl font-bold text-foreground relative">
    NAM
    <span className="relative">
      M
      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-primary text-[10px]">*</span>
    </span>
    U
  </span>
);

const Footer = () => (
  <footer className="bg-surface border-t border-border pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <NammuLogo />
          <p className="mt-4 font-body text-sm text-text-muted">
            Desenvolvemos lideranças e negócios de alto impacto.
          </p>
        </div>
        <div>
          <span className="font-body font-medium text-xs uppercase tracking-[0.08em] text-text-muted">
            Navegação
          </span>
          <div className="mt-4 flex flex-col gap-3">
            {["Sobre", "Serviços", "Conteúdo", "Contato"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-sm text-text-secondary hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <span className="font-body font-medium text-xs uppercase tracking-[0.08em] text-text-muted">
            Contato
          </span>
          <p className="mt-4 font-body text-sm text-text-secondary">
            contato@nammuevolut.com
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2">
        <span className="font-body text-[13px] text-text-muted">
          © 2025 Nammu. Todos os direitos reservados.
        </span>
        <span className="font-body text-[13px] text-text-muted">
          nammuevolut.com
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;

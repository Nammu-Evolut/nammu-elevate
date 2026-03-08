import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subjects = [
  "Mentoria",
  "Treinamentos",
  "Palestras",
  "Consultoria",
  "Executive as a Service",
  "Outro",
];

const ContatoPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xbdzlead", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      // silently fail — user can email directly
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-[72px] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(108,71,255,0.12) 0%, transparent 70%)" }}
        />
        <div className="container py-24">
          <h1>Vamos conversar</h1>
          <p className="mt-6 font-body text-lg text-text-secondary max-w-[640px] leading-relaxed">
            Preencha o formulário abaixo ou nos envie um e-mail diretamente. Respondemos em até 2 dias úteis.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-surface py-24">
        <div className="container max-w-[640px]">
          {submitted ? (
            <div className="text-center py-12">
              <h2 className="text-[32px]">Mensagem enviada!</h2>
              <p className="mt-4 font-body text-base text-text-secondary">
                Obrigado pelo contato. Retornaremos em até 2 dias úteis.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="font-body text-sm text-text-secondary mb-1.5 block">Nome *</label>
                <input
                  name="nome"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full bg-elevated border border-border rounded-md px-4 py-3 font-body text-base text-foreground placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="font-body text-sm text-text-secondary mb-1.5 block">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full bg-elevated border border-border rounded-md px-4 py-3 font-body text-base text-foreground placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="font-body text-sm text-text-secondary mb-1.5 block">Empresa</label>
                <input
                  name="empresa"
                  type="text"
                  maxLength={100}
                  className="w-full bg-elevated border border-border rounded-md px-4 py-3 font-body text-base text-foreground placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
                  placeholder="Nome da empresa (opcional)"
                />
              </div>
              <div>
                <label className="font-body text-sm text-text-secondary mb-1.5 block">Assunto</label>
                <select
                  name="assunto"
                  className="w-full bg-elevated border border-border rounded-md px-4 py-3 font-body text-base text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-body text-sm text-text-secondary mb-1.5 block">Mensagem *</label>
                <textarea
                  name="mensagem"
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full bg-elevated border border-border rounded-md px-4 py-3 font-body text-base text-foreground placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-heading font-bold text-base py-3.5 rounded-md hover:bg-[#7c5cff] transition-colors"
              >
                Enviar mensagem
              </button>
              <p className="text-center font-body text-[13px] text-text-muted">
                Ou envie um e-mail para contato@nammuevolut.com
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container">
          <p className="font-body text-[15px] text-text-secondary text-center">
            A Nammu atende presencialmente em São Paulo e remotamente em todo o Brasil.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContatoPage;

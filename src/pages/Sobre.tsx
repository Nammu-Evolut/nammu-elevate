import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import andressaPhoto from "@/assets/andressa.png";
import marcoPhoto from "@/assets/marco.jpg";

const SobrePage = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="relative pt-[72px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,71,255,0.12) 0%, transparent 70%)" }}
      />
      <div className="container py-24">
        <h1>Quem está por trás da Nammu</h1>
        <p className="mt-6 font-body text-lg text-text-secondary max-w-[640px] leading-relaxed">
          Practitioners com mais de uma década de experiência em produto, estratégia e desenvolvimento de lideranças.
        </p>
      </div>
    </section>

    {/* Manifesto */}
    <section className="bg-surface py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <blockquote className="font-heading text-[28px] font-bold text-primary leading-snug max-w-[400px]">
          "Não somos uma empresa de frameworks enlatados ou decks bonitos. Somos profissionais que já estiveram do lado de quem executa."
        </blockquote>
        <p className="font-body text-base text-text-secondary leading-[1.65]">
          A Nammu nasceu da crença de que o desenvolvimento real acontece na prática. Trabalhamos lado a lado com líderes e equipes, no contexto deles, com os desafios deles.
        </p>
      </div>
    </section>

    {/* Founders */}
    <section className="py-24">
      <div className="container">
        <h2 className="text-[32px]">As pessoas por trás</h2>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Andressa */}
          <div className="bg-surface border border-border rounded-lg p-8">
            <img src={andressaPhoto} alt="Andressa Chiara" className="w-20 h-20 rounded-full object-cover mb-6" />
            <h3 className="font-heading text-[22px] font-bold">Andressa Chiara</h3>
            <p className="mt-1 font-body font-medium text-sm text-primary">Co-fundadora</p>
            <p className="mt-4 font-body text-[15px] text-text-secondary leading-relaxed">
              Mais de 15 anos de experiência em estratégia de produto, negócios e desenvolvimento de lideranças. Especialista em gestão de produto, OKRs, Flight Levels e Fit for Purpose, e autora de quatro livros sobre produto e estratégia. Opera como practitioner e como educadora: une o que aprende no trabalho ao que publica e ensina.
            </p>
          </div>

          {/* Marco */}
          <div className="bg-surface border border-border rounded-lg p-8">
            <div className="w-20 h-20 rounded-full bg-elevated flex items-center justify-center mb-6">
              <span className="font-heading text-2xl font-bold text-text-secondary">M</span>
            </div>
            <h3 className="font-heading text-[22px] font-bold">Marco Dubovski</h3>
            <p className="mt-1 font-body font-medium text-sm text-primary">Co-fundador</p>
            <p className="mt-4 font-body text-[15px] text-text-secondary leading-relaxed">
              Mais de 20 anos de experiência em produto, inovação e negócios, com passagens por tecnologia, serviços financeiros e e-commerce. Especialista em OKRs, Flight Levels e Fit for Purpose, com certificação internacional como trainer. Conecta estratégia e execução com clareza: do boardroom ao chão de operação.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
    <Footer />
  </>
);

export default SobrePage;

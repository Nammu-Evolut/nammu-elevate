import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import capaLideranca from "@/assets/capa-lideranca.png";
import capaOkrs from "@/assets/capa-okrs.png";
import capaDiscovery from "@/assets/capa-discovery.jpg";
import capaHipoteses from "@/assets/capa-hipoteses.png";

const books = [
  {
    title: "Liderança por Definição",
    url: "https://www.amazon.com.br/dp/B0CYHL7TRB/",
    cover: capaLideranca,
  },
  {
    title: "OKR: Estratégia e Negócios para Transformação",
    url: "https://www.amazon.com.br/dp/B09HN54XDS/",
    cover: capaOkrs,
  },
  {
    title: "Produto Ágil: Discovery",
    url: "https://www.amazon.com.br/dp/B07HD2D8YW/",
    cover: capaDiscovery,
  },
  {
    title: "Produto Ágil: Testando Hipóteses",
    url: "https://www.amazon.com.br/dp/B07VJZSXGZ/",
    cover: capaHipoteses,
  },
];

const ConteudoPage = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="relative pt-[72px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,71,255,0.12) 0%, transparent 70%)" }}
      />
      <div className="container py-24">
        <h1>Conteúdo da Nammu</h1>
        <p className="mt-6 font-body text-lg text-text-secondary max-w-[640px] leading-relaxed">
          Acompanhe a produção da Andressa e do Marco nas redes. E se quiser se aprofundar, os livros estão disponíveis abaixo.
        </p>
      </div>
    </section>

    {/* Redes Sociais */}
    <section className="bg-surface py-24">
      <div className="container">
        <h2 className="text-[32px]">Onde nos encontrar</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {[
            { name: "Andressa Chiara", url: "https://www.linkedin.com/in/andressachiara/" },
            { name: "Marco Dubovski", url: "https://www.linkedin.com/in/dubovski/" },
          ].map((person) => (
            <div key={person.name} className="bg-elevated border border-border rounded-lg p-8">
              <Linkedin size={28} className="text-[#0A66C2]" />
              <h3 className="mt-4 font-heading text-lg font-bold">LinkedIn</h3>
              <p className="mt-1 font-body text-sm text-text-secondary">{person.name}</p>
              <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-body font-medium text-sm text-primary hover:underline"
              >
                Ver perfil no LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Livros */}
    <section className="py-24">
      <div className="container">
        <h2 className="text-[32px]">Livros publicados</h2>
        <p className="mt-4 font-body text-base text-text-secondary">
          Publicações da Andressa disponíveis para compra.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.title} className="bg-surface border border-border rounded-lg p-6">
              <div className="w-[120px] h-[160px] bg-elevated rounded flex items-center justify-center mx-auto">
                <span className="font-body text-xs text-text-muted text-center px-2">Capa</span>
              </div>
              <h3 className="mt-4 font-heading text-[15px] font-bold leading-snug">{book.title}</h3>
              <p className="mt-1 font-body text-[13px] text-text-muted">Andressa Chiara</p>
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-body font-medium text-[13px] text-primary hover:underline"
              >
                Ver na Amazon →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBanner />
    <Footer />
  </>
);

export default ConteudoPage;

import { useParams, Link } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import NotFound from "@/pages/NotFound";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

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
          <nav className="font-body text-[13px] text-text-muted mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Nammu</Link>
            {" > "}
            <Link to="/servicos" className="hover:text-foreground transition-colors">Serviços</Link>
            {" > "}
            <span className="text-text-secondary">{service.name}</span>
          </nav>

          <h1>{service.name}</h1>
          <p className="mt-6 font-body text-xl text-text-secondary max-w-[640px] leading-relaxed">
            {service.paraQuem}
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-block bg-primary text-primary-foreground font-body font-medium text-base px-7 py-3.5 rounded-md hover:bg-[#7c5cff] transition-colors"
          >
            Fale com a Nammu
          </Link>
        </div>
      </section>

      {/* Entrega */}
      <section className="bg-surface py-24">
        <div className="container">
          <h2 className="text-[32px]">O que você recebe</h2>

          <div className="mt-10 flex flex-col gap-5">
            {service.entregas.map((item, i) => (
              <div
                key={i}
                className="border-l-2 border-primary bg-elevated/50 rounded-r-lg px-6 py-5"
              >
                <p className="font-body text-base text-text-secondary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {service.themes && (
            <div className="mt-10">
              <p className="font-body font-medium text-sm text-text-muted mb-4">Temas disponíveis:</p>
              <div className="flex flex-wrap gap-3">
                {service.themes.map((theme) => (
                  <span
                    key={theme}
                    className="bg-primary-muted text-primary font-body font-medium text-[13px] px-3.5 py-1.5 rounded-full"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
};

export default ServicePage;

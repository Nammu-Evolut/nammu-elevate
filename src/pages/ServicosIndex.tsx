import { Link } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { Lightbulb, Users, Mic, Settings, Briefcase } from "lucide-react";

const icons = [Lightbulb, Users, Mic, Settings, Briefcase];

const ServicosIndex = () => (
  <>
    <Navbar />

    <section className="relative pt-[72px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(108,71,255,0.12) 0%, transparent 70%)" }}
      />
      <div className="container py-24">
        <span className="font-body font-medium text-xs uppercase tracking-[0.1em] text-primary">
          Nossos serviços
        </span>
        <h1 className="mt-4">Cinco formas de atuar junto com você</h1>
        <p className="mt-6 font-body text-lg text-text-secondary max-w-[600px] leading-relaxed">
          Do desenvolvimento individual à atuação executiva direta. Os serviços da Nammu se complementam ao longo da jornada de mudança.
        </p>
      </div>
    </section>

    <section className="pb-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = icons[i];
          return (
            <Link
              key={s.slug}
              to={`/servicos/${s.slug}`}
              className="bg-surface border border-border rounded-lg p-8 hover:border-primary hover:bg-elevated transition-all duration-200 group"
            >
              <Icon size={24} className="text-primary" />
              <h3 className="mt-4 font-heading text-xl font-bold">{s.name}</h3>
              <p className="mt-3 font-body text-[15px] text-text-secondary leading-relaxed line-clamp-3">
                {s.paraQuem}
              </p>
              <span className="mt-4 inline-block font-body font-medium text-sm text-primary group-hover:underline">
                Saiba mais →
              </span>
            </Link>
          );
        })}
      </div>
    </section>

    <CtaBanner />
    <Footer />
  </>
);

export default ServicosIndex;

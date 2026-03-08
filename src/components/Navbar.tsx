import { useState } from "react";
import { Menu, X } from "lucide-react";
import nammuLogo from "@/assets/nammu-logo.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-background border-b border-border">
      <div className="container h-full flex items-center justify-between">
        <a href="#">
          <img src={nammuLogo} alt="Nammu" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body font-medium text-[15px] text-text-secondary hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-primary text-primary-foreground font-body font-medium text-sm px-5 py-2.5 rounded-md hover:bg-[#7c5cff] transition-colors"
          >
            Fale com a Nammu
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-sm z-40">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body font-medium text-lg text-text-secondary hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground font-body font-medium text-sm px-5 py-2.5 rounded-md w-fit hover:bg-[#7c5cff] transition-colors"
            >
              Fale com a Nammu
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

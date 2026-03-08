import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import nammuLogo from "@/assets/nammu-logo.png";

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-background border-b border-border">
      <div className="container h-full flex items-center justify-between">
        <Link to="/">
          <img src={nammuLogo} alt="Nammu" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`font-body font-medium text-[15px] transition-colors ${
                isActive(l.href) ? "text-foreground" : "text-text-secondary hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-primary text-primary-foreground font-body font-medium text-sm px-5 py-2.5 rounded-md hover:bg-[#7c5cff] transition-colors"
          >
            Fale com a Nammu
          </Link>
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
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`font-body font-medium text-lg transition-colors ${
                  isActive(l.href) ? "text-foreground" : "text-text-secondary hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground font-body font-medium text-sm px-5 py-2.5 rounded-md w-fit hover:bg-[#7c5cff] transition-colors"
            >
              Fale com a Nammu
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import nammuLogo from "@/assets/nammu-logo.png";

const serviceLinks = [
  { label: "Mentoria", href: "/servicos/mentoria" },
  { label: "Treinamentos", href: "/servicos/treinamentos" },
  { label: "Palestras", href: "/servicos/palestras" },
  { label: "Consultoria", href: "/servicos/consultoria" },
  { label: "Executive as a Service", href: "/servicos/executive-as-a-service" },
];

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Conteúdo", href: "/conteudo" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  const isServicesActive = location.pathname.startsWith("/servicos");

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-background border-b border-border">
      <div className="container h-full flex items-center justify-between">
        <Link to="/">
          <img src={nammuLogo} alt="Nammu" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/sobre"
            className={`font-body font-medium text-[15px] transition-colors ${
              isActive("/sobre") ? "text-foreground" : "text-text-secondary hover:text-foreground"
            }`}
          >
            Sobre
          </Link>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 font-body font-medium text-[15px] transition-colors ${
                isServicesActive ? "text-foreground" : "text-text-secondary hover:text-foreground"
              }`}
            >
              Serviços
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-elevated border border-border rounded-md shadow-lg py-1.5 z-50">
                <Link
                  to="/servicos"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 font-body text-sm text-text-secondary hover:text-foreground hover:bg-surface transition-colors"
                >
                  Todos os serviços
                </Link>
                <div className="border-t border-border my-1" />
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 font-body text-sm transition-colors ${
                      isActive(s.href) ? "text-foreground" : "text-text-secondary hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/conteudo"
            className={`font-body font-medium text-[15px] transition-colors ${
              isActive("/conteudo") ? "text-foreground" : "text-text-secondary hover:text-foreground"
            }`}
          >
            Conteúdo
          </Link>

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
            <Link
              to="/sobre"
              onClick={() => setOpen(false)}
              className={`font-body font-medium text-lg transition-colors ${
                isActive("/sobre") ? "text-foreground" : "text-text-secondary hover:text-foreground"
              }`}
            >
              Sobre
            </Link>

            {/* Mobile services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center gap-1 font-body font-medium text-lg transition-colors ${
                  isServicesActive ? "text-foreground" : "text-text-secondary hover:text-foreground"
                }`}
              >
                Serviços
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="flex flex-col gap-3 mt-3 ml-4">
                  <Link
                    to="/servicos"
                    onClick={() => setOpen(false)}
                    className="font-body text-[15px] text-text-secondary hover:text-foreground transition-colors"
                  >
                    Todos os serviços
                  </Link>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={() => setOpen(false)}
                      className={`font-body text-[15px] transition-colors ${
                        isActive(s.href) ? "text-foreground" : "text-text-secondary hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/conteudo"
              onClick={() => setOpen(false)}
              className={`font-body font-medium text-lg transition-colors ${
                isActive("/conteudo") ? "text-foreground" : "text-text-secondary hover:text-foreground"
              }`}
            >
              Conteúdo
            </Link>

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

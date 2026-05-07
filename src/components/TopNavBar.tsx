import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TopNavBar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Cases', path: '/cases' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="flex justify-between items-center w-full px-4 md:px-8 py-2 max-w-screen-2xl mx-auto">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Boi Preto Consultoria" className="h-14 md:h-[90px] w-auto object-contain" />
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-label uppercase tracking-widest text-[10px] transition-colors duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                location.pathname === link.path
                  ? "text-primary after:w-full pb-1"
                  : "text-on-surface opacity-60 hover:opacity-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contato"
            className="hidden md:block bg-primary text-on-primary font-label uppercase tracking-widest text-[10px] font-bold px-6 py-3 rounded hover:bg-primary/90 hover:scale-105 hover:brightness-110 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Falar com Consultor
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-label uppercase tracking-widest text-sm py-1 transition-colors duration-200",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-on-surface opacity-60 hover:opacity-100 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contato"
            className="mt-2 bg-primary text-on-primary font-label uppercase tracking-widest text-[10px] font-bold px-6 py-4 text-center rounded hover:bg-primary/90 transition-all duration-300"
          >
            Falar com Consultor
          </Link>
        </div>
      )}
    </header>
  );
}

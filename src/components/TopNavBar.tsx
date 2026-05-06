import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

/**
 * Barra de navegação principal fixa no topo da página.
 * Detecta a rota ativa via `useLocation` e aplica o estilo de destaque ao link correspondente.
 * Em mobile, os links de navegação são ocultados; apenas o CTA "Falar com Consultor" permanece visível.
 */
export default function TopNavBar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Cases', path: '/cases' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="flex justify-between items-center w-full px-8 py-2 max-w-screen-2xl mx-auto">
        <Link to="/">
          <img src="/logo.png" alt="Boi Preto Consultoria" className="h-[100px] w-auto object-contain" />
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

        <Link
          to="/contato"
          className="bg-primary text-on-primary font-label uppercase tracking-widest text-[10px] font-bold px-6 py-3 rounded hover:bg-primary/90 hover:scale-105 hover:brightness-110 transition-all duration-300 active:scale-95 cursor-pointer"
        >
          Falar com Consultor
        </Link>
      </nav>
    </header>
  );
}

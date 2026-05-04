import { Link } from 'react-router-dom';
import Image from './ui/Image';
import { BRAND, FOOTER_LINKS } from '../constants/site';

/**
 * Rodapé global do site — exibe a logo oficial, nome da marca em Montserrat,
 * links institucionais (privacidade, termos, redes sociais) e copyright.
 * Renderizado pelo Layout em todas as páginas.
 */
export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <Image
            src="/logo.png"
            alt="Boi Preto Consultoria"
            className="h-[100px] w-auto mb-4"
          />
          <span className="font-logo font-bold text-sm text-primary tracking-wide">
            {BRAND.name} Consultoria
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface/50 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface/30">
          {BRAND.copyright}
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';

/**
 * Rodapé global do site com logotipo, links institucionais (privacidade, termos, redes sociais)
 * e copyright. Renderizado pelo Layout em todas as páginas.
 */
export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-12 max-w-screen-2xl mx-auto">
        <div className="text-xl font-headline italic text-primary mb-8 md:mb-0">
          Boi Preto
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          <Link to="#" className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface/50 hover:text-primary transition-colors">Privacidade</Link>
          <Link to="#" className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface/50 hover:text-primary transition-colors">Termos</Link>
          <Link to="#" className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface/50 hover:text-primary transition-colors">LinkedIn</Link>
          <Link to="#" className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface/50 hover:text-primary transition-colors">Instagram</Link>
        </div>
        
        <div className="font-label text-[9px] uppercase tracking-[0.2em] text-on-surface/30">
          © 2024 Boi Preto Consultoria Agropecuária.
        </div>
      </div>
    </footer>
  );
}

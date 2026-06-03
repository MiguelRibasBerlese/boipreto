import { Link } from 'react-router-dom';
import { CASES } from '../constants/site';

export default function Cases() {
  const { hero, cta } = CASES;

  return (
    <div className="pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-10 md:mb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-end justify-between">
          <div className="md:w-2/3">
            <span className="inline-block py-1 px-3 mb-4 rounded bg-surface-container-high text-primary font-headline italic text-xs border border-primary/10">
              {hero.badge}
            </span>
            <h1 className="font-logo text-4xl md:text-5xl lg:text-7xl font-bold leading-[1] text-on-surface mb-6 md:mb-8 tracking-tighter">
              {hero.headline} <span className="text-primary">{hero.headlineHighlight}</span> {hero.headlineSuffix}
            </h1>
          </div>
          <div className="md:w-1/3 pb-0 md:pb-4">
            <p className="text-on-surface-variant text-base md:text-lg max-w-sm leading-relaxed border-l border-primary/30 pl-6">
              {hero.supporting}
            </p>
          </div>
        </div>
      </section>

      {/* Depoimento de Cliente Real */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16 md:mb-32">
        <div className="mb-8 md:mb-12">
          <span className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-4 block">Depoimento Real</span>
          <h2 className="font-headline text-3xl md:text-4xl italic text-on-surface">O que nossos clientes dizem</h2>
        </div>

        <div className="w-full rounded overflow-hidden border border-primary/20 bg-surface-container shadow-2xl">
          <video
            className="w-full max-h-[70vh]"
            controls
            playsInline
            preload="metadata"
          >
            <source src="https://jpy2vpxj0xcygex9.public.blob.vercel-storage.com/videocliente.MOV" type="video/mp4" />
            Seu navegador não suporta reprodução de vídeo.
          </video>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 max-w-5xl mx-auto py-16 md:py-32 text-center">
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-headline italic mb-10 md:mb-12">
          {cta.headline} <br/><span className="text-primary">{cta.headlineHighlight}</span>
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <Link
            to="/contato"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-primary text-on-primary font-label uppercase tracking-[0.25em] text-[10px] font-bold rounded hover:bg-primary/90 hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/10 cursor-pointer text-center"
          >
            {cta.ctaPrimary}
          </Link>
          <Link
            to="/servicos"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border border-primary/30 text-primary font-label uppercase tracking-[0.25em] text-[10px] font-bold rounded hover:bg-primary/10 hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer text-center"
          >
            {cta.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  );
}

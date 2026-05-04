import { motion } from 'motion/react';
import Image from '../components/ui/Image';
import { ABOUT, ATUACAO_STATES, IMAGES } from '../constants/site';

/**
 * Página institucional — comunica a essência da marca em quatro seções:
 * Hero editorial, narrativa Nelore x Angus (equilíbrio semiótico),
 * "O Executivo do Campo" (perfil do cliente ideal) e mapa de presença territorial.
 */
export default function About() {
  const { hero, breeds, executive, territory } = ABOUT;

  return (
    <div className="pt-32">
      {/* Hero Editorial Section */}
      <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-8">
          <span className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-6 block">{hero.badge}</span>
          <h1 className="font-logo text-4xl md:text-6xl font-bold leading-[1] text-on-surface mb-8 tracking-tighter">
            {hero.headline} <br/>
            <span className="text-primary">{hero.headlineHighlight}</span> <br/>
            {hero.headlineSuffix}
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pb-4">
          <p className="font-body text-on-surface-variant text-lg leading-relaxed border-l border-primary/40 pl-6">
            {hero.supporting}
          </p>
        </div>
      </section>

      {/* Asymmetric Content Block: Nelore x Angus */}
      <section className="mb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="bg-surface-container overflow-hidden rounded-sm group">
              <Image
                className="w-full max-h-[500px] object-contain grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
                src={IMAGES.aboutNelore.src}
                alt={IMAGES.aboutNelore.alt}
              />
            </div>
            {/* Heritage Badge Overlapping */}
            <div className="absolute -bottom-8 -right-8 bg-surface-container-high p-8 shadow-2xl max-w-[280px] border border-primary/20">
              <span className="font-headline italic text-2xl text-primary mb-2 block">{breeds.neloreBadge}</span>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">{breeds.neloreNote}</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-4xl italic text-primary">{breeds.title}</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-light text-xl">
              <p>{breeds.p1}</p>
              <p>{breeds.p2}</p>
              <p className="text-on-surface font-body font-medium italic border-l-2 border-primary/40 pl-6">
                {breeds.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Executive of the Field Section */}
      <section className="bg-surface-container py-32 relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline text-5xl italic text-primary mb-8">
              {executive.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
              {executive.description}
            </p>
            <div className="grid grid-cols-2 gap-8">
              {executive.metrics.map((m) => (
                <div key={m.label} className="border-t border-primary/30 pt-6">
                  <span className="font-label text-primary text-3xl font-bold block mb-1">{m.value}</span>
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            {/* Foto real da equipe — sem filtros de cor */}
            <div className="max-h-[400px] bg-surface-container-highest rounded-sm overflow-hidden border border-primary/10">
              <Image
                className="w-full max-h-[400px] object-contain"
                src={IMAGES.aboutExecutive.src}
                alt={IMAGES.aboutExecutive.alt}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Onde Atuamos: Map Section */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-label text-primary uppercase tracking-[0.5em] text-[10px] mb-4 block">{territory.badge}</span>
          <h2 className="font-headline text-5xl italic text-on-surface">{territory.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative group">
            <div className="aspect-square lg:aspect-video bg-surface-container rounded-sm p-12 flex items-center justify-center border border-primary/10">
              <Image
                className="max-w-full max-h-full opacity-40 hover:opacity-60 transition-opacity duration-500 brightness-150 grayscale"
                src={IMAGES.aboutMap.src}
                alt={IMAGES.aboutMap.alt}
              />

              {/* Floating State Points */}
              {ATUACAO_STATES.map((s) => (
                <div
                  key={s.code}
                  className={`absolute ${s.mapTop} ${s.mapLeft} group-hover:scale-110 transition-transform`}
                >
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(187,131,28,0.7)]"></span>
                    <span className="mt-2 bg-surface-container-highest px-3 py-1 rounded-sm text-[9px] font-label font-bold text-primary uppercase tracking-widest border border-primary/20 whitespace-nowrap">
                      {s.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {ATUACAO_STATES.map((s) => (
              <div key={s.code} className="bg-surface-container p-6 rounded-sm border-l-4 border-primary/20 hover:border-primary/80 transition-colors">
                <h4 className="font-label text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2">{s.state}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

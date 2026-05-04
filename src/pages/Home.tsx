import { motion } from 'motion/react';
import { TrendingUp, Landmark, Brain, LineChart, BarChart3 } from 'lucide-react';
import Image from '../components/ui/Image';
import { HOME, IMAGES } from '../constants/site';

/**
 * Página inicial — apresenta o posicionamento de marca da Boi Preto em quatro seções:
 * Hero (proposta de valor), Problemas (pain points do produtor), Solução (metodologia)
 * e CTA final para conversão.
 */
export default function Home() {
  const { hero, problems, solution, cta } = HOME;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-30 grayscale"
            src={IMAGES.heroAngus.src}
            alt={IMAGES.heroAngus.alt}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="font-label text-primary uppercase tracking-[0.4em] text-[9px] mb-6 block font-semibold">
              {hero.badge}
            </span>
            <h1 className="font-logo text-6xl md:text-8xl font-bold leading-[1] text-on-surface mb-8 tracking-tighter">
              {hero.headline} <span className="text-primary">{hero.headlineHighlight}</span>
            </h1>
            <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed opacity-80">
              {hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-on-primary px-10 py-5 font-label font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/90 transition-all duration-500 shadow-2xl">
                {hero.ctaPrimary}
              </button>
              <button className="border border-primary/30 text-primary px-10 py-5 font-label font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/5 transition-all duration-500">
                {hero.ctaSecondary}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Overlapping Data Widget */}
        <div className="absolute bottom-16 right-12 hidden lg:block w-80 bg-surface/80 backdrop-blur-2xl p-8 border border-primary/20">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="font-label text-[9px] text-primary uppercase tracking-[0.3em] mb-1">{hero.widget.label}</p>
              <p className="font-headline text-3xl text-on-surface italic">{hero.widget.value}</p>
            </div>
            <TrendingUp className="text-primary w-6 h-6" />
          </div>
          <div className="h-28 flex items-end gap-1.5">
            <div className="flex-1 bg-primary/10 h-[40%]"></div>
            <div className="flex-1 bg-primary/20 h-[60%]"></div>
            <div className="flex-1 bg-primary/40 h-[45%]"></div>
            <div className="flex-1 bg-primary/60 h-[80%]"></div>
            <div className="flex-1 bg-primary h-[100%]"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-40 bg-background border-y border-primary/5">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="font-logo text-5xl font-bold mb-6 tracking-tight">{problems.sectionTitle}</h2>
            <p className="text-on-surface-variant font-body text-lg opacity-60">{problems.sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/10">
            <div className="group bg-surface p-12 border-r border-primary/10 hover:bg-primary/5 transition-all duration-700">
              <div className="mb-10">
                <Landmark className="text-primary w-10 h-10 font-light" />
              </div>
              <h3 className="font-headline text-2xl mb-5 italic text-on-surface">{problems.cards[0].title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-70">{problems.cards[0].description}</p>
            </div>

            <div className="group bg-surface p-12 border-r border-primary/10 hover:bg-primary/5 transition-all duration-700">
              <div className="mb-10">
                <Brain className="text-primary w-10 h-10 font-light" />
              </div>
              <h3 className="font-headline text-2xl mb-5 italic text-on-surface">{problems.cards[1].title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-70">{problems.cards[1].description}</p>
            </div>

            <div className="group bg-surface p-12 hover:bg-primary/5 transition-all duration-700">
              <div className="mb-10">
                <LineChart className="text-primary w-10 h-10 font-light" />
              </div>
              <h3 className="font-headline text-2xl mb-5 italic text-on-surface">{problems.cards[2].title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-70">{problems.cards[2].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-40 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-label text-primary uppercase tracking-[0.4em] text-[9px] mb-6 block font-semibold">{solution.badge}</span>
              <h2 className="font-headline text-6xl mb-10 leading-[1.1] tracking-tighter">
                {solution.headline} <span className="italic text-primary">{solution.headlineHighlight}</span>.
              </h2>
              <p className="font-body text-on-surface-variant text-xl mb-10 leading-relaxed opacity-80">
                {solution.description}
              </p>
              <div className="space-y-6 mb-12">
                {solution.pillars.map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-primary transition-all group-hover:w-4"></div>
                    <span className="font-label text-[11px] uppercase tracking-[0.25em] text-on-surface opacity-80 group-hover:opacity-100 group-hover:text-primary transition-all">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              <div className="col-span-2 aspect-[21/9] overflow-hidden relative group border border-primary/10">
                <Image
                  className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                  src={IMAGES.farmEquipment.src}
                  alt={IMAGES.farmEquipment.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="border border-primary/40 text-primary px-4 py-1 font-label text-[9px] uppercase tracking-[0.3em] backdrop-blur-md">{solution.imageLabel}</span>
                </div>
              </div>
              <div className="aspect-square overflow-hidden relative group border border-primary/10">
                <Image
                  className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                  src={IMAGES.neloreHome.src}
                  alt={IMAGES.neloreHome.alt}
                />
              </div>
              <div className="aspect-square bg-[#141414] p-10 flex flex-col justify-end border border-primary/10">
                <BarChart3 className="text-primary w-12 h-12 mb-6 font-light" />
                <h4 className="font-headline text-2xl italic mb-3 text-on-surface">{solution.dataCard.title}</h4>
                <p className="font-label text-[9px] text-on-surface-variant uppercase tracking-[0.2em] leading-relaxed opacity-60">{solution.dataCard.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-20 grayscale"
            src={IMAGES.ctaBackground.src}
            alt={IMAGES.ctaBackground.alt}
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/90"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h2 className="font-logo text-5xl md:text-7xl font-bold mb-10 tracking-tighter max-w-4xl mx-auto">{cta.headline}</h2>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant mb-16 max-w-2xl mx-auto opacity-70">{cta.subheading}</p>
          <button className="bg-primary text-on-primary px-16 py-7 font-label font-bold uppercase tracking-[0.3em] text-[11px] hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(187,131,28,0.2)]">
            {cta.button}
          </button>
        </div>
      </section>
    </div>
  );
}

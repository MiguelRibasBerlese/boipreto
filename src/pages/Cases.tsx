import { Link } from 'react-router-dom';
import { TrendingUp, Landmark, ChevronRight } from 'lucide-react';
import Image from '../components/ui/Image';
import { CASES, IMAGES } from '../constants/site';

export default function Cases() {
  const { hero, novaEra, capacity, cta } = CASES;

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

      {/* Case TOCANTINS */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Case Info */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-4xl font-headline italic mb-4">{novaEra.title}</h2>
              <p className="text-primary/70 font-label text-[10px] uppercase tracking-[0.25em] mb-6 md:mb-8">{novaEra.category}</p>

              <div className="space-y-5 md:space-y-6">
                <div className="p-5 md:p-6 bg-surface-container rounded border-l-2 border-primary">
                  <span className="text-primary text-[10px] uppercase font-label font-bold tracking-widest">{novaEra.challenge.label}</span>
                  <p className="mt-2 text-on-surface/80 font-light text-sm">{novaEra.challenge.text}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {novaEra.metrics.map((m, i) => (
                    <div key={m.label} className="p-5 md:p-6 bg-surface-container rounded border border-white/5">
                      <span className={`font-bold text-3xl font-body ${i === 0 ? 'text-primary' : 'text-on-surface'}`}>{m.value}</span>
                      <p className="text-primary/60 text-[9px] uppercase font-label mt-1 tracking-widest">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Visualization */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden rounded bg-surface-container-highest mb-4 md:mb-8 grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5 relative">
              <Image
                className="w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity"
                src={IMAGES.caseNovaEra.src}
                alt={IMAGES.caseNovaEra.alt}
              />
              {/* Desktop overlay cards — inside the image, clipped */}
              <div className="hidden md:flex absolute inset-0 p-6 flex-col justify-end pointer-events-none">
                <div className="grid grid-cols-2 gap-4 pointer-events-auto">
                  <div className="bg-black/90 backdrop-blur-xl p-6 rounded border border-primary/30">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">{novaEra.chart.title}</h3>
                      <TrendingUp className="text-primary w-4 h-4" />
                    </div>
                    <div className="h-32 flex items-end gap-2 px-2">
                      <div className="w-full bg-white/5 h-[30%] rounded-t-sm"></div>
                      <div className="w-full bg-white/10 h-[45%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/20 h-[60%] rounded-t-sm"></div>
                      <div className="w-full bg-primary/50 h-[75%] rounded-t-sm"></div>
                      <div className="w-full bg-primary h-[95%] rounded-t-sm"></div>
                    </div>
                    <div className="mt-4 flex justify-between text-[8px] font-label text-primary/60 uppercase tracking-tighter">
                      <span>{novaEra.chart.from}</span>
                      <span>{novaEra.chart.to}</span>
                    </div>
                  </div>

                  <div className="bg-black p-6 rounded border border-white/5">
                    <h3 className="font-label text-[10px] uppercase tracking-widest text-primary/80 mb-4 font-bold">{novaEra.performance.title}</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] text-on-surface-variant opacity-50 font-label uppercase">{novaEra.performance.investment.label}</span>
                        <span className="text-xs font-body">{novaEra.performance.investment.value}</span>
                      </div>
                      <div className="w-full bg-white/5 h-[2px] overflow-hidden">
                        <div className="bg-white/20 h-full w-[65%]"></div>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] text-on-surface-variant opacity-50 font-label uppercase">{novaEra.performance.netReturn.label}</span>
                        <span className="text-xs font-body text-primary font-bold">{novaEra.performance.netReturn.value}</span>
                      </div>
                      <div className="w-full bg-white/5 h-[2px] overflow-hidden">
                        <div className="bg-primary h-full w-[90%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile cards — below image */}
            <div className="md:hidden grid grid-cols-1 gap-4">
              <div className="bg-black/90 p-5 rounded border border-primary/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">{novaEra.chart.title}</h3>
                  <TrendingUp className="text-primary w-4 h-4" />
                </div>
                <div className="h-24 flex items-end gap-2 px-2">
                  <div className="w-full bg-white/5 h-[30%] rounded-t-sm"></div>
                  <div className="w-full bg-white/10 h-[45%] rounded-t-sm"></div>
                  <div className="w-full bg-primary/20 h-[60%] rounded-t-sm"></div>
                  <div className="w-full bg-primary/50 h-[75%] rounded-t-sm"></div>
                  <div className="w-full bg-primary h-[95%] rounded-t-sm"></div>
                </div>
                <div className="mt-3 flex justify-between text-[8px] font-label text-primary/60 uppercase tracking-tighter">
                  <span>{novaEra.chart.from}</span>
                  <span>{novaEra.chart.to}</span>
                </div>
              </div>

              <div className="bg-surface-container p-5 rounded border border-white/5">
                <h3 className="font-label text-[10px] uppercase tracking-widest text-primary/80 mb-4 font-bold">{novaEra.performance.title}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] text-on-surface-variant opacity-50 font-label uppercase">{novaEra.performance.investment.label}</span>
                    <span className="text-xs font-body">{novaEra.performance.investment.value}</span>
                  </div>
                  <div className="w-full bg-white/5 h-[2px] overflow-hidden">
                    <div className="bg-white/20 h-full w-[65%]"></div>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] text-on-surface-variant opacity-50 font-label uppercase">{novaEra.performance.netReturn.label}</span>
                    <span className="text-xs font-body text-primary font-bold">{novaEra.performance.netReturn.value}</span>
                  </div>
                  <div className="w-full bg-white/5 h-[2px] overflow-hidden">
                    <div className="bg-primary h-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case PRODUTIVIDADE */}
      <section className="bg-surface py-16 md:py-24 relative overflow-hidden border-y border-white/5">
        <div className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-headline italic mb-4 text-primary">{capacity.title}</h2>
            <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">{capacity.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Before Card */}
            <div className="sm:col-span-1 bg-surface-container p-8 rounded border border-white/5 flex flex-col justify-between">
              <div>
                <span className="inline-block py-1 px-3 rounded bg-white/5 text-on-surface-variant opacity-40 text-[9px] font-label uppercase mb-6 tracking-widest">{capacity.before.label}</span>
                <div className="text-5xl md:text-6xl font-headline italic mb-2 opacity-40">{capacity.before.value}</div>
                <div className="text-on-surface-variant opacity-40 font-label uppercase text-[9px] tracking-[0.2em]">{capacity.before.unit}</div>
              </div>
              <p className="text-[11px] text-on-surface-variant opacity-40 mt-8 md:mt-10 italic leading-relaxed">{capacity.before.note}</p>
            </div>

            {/* Visual Divider */}
            <div className="hidden md:flex flex-col justify-center items-center text-primary/30">
              <ChevronRight className="w-10 h-10" />
              <p className="font-label text-[8px] uppercase mt-2 font-bold tracking-[0.4em]">Evolução</p>
            </div>

            {/* After Card */}
            <div className="sm:col-span-1 bg-surface-container-high p-8 rounded border border-primary/40 flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="inline-block py-1 px-3 rounded bg-primary/20 text-primary text-[9px] font-label uppercase mb-6 tracking-widest font-bold border border-primary/20">{capacity.after.label}</span>
                <div className="text-5xl md:text-6xl font-headline italic text-primary mb-2">{capacity.after.value}</div>
                <div className="text-primary/70 font-label uppercase text-[9px] tracking-[0.2em]">{capacity.after.unit}</div>
              </div>
              <p className="text-[11px] text-on-surface mt-8 md:mt-10 leading-relaxed font-light">{capacity.after.note}</p>
            </div>

            {/* Dashboard Data Card */}
            <div className="sm:col-span-2 md:col-span-1 bg-black p-8 rounded border border-white/5 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h4 className="font-label text-[9px] uppercase text-primary/60 mb-3 tracking-widest">{capacity.kpis[0].label}</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-white/5 h-[2px] overflow-hidden">
                      <div className="bg-primary h-full w-[85%] shadow-[0_0_8px_rgba(187,131,28,0.5)]"></div>
                    </div>
                    <span className="font-body text-[10px] font-bold text-primary">{capacity.kpis[0].value}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-label text-[9px] uppercase text-primary/60 mb-3 tracking-widest">{capacity.kpis[1].label}</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-white/5 h-[2px] overflow-hidden">
                      <div className="bg-primary/60 h-full w-[92%]"></div>
                    </div>
                    <span className="font-body text-[10px] font-bold text-primary/60">{capacity.kpis[1].value}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/5 flex items-center justify-center text-primary border border-primary/10 shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[9px] font-label text-primary/60 uppercase tracking-widest">{capacity.kpis[2].label}</div>
                    <div className="text-sm font-bold text-on-surface">{capacity.kpis[2].value}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

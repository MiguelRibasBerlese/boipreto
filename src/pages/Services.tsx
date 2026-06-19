import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BarChart3, ClipboardCheck, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from '../components/ui/Image';
import { SERVICES_DATA, SERVICES_PAGE, IMAGES } from '../constants/site';

/** Mapa de nome de ícone (string em SERVICES_DATA) para componente Lucide. */
const ICON_MAP: Record<string, LucideIcon> = {
  BarChart3,
  ClipboardCheck,
  LineChart,
};

export default function Services() {
  const { header, showcase } = SERVICES_PAGE;

  return (
    <div className="pt-20 md:pt-32">
      <section className="px-4 md:px-8 mb-12 md:mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-8 md:gap-12">
          <div className="md:w-2/3">
            <span className="font-body text-primary tracking-[0.3em] uppercase text-xs mb-4 block">{header.badge}</span>
            <h1 className="font-logo text-4xl md:text-5xl lg:text-7xl font-bold leading-[1] text-on-surface mb-6 md:mb-8 tracking-tighter">
              {header.headline}
            </h1>
          </div>
          <div className="md:w-1/3 border-l border-primary/20 pl-8 pb-4 hidden md:block">
            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
              {header.supporting}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${service.colSpan} ${service.bg} rounded-lg p-8 relative overflow-hidden group border border-white/5 shadow-2xl`}
              >
                <div className="absolute top-4 right-4 opacity-5 font-body text-6xl font-bold text-primary">{service.id}</div>
                <div className="flex justify-between items-start mb-10 md:mb-12">
                  {Icon && <Icon className="text-primary w-10 h-10 relative z-10" />}
                  {service.badge && (
                    <div className="bg-primary/10 px-3 py-1 rounded border border-primary/20 relative z-10">
                      <span className="font-headline italic text-xs text-primary">{service.badge}</span>
                    </div>
                  )}
                </div>
                <h3 className="font-logo font-bold text-2xl md:text-3xl mb-4 text-on-surface relative z-10">{service.title}</h3>
                <div className="mb-8 relative z-10">
                  <p className="text-on-surface-variant text-sm font-body mb-2 opacity-60 uppercase tracking-tighter italic">O que é</p>
                  <p className="text-on-surface text-base">{service.description}</p>
                  {service.features && (
                    <ul className="mt-4 space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs font-body text-on-surface-variant">
                          <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mt-auto flex pt-8 border-t border-white/5 relative z-10">
                  <Link
                    to="/contato"
                    className="bg-primary text-on-primary font-body text-xs uppercase font-bold px-8 py-3 rounded-md hover:bg-primary/90 hover:scale-105 hover:brightness-110 transition-all duration-300 active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16 md:mb-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 relative pb-10 pr-0 md:pr-10">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30 z-0"></div>
            <Image
              className="w-full max-h-[420px] object-cover object-center rounded relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5"
              src={IMAGES.serviceShowcase.src}
              alt={IMAGES.serviceShowcase.alt}
            />
            <div className="absolute -bottom-8 -right-0 md:-right-8 bg-surface-container-highest p-5 md:p-6 rounded z-20 hidden md:block border border-primary/20 shadow-xl">
              <p className="font-headline italic text-xl md:text-2xl text-primary">{showcase.quote}</p>
              <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">{showcase.quoteAuthor}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl mb-6">{showcase.title}</h2>
            <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
              {showcase.description}
            </p>
            {/* Quote visible on mobile below text */}
            <div className="md:hidden mb-6 border-l-2 border-primary/40 pl-4">
              <p className="font-headline italic text-xl text-primary">{showcase.quote}</p>
              <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">{showcase.quoteAuthor}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="bg-primary text-on-primary px-8 py-4 rounded font-body uppercase text-xs font-bold hover:bg-primary/90 hover:scale-105 hover:brightness-110 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                {showcase.ctaPrimary}
              </Link>
              <Link
                to="/sobre"
                className="px-8 py-4 rounded border border-primary/40 font-body uppercase text-xs font-bold text-primary hover:bg-primary/10 hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer"
              >
                {showcase.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

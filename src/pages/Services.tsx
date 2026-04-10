import { motion } from 'motion/react';
import { BarChart3, Database, PencilRuler, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: '01',
      title: 'Análise de Oportunidade',
      icon: BarChart3,
      badge: 'Heritage Grade',
      description: 'Diagnóstico completo dos gargalos produtivos e financeiros, identificando janelas de lucro imediato na operação atual.',
      price: 'A partir de R$ 4.500',
      cta: 'Agendar Diagnóstico',
      colSpan: 'md:col-span-7',
      bg: 'bg-surface-container'
    },
    {
      id: '02',
      title: 'Assessoria de Dados',
      icon: Database,
      description: 'Implementação de cultura data-driven. Monitoramento mensal de KPI\'s zootécnicos e financeiros em tempo real.',
      price: 'R$ 2.800 /mês',
      cta: 'Saiba Mais',
      colSpan: 'md:col-span-5',
      bg: 'bg-surface'
    },
    {
      id: '03',
      title: 'Projetos Especializados',
      icon: PencilRuler,
      description: 'Desenvolvimento de infraestrutura tecnológica, confinamentos e estratégias de suplementação sob medida.',
      price: 'Customizado',
      cta: 'Solicitar Orçamento',
      colSpan: 'md:col-span-5',
      bg: 'bg-surface'
    },
    {
      id: '04',
      title: 'Projeção Plurianual',
      icon: LineChart,
      description: 'Planejamento estratégico de 5 anos focado em sucessão familiar e expansão de patrimônio imobiliário e animal.',
      price: 'R$ 12.000 /projeto',
      cta: 'Iniciar Planejamento',
      colSpan: 'md:col-span-7',
      bg: 'bg-surface-container',
      features: ['Análise de Fluxo de Caixa', 'Cenários de Mercado (Hedge)']
    }
  ];

  return (
    <div className="pt-32">
      <section className="px-8 mb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
          <div className="md:w-2/3">
            <span className="font-body text-primary tracking-[0.3em] uppercase text-xs mb-4 block">Estratégia e Precisão</span>
            <h1 className="font-headline italic text-5xl md:text-7xl leading-[1.1] text-on-surface mb-8">
              Soluções que acompanham o crescimento do seu rebanho e do seu caixa.
            </h1>
          </div>
          <div className="md:w-1/3 border-l border-primary/20 pl-8 pb-4 hidden md:block">
            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
              Unimos o conhecimento do campo à precisão dos algoritmos para transformar sua fazenda em uma operação de alta performance financeira.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${service.colSpan} ${service.bg} rounded-lg p-8 relative overflow-hidden group border border-white/5 shadow-2xl`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 font-body text-6xl font-bold text-primary">{service.id}</div>
              <div className="flex justify-between items-start mb-12">
                <service.icon className="text-primary w-10 h-10" />
                {service.badge && (
                  <div className="bg-primary/10 px-3 py-1 rounded border border-primary/20">
                    <span className="font-headline italic text-xs text-primary">{service.badge}</span>
                  </div>
                )}
              </div>
              <h3 className="font-headline text-3xl mb-4 text-on-surface">{service.title}</h3>
              <div className="mb-8">
                <p className="text-on-surface-variant text-sm font-body mb-2 opacity-60 uppercase tracking-tighter italic">O que é</p>
                <p className="text-on-surface text-base">{service.description}</p>
                {service.features && (
                  <ul className="mt-4 space-y-2">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs font-body text-on-surface-variant">
                        <CheckCircle2 className="text-primary w-4 h-4" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between pt-8 border-t border-white/5 gap-6">
                <div>
                  <p className="text-xs font-body uppercase text-on-surface-variant mb-1">Investimento</p>
                  <p className="text-2xl font-body font-bold text-primary">{service.price}</p>
                </div>
                <button className="bg-primary text-on-primary font-body text-xs uppercase font-bold px-8 py-3 rounded-md hover:bg-primary/90 transition-all active:scale-95 flex items-center gap-2">
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-8 max-w-7xl mx-auto mb-32 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30 z-0"></div>
            <img 
              className="w-full rounded relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAByVmtUmM2L9wVTKS3WjtmhTQO6VWWJTcT1oSqBKkcsxNA1NsYc3zQ6WdbDd8kzdcvgBWeCkW-U3nXQsj0DZddgnr-muA5VcRnaG-hJU73L7kzo8jwNah6X8Mc-MNWMXB12dJdag9VtvgO46mVCt9OEwF1OR7EKENzEqjxfyLKDQIiRQHTJLdB0YfcRoZ-IedCzcpk9YWCgfyWMgRZxTQGlcnnxQ9wpl6GkjZFrr4xrSpWxmC0cD9n2zQOVqDx12-dDCpmSTJ6Popf" 
              alt="Pecuária Moderna"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-surface-container-highest p-6 rounded z-20 hidden md:block border border-primary/20 shadow-xl">
              <p className="font-headline italic text-2xl text-primary">"Decisões baseadas em números, não em achismos."</p>
              <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">Boi Preto Consultoria</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Precisa de um modelo exclusivo?</h2>
            <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
              Entendemos que cada fazenda é um ecossistema único. Desenvolvemos estratégias híbridas que se moldam à sua realidade logística e produtiva.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded font-body uppercase text-xs font-bold active:scale-95 transition-transform hover:bg-primary/90">
                Agendar Consultoria
              </button>
              <button className="px-8 py-4 rounded border border-primary/40 font-body uppercase text-xs font-bold text-primary hover:bg-primary/10 transition-all">
                Ver Documentação
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32">
      {/* Hero Editorial Section */}
      <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
        <div className="lg:col-span-8">
          <span className="font-label text-primary uppercase tracking-[0.4em] text-[10px] mb-6 block">Nossa Essência</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-[0.95] italic text-on-surface">
            A força da tradição <br/>
            <span className="text-primary">com a precisão</span> <br/>
            dos números.
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pb-4">
          <p className="font-body text-on-surface-variant text-lg leading-relaxed border-l border-primary/40 pl-6">
            Elevando o padrão da pecuária brasileira através de uma consultoria que entende o chão da fazenda e o rigor das planilhas.
          </p>
        </div>
      </section>

      {/* Asymmetric Content Block: Nelore x Angus */}
      <section className="mb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-sm group">
              <img 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQzKOsutvvni0ezdJdRFBQNzkSvd6t1PrC020YF0QMRsEr-khMwmXWnya7fKswsKY9eH9RY2ca5ATjZk6oJyHB-FQNiwaIe9tTVBWPChIVwJdsSmKRiqV5WsKCdipdspPCgG8f8-o_y3UjxsW-DinIPeI6lIdo3iC4tiX-OdI2dmtTxvomHpBWmiBb549ZXHaiV7e46pxqWGzYYEJhWhFwjVU8dZMPy6kK2VMIy06YZhuZ-eiOe8IZYy9EkEFXRCFrizn6yqlrU41f" 
                alt="Nelore bull"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Heritage Badge Overlapping */}
            <div className="absolute -bottom-8 -right-8 bg-surface-container-high p-8 shadow-2xl max-w-[280px] border border-primary/20">
              <span className="font-headline italic text-2xl text-primary mb-2 block">Resiliência Nelore</span>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">A base do rebanho brasileiro adaptada ao nosso clima, agora guiada por métricas de eficiência sem precedentes.</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-headline text-4xl italic text-primary">O Equilíbrio Semiótico</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-light text-xl">
              <p>
                Entendemos a dualidade que move o agronegócio moderno. De um lado, o <span className="text-primary font-bold">Nelore</span>: a rusticidade, a herança e o vigor de quem domina as pastagens tropicais. 
              </p>
              <p>
                Do outro, o <span className="text-on-surface font-bold">Angus</span>: a precisão do acabamento, a precocidade e a exigência de um mercado global cada vez mais analítico.
              </p>
              <p className="text-on-surface font-body font-medium italic border-l-2 border-primary/40 pl-6">
                A Boi Preto nasce na intersecção desses dois mundos. Não escolhemos entre a intuição do peão e o software do analista — nós os fundimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Executive of the Field Section */}
      <section className="bg-surface-container py-32 relative">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline text-5xl italic text-primary mb-8">O Executivo <br/>do Campo</h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
              O novo pecuarista não é apenas um produtor; ele é um gestor de ativos biológicos. Nossa missão é prover a inteligência estratégica que transforma a lida diária em uma operação de alta performance financeira.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-t border-primary/30 pt-6">
                <span className="font-label text-primary text-3xl font-bold block mb-1">98%</span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Precisão de Dados</span>
              </div>
              <div className="border-t border-primary/30 pt-6">
                <span className="font-label text-primary text-3xl font-bold block mb-1">+15%</span>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Margem Líquida</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-video bg-surface-container-highest rounded-sm overflow-hidden relative border border-primary/10">
              <img 
                className="w-full h-full object-cover opacity-50" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp3WL_z-kfW6DuHuYkAKQcK6-sO43KFxFvtIuDIpY0dBTdc84rCWzjpK-CFgsnkkJDmjMPfjb6cjGlZI-1clgd75BVj0NH_TDgbbkoUAyk3nLKomIuABM_gEzF4N-6n17f2Bqnw16wvLuMFg_sWn6VqiAkK9bor6AVJhh7fUkxaiA7rW__nK-CGE9256WlIcozLnkAG9PK_5dCweU5q3lRIXDk4wWUjMrMf61XoZ0RY-BkN_LOtx4d5Ka1PNcpuUfqJSwzRLJeIgTa" 
                alt="Modern rancher"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Onde Atuamos: Map Section */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-label text-primary uppercase tracking-[0.5em] text-[10px] mb-4 block">Presença Territorial</span>
          <h2 className="font-headline text-5xl italic text-on-surface">Onde a terra encontra a gestão.</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative group">
            <div className="aspect-square lg:aspect-video bg-surface-container rounded-sm p-12 flex items-center justify-center border border-primary/10">
              <img 
                className="max-w-full max-h-full opacity-40 hover:opacity-60 transition-opacity duration-500 brightness-150 grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByQn6Y5wNQuqTDUI4ZgGuIJv_qp8hc9qmHwJCe31lbDH2LNXGpj3rn0SzO7hnH3GBt2pnwwFa20tZr7bBDEUPcC8OpQRSUMaKl9xVjLCdxHIQOHiTF6k8iqHzjgSZe6zj1fymhxkspvn_FLWkO5Dt91a5jWVT9vjSoOaqKI-yoC2531hOC6qGPMJfB4d_mUitxzJKGaoUgcpqJ0ierzH3jBRvsfgSm4lUeMB8ZLwHrOSngzg81PTp64XZr2qJBu33SPVKtXaTbTz94" 
                alt="Brazil map"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Data Points */}
              <div className="absolute top-[30%] left-[45%] group-hover:scale-110 transition-transform">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(187,131,28,0.8)]"></span>
                  <span className="mt-2 bg-surface-container-highest px-3 py-1 rounded-sm text-[9px] font-label font-bold text-primary uppercase tracking-widest border border-primary/20">Mato Grosso</span>
                </div>
              </div>
              <div className="absolute top-[20%] left-[55%] group-hover:scale-110 transition-transform">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(187,131,28,0.5)]"></span>
                  <span className="mt-2 bg-surface-container-highest px-3 py-1 rounded-sm text-[9px] font-label font-bold text-primary uppercase tracking-widest border border-primary/20">Pará</span>
                </div>
              </div>
              <div className="absolute top-[35%] left-[65%] group-hover:scale-110 transition-transform">
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(187,131,28,0.5)]"></span>
                  <span className="mt-2 bg-surface-container-highest px-3 py-1 rounded-sm text-[9px] font-label font-bold text-primary uppercase tracking-widest border border-primary/20">Tocantins</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {[
              { state: 'Mato Grosso', desc: 'O coração pulsante da pecuária de corte, onde aplicamos as estratégias de confinamento mais avançadas do país.' },
              { state: 'Pará', desc: 'Foco em sustentabilidade e recuperação de pastagens degradadas para alta produtividade a pasto.' },
              { state: 'Tocantins', desc: 'Hub logístico estratégico onde otimizamos a comercialização e o fluxo de caixa dos produtores.' }
            ].map((item) => (
              <div key={item.state} className="bg-surface-container p-8 rounded-sm border-l-4 border-primary/20 hover:border-primary/80 transition-colors">
                <h4 className="font-label text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">{item.state}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

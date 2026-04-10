import { motion } from 'motion/react';
import { TrendingUp, Landmark, Brain, LineChart, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-30 grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpuaPEd3cFApCJvvRsi3J3qbCtjMF4K1v6mtk0MJtyBJqyiwZ0jjY22wDvzFNDpeSGyNI643Z4NwvfXxR25i_q884dxDJMaJ3nKlpS9hRsglPOajXP8JmfPdN_l2iMoZBBKaBdtVC1Hwwv0qrcTOsuEyWUp7Clenv95QfBCYyuPGuNWG6QgoYWZDScdFQJtpxU9TmfiJbtPrs4E9JZfa8g-WpuFp-9MYDz7NmFnKYUSCBNmDz8nmR9BAeIbiN-h7An6MSFyzO8UWlC" 
            alt="Cinematic wide shot of dark Angus cattle in a misty morning pasture"
            referrerPolicy="no-referrer"
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
              Consultoria Agropecuária de Elite
            </span>
            <h1 className="font-headline text-6xl md:text-8xl italic leading-[1] text-on-surface mb-8 tracking-tighter">
              Sua fazenda fatura bem mas o dinheiro <span className="text-primary">some no final do mês?</span>
            </h1>
            <p className="font-body text-on-surface-variant text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed opacity-80">
              Transformamos propriedades rurais em ecossistemas de alta rentabilidade através de inteligência operacional e rigor financeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-on-primary px-10 py-5 font-label font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/90 transition-all duration-500 shadow-2xl">
                Diagnosticar Minha Operação
              </button>
              <button className="border border-primary/30 text-primary px-10 py-5 font-label font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/5 transition-all duration-500">
                Conhecer Metodologia
              </button>
            </div>
          </motion.div>
        </div>

        {/* Overlapping Data Widget */}
        <div className="absolute bottom-16 right-12 hidden lg:block w-80 bg-surface/80 backdrop-blur-2xl p-8 border border-primary/20">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="font-label text-[9px] text-primary uppercase tracking-[0.3em] mb-1">ROI Operacional</p>
              <p className="font-headline text-3xl text-on-surface italic">+24.8%</p>
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
            <h2 className="font-headline text-5xl mb-6 italic tracking-tight">Onde a tradição encontra o gargalo.</h2>
            <p className="text-on-surface-variant font-body text-lg opacity-60">Se a sua gestão ainda é baseada em intuição, você está operando abaixo do potencial real da sua terra.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/10">
            <div className="group bg-surface p-12 border-r border-primary/10 hover:bg-primary/5 transition-all duration-700">
              <div className="mb-10">
                <Landmark className="text-primary w-10 h-10 font-light" />
              </div>
              <h3 className="font-headline text-2xl mb-5 italic text-on-surface">Endividamento Estrutural</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-70">O produtor vive para retroalimentar juros, sem clareza sobre a margem líquida real de cada ciclo produtivo.</p>
            </div>
            
            <div className="group bg-surface p-12 border-r border-primary/10 hover:bg-primary/5 transition-all duration-700">
              <div className="mb-10">
                <Brain className="text-primary w-10 h-10 font-light" />
              </div>
              <h3 className="font-headline text-2xl mb-5 italic text-on-surface">Sobrecarga do Gestor</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-70">A operação é refém da presença física do proprietário. Sem processos, não há liberdade nem escalabilidade.</p>
            </div>
            
            <div className="group bg-surface p-12 hover:bg-primary/5 transition-all duration-700">
              <div className="mb-10">
                <LineChart className="text-primary w-10 h-10 font-light" />
              </div>
              <h3 className="font-headline text-2xl mb-5 italic text-on-surface">Opacidade de Dados</h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-base opacity-70">Decisões críticas tomadas no \"sentimento\". Falta de projeção de fluxo de caixa e custo de arroba produzido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-40 bg-[#050505] overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-label text-primary uppercase tracking-[0.4em] text-[9px] mb-6 block font-semibold">Nossa Solução</span>
              <h2 className="font-headline text-6xl mb-10 leading-[1.1] tracking-tighter">Instalamos <span className="italic text-primary">Cultura de Precisão</span>.</h2>
              <p className="font-body text-on-surface-variant text-xl mb-10 leading-relaxed opacity-80">
                Não somos apenas consultores, somos arquitetos de rentabilidade. Unimos a sabedoria do campo com metodologias de gestão de classe mundial.
              </p>
              <div className="space-y-6 mb-12">
                {['Auditoria Financeira Forense', 'Engenharia de Processos de Manejo', 'Inteligência de Dados em Tempo Real'].map((item) => (
                  <div key={item} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 bg-primary transition-all group-hover:w-4"></div>
                    <span className="font-label text-[11px] uppercase tracking-[0.25em] text-on-surface opacity-80 group-hover:opacity-100 group-hover:text-primary transition-all">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              <div className="col-span-2 aspect-[21/9] overflow-hidden relative group border border-primary/10">
                <img 
                  className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs8sTl5oJLl_W1pkqYMINWPPA-CC-BnddZNio2IjwEoqN3NNnTSFr3UY_JvkSqgUxVd3MwQAdPBtW7ZDaVTS0o7KQiAOjpisBnjxeJpn5x91WNyhOZwMcYsy7brRLa2ronEanA5KmpL3gfA1WKxR7ApX7iTKiure_D5bXBAGqeh5Zp7TeIHZkKHa8UJTH3gI6IIdmTQIxIGbSGc5mcAozIQGFQ4tBOMwvJD7FuuWoocjrdpWwg6QLLMqzfSDmdjwY5HnbXZ2W3yIHW" 
                  alt="High-tech farm equipment"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="border border-primary/40 text-primary px-4 py-1 font-label text-[9px] uppercase tracking-[0.3em] backdrop-blur-md">Heritage Data Analysis</span>
                </div>
              </div>
              <div className="aspect-square overflow-hidden relative group border border-primary/10">
                <img 
                  className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymf36lNDp5qo45zddKqGvpv4wPIWzzvQzy9RAE591kAfounzvWTENJJYtUB9AOvpIryzsXdBeWS4eOpSVMTWI8vEs2lOxtjzRWiH67C_a_jOI-KgzAoa-NfIattQDrqa4I986dIGKHKDFEQkuuboP7NS2Fx49zroqVQ2gD6KQPHmDIs6QiYs4IFrXmN818RnZxYkA-pECfbfbybdZi8HTB8VNx7OAr2V57g1g9Hzf6pkKJtDqdQolCh4Px--8f2Aw9CLh06OCHVpl" 
                  alt="Nelore bull"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square bg-[#141414] p-10 flex flex-col justify-end border border-primary/10">
                <BarChart3 className="text-primary w-12 h-12 mb-6 font-light" />
                <h4 className="font-headline text-2xl italic mb-3 text-on-surface">Dados que Pastam</h4>
                <p className="font-label text-[9px] text-on-surface-variant uppercase tracking-[0.2em] leading-relaxed opacity-60">Transformamos o comportamento biológico em rentabilidade exponencial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden border-t border-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-20 grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQm0syYFyVE5Uv3jRPbSIxFLJ5lX3m0t6Sq6xVr8c5XV3TX7Q9Gi6FRyB8dF8Kf7_PaiLdaOxDMt7wSif7EUEZ1BSIry1r1FbH45r8gCjw08So9MQd8ApwlqxiiWO6Uv9Xnxj5sXcpF6JFyhTKEUzHCTBht0gnomBvcEO9iQSMIcAkf7wvLI8I89jmx1SWe6vnPmAmvXrGlpgn4xrBUHFdki34fGbmmrcIiP40UGcqrAuS9F80hrNjL4L83J-MJJyR5i8JlIJlRhjd" 
            alt="Dark landscape"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/90"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h2 className="font-headline text-5xl md:text-7xl mb-10 italic tracking-tighter max-w-4xl mx-auto">Pronto para profissionalizar seu legado?</h2>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant mb-16 max-w-2xl mx-auto opacity-70">O mercado é implacável com o amadorismo. Proteja seu patrimônio com gestão de elite.</p>
          <button className="bg-primary text-on-primary px-16 py-7 font-label font-bold uppercase tracking-[0.3em] text-[11px] hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(187,131,28,0.2)]">
            Falar com Consultor Estratégico
          </button>
        </div>
      </section>
    </div>
  );
}

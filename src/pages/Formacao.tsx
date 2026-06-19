import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Award, Target, BookOpen } from 'lucide-react';
import Image from '../components/ui/Image';
import { IMAGES } from '../constants/site';

const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    className={`py-16 md:py-32 ${className}`}
  >
    {children}
  </motion.section>
);

export default function FormacaoPage() {
  return (
    <div className="pt-20 md:pt-24 bg-background text-on-surface font-body">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            className="w-full h-full object-cover object-center grayscale opacity-20"
            src={IMAGES.contactAtmospheric.src}
            alt="Consultores em reunião de planejamento"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-label text-primary uppercase tracking-[0.4em] text-[9px] mb-6 block font-semibold">
              Formação para Consultores Agro
            </span>
            <h1 className="font-logo text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-on-surface mb-6 tracking-tighter">
              Transforme seu conhecimento técnico em <span className="text-primary">contratos de alto valor</span>.
            </h1>
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mb-8 leading-relaxed opacity-80">
              Você tem pós-graduação, estuda muito, mas continua brigando por diárias de R$ 150 ou dando consultoria de graça no WhatsApp. A conta não fecha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#form"
                className="bg-primary text-on-primary px-8 py-4 font-label font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer text-center"
              >
                Quero Dobrar Meu Valor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video + Problema/Solução */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <div className="aspect-video bg-surface rounded-lg shadow-lg mb-8 flex items-center justify-center border border-primary/10">
              <p className="text-on-surface-variant">[Placeholder para Vídeo de Vendas 3-5 min]</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-surface p-6 rounded-lg border border-primary/10">
                <h3 className="font-logo font-bold text-xl text-red-400 mb-2">O Problema: A Síndrome do Consultor Mal Pago</h3>
                <p className="text-on-surface-variant">O pecuarista não sabe avaliar seu nível técnico. Para ele, todo agrônomo ou veterinário é igual. Quando ele não vê diferença, ele escolhe pelo preço.</p>
              </div>
              <div className="bg-surface p-6 rounded-lg border border-primary/10">
                <h3 className="font-logo font-bold text-xl text-green-400 mb-2">A Solução: O Processo Comercial</h3>
                <p className="text-on-surface-variant">Você não precisa de mais um diploma. Você precisa parar de dar dicas soltas e começar a vender Diagnósticos de alto valor.</p>
              </div>
            </div>
          </div>
          <p className="text-center text-lg md:text-xl font-semibold text-primary max-w-3xl mx-auto">"Vou te mostrar como a Boi Preto saiu de visitas avulsas para contratos de múltiplos 5 dígitos. Dê o primeiro passo para lotar sua agenda com clientes que pagam pelo seu valor real."</p>
        </div>
      </Section>

      {/* História do Produto */}
      <Section className="bg-surface-container">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
            <h2 className="font-logo text-3xl md:text-5xl font-bold mb-6 tracking-tight">A técnica não salva quem não sabe vender.</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed opacity-80">
              <p>Nós já estivemos exatamente onde você está. A Boi Preto quase faliu tentando sobreviver de "diárias" e entregando ouro de graça na primeira conversa, com medo de parecer um "vendedor chato".</p>
              <p className="font-semibold text-on-surface">A virada de chave foi entender que o problema não era técnico, era comercial. Criamos um método para transformar nosso serviço invisível em um processo claro. Banimos o "vou aí dar uma olhadinha" e passamos a vender Diagnósticos. Agora, vamos te ensinar a fazer o mesmo.</p>
            </div>
          </div>
          <div className="relative h-full min-h-[300px]">
             <Image src={IMAGES.aboutExecutive.src} alt="Equipe Boi Preto em reunião" className="w-full h-full object-cover rounded-lg shadow-xl border border-primary/10 grayscale" />
             <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary p-6 rounded-lg max-w-xs shadow-2xl">
                <p className="font-headline italic text-lg">"Deixamos de ser 'apagadores de incêndio' para nos tornarmos arquitetos de lucratividade."</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Serviço */}
      <Section>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="font-label text-primary uppercase tracking-[0.4em] text-[9px] mb-4 block font-semibold">O Método</span>
            <h2 className="font-logo text-3xl md:text-5xl font-bold tracking-tight">Formação Comercial para Consultores Agro</h2>
            <p className="mt-4 text-lg text-on-surface-variant opacity-80">Uma capacitação focada em transformar técnicos em consultores de alto valor, ensinando a vender, monitorar e garantir resultados.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-surface p-8 rounded-lg border border-primary/10">
              <Award className="w-10 h-10 text-primary mb-4"/>
              <h4 className="font-logo text-xl font-bold mb-2">Empacotamento de Serviços</h4>
              <p className="text-on-surface-variant opacity-80">Aprenda a transformar serviços avulsos em um Diagnóstico completo e irresistível.</p>
            </div>
            <div className="bg-surface p-8 rounded-lg border border-primary/10">
              <Target className="w-10 h-10 text-primary mb-4"/>
              <h4 className="font-logo text-xl font-bold mb-2">Scripts de Vendas</h4>
              <p className="text-on-surface-variant opacity-80">Receba roteiros prontos para conduzir propostas via WhatsApp, do "olá" ao "contrato assinado".</p>
            </div>
            <div className="bg-surface p-8 rounded-lg border border-primary/10">
              <BookOpen className="w-10 h-10 text-primary mb-4"/>
              <h4 className="font-logo text-xl font-bold mb-2">Retenção de Clientes</h4>
              <p className="text-on-surface-variant opacity-80">Descubra como manter o cliente engajado e criar uma agenda previsível após o primeiro serviço.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Depoimentos */}
      <Section className="bg-surface-container">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-logo text-3xl md:text-5xl font-bold tracking-tight">O que nossos parceiros dizem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface p-6 rounded-lg shadow-md border border-primary/10">
              <p className="italic text-on-surface-variant mb-4">"Eu entregava o diagnóstico inteiro pelo WhatsApp e o cliente sumia. Apliquei o método e fechei meu primeiro diagnóstico pago na mesma semana. Mudou o jogo."</p>
              <p className="font-bold text-right text-primary">— João P., Engenheiro Agrônomo</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md border border-primary/10">
              <p className="italic text-on-surface-variant mb-4">"Eu achava que precisava de mais um curso técnico para cobrar mais caro. Mentira. Eu só precisava do processo comercial. Hoje não brigo mais por diária, vendo projetos."</p>
              <p className="font-bold text-right text-primary">— Mariana S., Médica Veterinária</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Valor + Cadastro */}
      <Section id="form" className="relative overflow-hidden">
         <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-10 grayscale"
            src={IMAGES.ctaBackground.src}
            alt="Rebanho em pastagem"
          />
          <div className="absolute inset-0 bg-background/95"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="font-logo text-3xl md:text-5xl font-bold mb-6 tracking-tight">Quanto custa continuar <span className="text-primary">trabalhando de graça?</span></h2>
            <p className="text-lg text-on-surface-variant opacity-80 mb-4">Cada proposta no "visualizou", cada áudio de 5 minutos no domingo à noite e cada desconto por medo de perder o cliente estão destruindo seu faturamento.</p>
            <p className="text-lg font-semibold text-on-surface">O investimento nesta formação custa menos do que a margem que você deixa na mesa em uma única proposta mal feita. Você está a um processo de distância de dobrar o valor da sua consultoria.</p>
          </div>
          <div className="bg-surface p-8 rounded-lg shadow-2xl border border-primary/20">
            <h3 className="text-2xl font-logo font-bold text-center mb-6">Dê o primeiro passo para ser um Consultor de Alto Valor</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">Nome Completo:</label>
                <input type="text" id="name" placeholder="Nome Completo" className="w-full p-3 bg-surface-container border border-outline rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Telefone:</label>
                <input type="tel" id="phone" placeholder="Telefone com DDD" className="w-full p-3 bg-surface-container border border-outline rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email:</label>
                <input type="email" id="email" placeholder="Seu melhor e-mail" className="w-full p-3 bg-surface-container border border-outline rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary font-bold py-4 px-6 rounded-md text-lg uppercase hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105">
                Quero transformar minha consultoria
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

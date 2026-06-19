import { Link } from 'react-router-dom';
import { BRAND, FOOTER_LINKS } from '../constants/site';

// Componentes de ícone simples para não precisar instalar uma nova lib
const CheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

export default function FormacaoPage() {
  return (
    <div className="bg-background text-on-surface font-body">
      {/* Seção do Vídeo */}
      <section className="py-16 md:py-24 bg-surface-container">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-logo text-primary mb-4">Como transformar seu conhecimento técnico em contratos de alto valor.</h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-8">
            "Você tem pós-graduação, estuda muito, mas continua brigando por diárias de R$ 150,00 ou dando consultoria de graça no WhatsApp. A conta não fecha."
          </p>
          <div className="aspect-video bg-surface rounded-lg shadow-lg mb-8 flex items-center justify-center">
            <p className="text-on-surface-variant">[Placeholder para Vídeo de Vendas 3-5 min]</p>
          </div>
          <p className="text-on-surface-variant mb-4"><strong>O Problema (A Dor):</strong> "O pecuarista não sabe avaliar o seu nível técnico. Para ele, todo agrônomo ou veterinário é igual. Quando ele não vê diferença, ele escolhe pelo preço. Essa é a Síndrome do Consultor Mal Pago."</p>
          <p className="text-on-surface-variant mb-4"><strong>A Solução (A Virada):</strong> "Você não precisa de mais um diploma. Você precisa de um processo comercial. Precisa parar de dar dicas soltas e começar a vender Diagnósticos."</p>
          <p className="text-lg font-semibold text-primary">"Eu vou te mostrar como a Boi Preto saiu de visitas avulsas pequenas para contratos grandes. Preencha o formulário abaixo e dê o primeiro passo para lotar sua agenda com clientes que pagam pelo seu valor real."</p>
        </div>
      </section>

      {/* História do Produto */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-logo mb-6">A técnica não salva quem não sabe vender.</h2>
          <div className="text-left space-y-4 text-on-surface-variant leading-relaxed">
            <p>Nós já estivemos exatamente onde você está. A Boi Preto quase faliu tentando sobreviver de com coisas pequenas e entregando ouro de graça na primeira conversa com o produtor, com medo de parecer um "vendedor chato".</p>
            <p>A virada de chave aconteceu quando entendemos que o problema não era técnico, era comercial. O mercado do agro exige segurança. Criamos um método para transformar o nosso serviço invisível em um processo claro, com começo, meio e fim.</p>
            <p className="font-semibold text-on-surface">Banimos o "vou aí dar uma olhadinha" e passamos a vender Diagnósticos de alto valor. Hoje, nosso método é muito bem visto e gera um grande retorno. Agora, vamos ensinar você a fazer o mesmo.</p>
          </div>
        </div>
      </section>

      {/* Serviço */}
      <section className="py-16 md:py-24 bg-surface-container">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-widest text-primary font-semibold">Serviço</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-logo mt-2">Formação Comercial para Consultores Agro</h2>
            <p className="mt-4 text-lg text-on-surface-variant">Uma capacitação comercial focada em transformar profissionais técnicos do agro (agrônomos, veterinários, zootecnistas) em consultores de alto valor, ensinando a vender, monitorar e garantir os processos de atendimento.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold font-logo mb-4">Do que ele é composto:</h4>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-start gap-3"><CheckCircle /><span><strong>Método de empacotamento de serviços</strong> (transformando vários serviços avulsos em um Diagnóstico completo).</span></li>
                <li className="flex items-start gap-3"><CheckCircle /><span><strong>Scripts para conduzir propostas</strong> via WhatsApp.</span></li>
                <li className="flex items-start gap-3"><CheckCircle /><span>Como <strong>manter o cliente</strong> após o fechamento do serviço.</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold font-logo mb-4">Benefícios desse serviço:</h4>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-start gap-3"><CheckCircle /><span>Não ficar apenas na visualização e <strong>seguir de fato com a venda.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle /><span>Criação de uma <strong>agenda previsível</strong>, mantendo o cliente mesmo após o fechamento do primeiro serviço.</span></li>
                <li className="flex items-start gap-3"><CheckCircle /><span><strong>Novo posicionamento no mercado</strong>, com um serviço completo, que faz sentido para o seu público e que valoriza ainda mais você como um profissional.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-logo">O que nossos parceiros dizem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <p className="italic text-on-surface-variant mb-4">"Eu entregava o diagnóstico inteiro pelo WhatsApp para tentar fechar o cliente, e ele sumia. Apliquei o método de empacotamento da Boi Preto e fechei meu primeiro diagnóstico pago na mesma semana. Mudou o jogo."</p>
              <p className="font-bold text-right text-primary">— João P., Engenheiro Agrônomo</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <p className="italic text-on-surface-variant mb-4">"Eu achava que precisava de mais um curso técnico para cobrar mais caro. Mentira. Eu só precisava aprender o processo comercial. Hoje não brigo mais por diária, vendo projetos."</p>
              <p className="font-bold text-right text-primary">— Mariana S., Médica Veterinária</p>
            </div>
             <div className="bg-surface p-6 rounded-lg shadow-md">
              <p className="italic text-on-surface-variant mb-4">"A técnica do 'cercamento' acabou com a minha ansiedade. Eu morria de medo de cobrar. O método me deu um roteiro prático do que falar desde o primeiro 'bom dia' do pecuarista."</p>
              <p className="font-bold text-right text-primary">— Carlos M., Zootecnista</p>
            </div>
            <div className="bg-surface p-6 rounded-lg shadow-md">
              <p className="italic text-on-surface-variant mb-4">"Antes do método, eu era um pronto-socorro gratuito para os produtores da minha região. Agora, eu sou visto como um consultor estratégico e minha agenda está fechada pelos próximos 3 meses."</p>
              <p className="font-bold text-right text-primary">— Lucas F., Consultor de Pastagens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valor */}
      <section className="py-16 md:py-24 bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-logo mb-4">Quanto custa continuar trabalhando de graça?</h2>
          <p className="text-lg opacity-90 mb-6">Cada proposta que fica no "visualizou", cada áudio de 5 minutos dando consultoria gratuita no domingo à noite e cada desconto que você dá por medo de perder o cliente estão destruindo o seu faturamento.</p>
          <p className="text-xl font-semibold">O investimento nessa formação custa menos do que a margem que você deixa na mesa em apenas uma proposta mal feita. Você está a um processo comercial de distância de dobrar o valor da sua consultoria.</p>
        </div>
      </section>

      {/* Cadastro */}
      <section id="form" className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-logo">Preencha seus dados e dê o primeiro passo para ser um Consultor de alto valor.</h2>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-1">Nome Completo:</label>
              <input type="text" id="name" className="w-full p-3 bg-surface border border-outline rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-on-surface-variant mb-1">Telefone:</label>
              <input type="tel" id="phone" className="w-full p-3 bg-surface border border-outline rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-1">Email:</label>
              <input type="email" id="email" className="w-full p-3 bg-surface border border-outline rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <button type="submit" className="w-full bg-primary text-on-primary font-bold py-4 px-6 rounded-md text-lg uppercase hover:bg-primary/90 transition-colors">
              Quero transformar minha consultoria
            </button>
          </form>
        </div>
      </section>
      
      {/* CTA para o Formulário */}
      <section className="py-16 bg-surface-container">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-logo mb-4">Chega de ser apenas mais um no mercado agro.</h2>
            <p className="text-lg text-on-surface-variant mb-8">O mercado está cheio de produtores precisando de ajuda e de técnicos que não sabem vender. De qual lado você quer estar?</p>
            <a href="#form" className="bg-primary text-on-primary font-bold py-4 px-8 rounded-md text-lg uppercase hover:bg-primary/90 transition-colors">
              Quero preencher o formulário agora
            </a>
        </div>
      </section>

      {/* Sobre a Boi Preto */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-sm uppercase tracking-widest text-primary font-semibold">Sobre a Boi Preto</h3>
          <p className="mt-4 text-on-surface-variant leading-relaxed">A Boi Preto Consultoria é referência em gestão de propriedades rurais no Brasil. Com o posicionamento "Rústico Tecnológico", unimos a tradição do campo com a precisão dos números. Depois de validar na pele as dores de estruturar uma consultoria agropecuária do zero e escalar para contratos premium, abrimos a caixa-preta do nosso processo comercial para ajudar outros técnicos a deixarem de ser reféns da instabilidade.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-surface-container py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-on-surface-variant">
          <p className="font-logo text-lg mb-4">{BRAND.name}</p>
          <p className="text-sm mb-4">{BRAND.copyright} Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
            {FOOTER_LINKS.map(link => (
              <Link key={link.label} to={link.path} className="text-xs hover:text-primary">{link.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

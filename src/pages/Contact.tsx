import { MapPin, Mail, Tractor } from 'lucide-react';

/**
 * Página de contato — layout assimétrico com coluna editorial (endereço, imagem atmosférica)
 * e formulário de captura de lead com campos de nome, WhatsApp, estado e descrição do desafio.
 */
export default function Contact() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,#BB831C_0%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
              <span className="text-primary font-headline italic text-sm">Consultoria de Elite</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-headline font-medium leading-[1.1] text-on-surface">
              Cavalo selado só passa uma vez. <span className="italic text-primary block mt-2">Vamos organizar a sua fazenda?</span>
            </h1>
            
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              A gestão de precisão não é mais um diferencial, é a base da sobrevivência no novo agro. Preencha os dados e receba um diagnóstico preliminar da nossa equipe técnica.
            </p>
            
            <div className="pt-8 space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs">Escritório Central</h4>
                  <p className="text-on-surface-variant text-sm mt-1">Rua das Fazendas, Araguaína-TO</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <Mail className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs">Email Direto</h4>
                  <p className="text-on-surface-variant text-sm mt-1">contato@boipreto.com.br</p>
                </div>
              </div>
            </div>

            {/* Atmospheric Image */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mt-8 shadow-2xl border border-white/5">
              <img 
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkiIEL4dDAS4y_G6n43POEXAcw6jrhbOzuIHK_O67v1yTuHmXN5MJmwzDY9g-kxlrlv1Z6y70LetFsPuNNx5d55N8DY6UO6PezWlhCG4nwG8JsnLw8aoctI633PPCd-ySgIoDsxYKbr9964IrB3Wgsuia22pEMJB9oqQd68UwHjduI-oEqxsvaqCUmkUAuJbYAwAnFkca-V0ioQmz_nOpinsfCRwWjJ_c9x-KjM_r8dhXNiiNyYK3-62IVoG37oXZ6J-J73woNkVfC" 
                alt="Rural office"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Right Column: High-Precision Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container p-8 md:p-12 rounded-xl relative overflow-hidden border border-primary/20 shadow-2xl">
              {/* Heritage Background Badge */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
                <Tractor className="w-[200px] h-[200px]" />
              </div>
              
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20" 
                      placeholder="Ex: João da Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20" 
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">Estado da Propriedade</label>
                    <select className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all appearance-none">
                      <option className="bg-surface-container" value="" disabled selected>Selecione...</option>
                      <option className="bg-surface-container" value="TO">Tocantins</option>
                      <option className="bg-surface-container" value="MT">Mato Grosso</option>
                      <option className="bg-surface-container" value="GO">Goiás</option>
                      <option className="bg-surface-container" value="PA">Pará</option>
                      <option className="bg-surface-container" value="MS">Mato Grosso do Sul</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">Tamanho da Propriedade</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20" 
                      placeholder="Ex: 1.500 Hectares"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">Resumo do Desafio Atual</label>
                  <textarea 
                    rows={3} 
                    className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20 resize-none" 
                    placeholder="Qual o maior gargalo da sua fazenda hoje?"
                  ></textarea>
                </div>
                
                <div className="pt-6">
                  <button type="submit" className="w-full bg-primary text-on-primary font-label font-bold py-5 rounded-md text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300">
                    Solicitar Contato da Equipe
                  </button>
                  <p className="text-center text-on-surface-variant/40 text-[10px] mt-4 uppercase tracking-[0.2em]">
                    Seus dados estão seguros sob nossa política de privacidade.
                  </p>
                </div>
              </form>
            </div>
            
            {/* Asymmetric Map Integration */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="col-span-2 h-40 bg-surface-container-high rounded-xl overflow-hidden border border-white/5">
                <img 
                  className="w-full h-full object-cover filter grayscale contrast-125 opacity-20" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNPLc-JpZS0agVyf-tJI3wp_iw4emtji-KBSkAD8nmT3UzIS036dv_8QIAzZu4XJeEcyVMzUf_Kl2ydf_evtvUsfBSCmpeWiVF-6U8khJdyKZ80ETjxidYgwX31vXlhnsnRLfH17HoYZl7KwxqvFJ0Y3MOYChmkFkCopI_WM_L7wFX0zdAwdnPLnZrboA18LE2XvCS2gSoI4ueXLdZfDpklPvTzUQPMYjyxkVe1gHOgEJobOCdXeXqYStfsY7ii76nbPKXzx5zUAXc" 
                  alt="Topographic map"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-40 bg-primary/10 flex flex-col items-center justify-center text-center p-4 rounded-xl border border-primary/30">
                <span className="font-headline italic text-primary text-2xl">Araguaína</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary/60 mt-1">Hub Logístico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

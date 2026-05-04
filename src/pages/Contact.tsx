import { MapPin, Mail, Tractor } from 'lucide-react';
import Image from '../components/ui/Image';
import { CONTACT, IMAGES } from '../constants/site';

/**
 * Página de contato — layout assimétrico com coluna editorial (endereço, imagem atmosférica)
 * e formulário de captura de lead com campos de nome, WhatsApp, estado e descrição do desafio.
 */
export default function Contact() {
  const { badge, headline, headlineHighlight, supporting, address, email, form, hub } = CONTACT;

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,#BB831C_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
              <span className="text-primary font-headline italic text-sm">{badge}</span>
            </div>

            <h1 className="font-logo text-5xl md:text-7xl font-bold leading-[1] text-on-surface mb-8 tracking-tighter">
              {headline} <span className="italic text-primary block mt-2">{headlineHighlight}</span>
            </h1>

            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              {supporting}
            </p>

            <div className="pt-8 space-y-6">
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <MapPin className="text-primary w-8 h-8 group-hover:scale-110 transition-transform shrink-0" />
                <div>
                  <h4 className="font-logo font-bold text-on-surface uppercase tracking-widest text-xs">{address.label}</h4>
                  <p className="text-on-surface-variant text-sm mt-1">{address.value}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 group">
                <Mail className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs">{email.label}</h4>
                  <p className="text-on-surface-variant text-sm mt-1">{email.value}</p>
                </div>
              </div>
            </div>

            {/* Atmospheric Image */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden mt-8 shadow-2xl border border-white/5">
              <Image
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                src={IMAGES.contactAtmospheric.src}
                alt={IMAGES.contactAtmospheric.alt}
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
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">{form.fields.name.label}</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20"
                      placeholder={form.fields.name.placeholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">{form.fields.whatsapp.label}</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20"
                      placeholder={form.fields.whatsapp.placeholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">{form.fields.state.label}</label>
                    <select className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all appearance-none">
                      <option className="bg-surface-container" value="" disabled>{form.fields.state.placeholder}</option>
                      {form.stateOptions.map((opt) => (
                        <option key={opt.value} className="bg-surface-container" value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">{form.fields.size.label}</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20"
                      placeholder={form.fields.size.placeholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-primary/70 font-bold">{form.fields.challenge.label}</label>
                  <textarea
                    rows={3}
                    className="w-full bg-transparent border-0 border-b border-on-surface/20 px-0 py-3 text-on-surface focus:ring-0 focus:border-primary transition-all placeholder:text-on-surface-variant/20 resize-none"
                    placeholder={form.fields.challenge.placeholder}
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-primary text-on-primary font-label font-bold py-5 rounded-md text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300">
                    {form.submitLabel}
                  </button>
                  <p className="text-center text-on-surface-variant/40 text-[10px] mt-4 uppercase tracking-[0.2em]">
                    {form.privacyNote}
                  </p>
                </div>
              </form>
            </div>

            {/* Asymmetric Map Integration */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="col-span-2 h-40 bg-surface-container-high rounded-xl overflow-hidden border border-white/5">
                <Image
                  className="w-full h-full object-cover filter grayscale contrast-125 opacity-20"
                  src={IMAGES.contactMap.src}
                  alt={IMAGES.contactMap.alt}
                />
              </div>
              <div className="h-40 bg-primary/10 flex flex-col items-center justify-center text-center p-4 rounded-xl border border-primary/30">
                <span className="font-headline italic text-primary text-2xl">{hub.name}</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-primary/60 mt-1">{hub.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { MapPin, Mail, Tractor } from 'lucide-react';
import Image from '../components/ui/Image';
import { CONTACT, IMAGES } from '../constants/site';

export default function Contact() {
  const { badge, headline, headlineHighlight, supporting, address, email, form, hub } = CONTACT;

  return (
    <div className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,#BB831C_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full w-fit">
              <span className="text-primary font-headline italic text-sm">{badge}</span>
            </div>

            <h1 className="font-logo text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1] text-on-surface mb-4 md:mb-8 tracking-tighter">
              {headline} <span className="italic text-primary block mt-2">{headlineHighlight}</span>
            </h1>

            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-md">
              {supporting}
            </p>

            <div className="pt-4 md:pt-8 space-y-5 md:space-y-6">
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <MapPin className="text-primary w-7 md:w-8 h-7 md:h-8 group-hover:scale-110 transition-transform shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-logo font-bold text-on-surface uppercase tracking-widest text-xs">{address.label}</h4>
                  <p className="text-on-surface-variant text-sm mt-1">{address.value}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 group">
                <Mail className="text-primary w-7 md:w-8 h-7 md:h-8 group-hover:scale-110 transition-transform shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-label font-bold text-on-surface uppercase tracking-widest text-xs">{email.label}</h4>
                  <p className="text-on-surface-variant text-sm mt-1">{email.value}</p>
                </div>
              </div>
            </div>

            {/* Atmospheric Image */}
            <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden mt-4 md:mt-8 shadow-2xl border border-white/5">
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
            <div className="bg-surface-container p-6 md:p-8 lg:p-12 rounded-xl relative overflow-hidden border border-primary/20 shadow-2xl">
              {/* Heritage Background Badge */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
                <Tractor className="w-[200px] h-[200px]" />
              </div>

              <form
                className="space-y-6 md:space-y-8 relative z-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(
                    'https://wa.me/556391019161?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20contato%20da%20equipe%20Boi%20Preto.',
                    '_blank'
                  );
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

                <div className="pt-4 md:pt-6">
                  <button type="submit" className="w-full bg-primary text-on-primary font-label font-bold py-4 md:py-5 rounded-md text-sm uppercase tracking-widest hover:bg-primary/90 hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer">
                    {form.submitLabel}
                  </button>
                  <p className="text-center text-on-surface-variant/40 text-[10px] mt-4 uppercase tracking-[0.2em]">
                    {form.privacyNote}
                  </p>
                </div>
              </form>
            </div>

            {/* Asymmetric Map Integration */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2 w-full min-h-[200px] sm:min-h-[250px] rounded-sm overflow-hidden border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.123456789!2d-48.1950!3d-7.1920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Jos%C3%A9+de+Brito%2C+794+-+St.+Anhanguera%2C+Aragua%C3%ADna+-+TO%2C+77818-530!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Boi Preto Consultoria"
                  className="w-full h-full min-h-[200px] sm:min-h-[250px] rounded-sm"
                />
              </div>
              <div className="min-h-[120px] sm:min-h-[250px] bg-primary/10 flex flex-col items-center justify-center text-center p-4 rounded-xl border border-primary/30">
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

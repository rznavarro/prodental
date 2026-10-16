import { WhatsAppIcon } from './WhatsAppIcon.tsx';

const FACEBOOK_URL = 'https://web.facebook.com/ProDentalSantiago';
const INSTAGRAM_URL = 'https://www.instagram.com/prodentalsantiago/';
const DOCTORALIA_URL =
  'https://www.doctoralia.cl/clinicas/pro-dental-santiago';
const EMAIL_ADDRESS = 'recepcionprodentalsantiago@gmail.com';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white pt-16 pb-24 md:pb-16 border-t border-ink/20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <span className="font-display font-bold text-[28px] text-white block tracking-tight leading-tight mb-2">
              Pro Dental Santiago
            </span>
            <p className="text-secondary text-[16px] font-medium leading-relaxed">
              «Reconcíliate con tu sonrisa.»
            </p>
            <p className="text-white/60 text-xs mt-4 leading-relaxed">
              Centro odontológico en Santiago Centro. Atención amable,
              profesional y sin dolor.
            </p>
          </div>

          {/* Col 1: Dirección y horarios */}
          <div>
            <h4 className="font-display font-bold text-white text-[16px] mb-3">
              Ubicación y horarios
            </h4>
            <div className="space-y-2 text-white/75 text-sm leading-relaxed">
              <p>Compañía de Jesús 1390, Of. 618, Santiago Centro, Santiago.</p>
              <div className="pt-2">
                <p>Lunes a viernes: 08:00 a 18:00</p>
                <p>Sábados: 09:00 a 13:00</p>
                <p className="text-white/50 text-xs">Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Col 2: Contacto */}
          <div>
            <h4 className="font-display font-bold text-white text-[16px] mb-3">
              Contacto
            </h4>
            <div className="space-y-2.5 text-white/75 text-sm">
              <div>
                <a
                  href={`https://wa.me/56993960229?text=${encodeURIComponent(
                    'Hola Pro Dental Santiago, me gustaría agendar una evaluación.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-secondary fill-secondary" />
                  <span>+56 9 9396 0229</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-secondary transition-colors break-all text-xs sm:text-sm"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Redes y enlaces */}
          <div>
            <h4 className="font-display font-bold text-white text-[16px] mb-3">
              Opiniones y redes
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-white/75">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Facebook
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Instagram
              </a>
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Doctoralia
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-8 text-center md:text-left text-white/60 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Pro Dental Santiago</p>
          <p className="text-[11px] text-white/40">
            Aprobada y certificada por la Seremi de Salud
          </p>
        </div>
      </div>
    </footer>
  );
}

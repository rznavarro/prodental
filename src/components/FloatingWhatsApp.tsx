import { WhatsAppIcon } from './WhatsAppIcon.tsx';

const WHATSAPP_URL = `https://wa.me/56993960229?text=${encodeURIComponent(
  'Hola Pro Dental Santiago, me gustaría agendar una evaluación.'
)}`;

export function FloatingWhatsApp() {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 group">
      {/* Tooltip on hover */}
      <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-ink text-white text-xs font-bold py-1.5 px-3 rounded-full shadow-md whitespace-nowrap">
        Escríbenos
      </span>

      {/* 60px Circular Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="w-[60px] h-[60px] rounded-full bg-ink text-white ring-2 ring-primary flex items-center justify-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
      >
        <WhatsAppIcon className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}

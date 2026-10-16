import { WhatsAppIcon } from './WhatsAppIcon.tsx';

const DENTALINK_URL =
  'https://2456e5e04b283a04d118fc40ab6cc3f21b716004.agenda.softwaredentalink.com/agendas/agendamiento';
const WHATSAPP_URL = `https://wa.me/56993960229?text=${encodeURIComponent(
  'Hola Pro Dental Santiago, me gustaría agendar una evaluación.'
)}`;

export function MobileBottomBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-ink/10 px-3 py-2 shadow-lg"
      style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Left 60%: Agendar hora */}
        <a
          href={DENTALINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[60%] min-h-[52px] h-[52px] bg-primary text-ink font-bold text-[16px] rounded-full flex items-center justify-center text-center shadow-xs active:scale-[0.98] transition-transform"
        >
          Agendar hora
        </a>

        {/* Right 40%: WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[40%] min-h-[52px] h-[52px] bg-ink text-white font-bold text-[16px] rounded-full flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98] transition-transform"
        >
          <WhatsAppIcon className="w-5 h-5 text-white fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

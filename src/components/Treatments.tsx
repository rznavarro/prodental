import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const DENTALINK_URL =
  'https://2456e5e04b283a04d118fc40ab6cc3f21b716004.agenda.softwaredentalink.com/agendas/agendamiento';

interface TreatmentItem {
  number: string;
  title: string;
  description: string;
}

const TREATMENTS: TreatmentItem[] = [
  {
    number: '01',
    title: 'Diseño de sonrisa',
    description:
      'Proyectamos tu nueva sonrisa contigo y ves el resultado antes de empezar, en digital o con modelos.',
  },
  {
    number: '02',
    title: 'Alineadores invisibles',
    description:
      'Ortodoncia invisible con Invisalign para alinear tus dientes sin cambiar tu imagen ni tu rutina.',
  },
  {
    number: '03',
    title: 'Limpieza dental ultrasónica',
    description:
      'Una limpieza profesional que elimina la placa y el sarro de todas tus piezas dentales.',
  },
  {
    number: '04',
    title: 'Blanqueamiento dental',
    description:
      'Un tratamiento estético para que tus dientes se vean más blancos y brillantes.',
  },
  {
    number: '05',
    title: 'Anestesia sin dolor',
    description:
      'Usamos técnicas que reducen las molestias del pinchazo, para que te atiendas tranquilo.',
  },
];

export function Treatments() {
  // Mobile accordion: item 0 open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getWhatsAppLink = (treatmentTitle: string) => {
    const text = `Hola Pro Dental Santiago, quiero consultar por ${treatmentTitle}.`;
    return `https://wa.me/56993960229?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="tratamientos"
      className="bg-surface py-20 md:py-32 scroll-mt-20 border-t border-ink/5"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-[13px] font-bold tracking-widest text-primary uppercase block mb-2">
              TRATAMIENTOS
            </span>
            <h2 className="font-display font-bold text-[32px] md:text-[52px] leading-[1.1] text-ink mb-4 md:mb-6">
              Todas las especialidades en un solo lugar.
            </h2>
            <p className="text-ink/80 text-[17px] leading-[1.6] mb-6">
              ¿No sabes cuál necesitas? Parte por tu evaluación sin costo y lo
              vemos juntos.
            </p>
            <a
              href={DENTALINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-ink text-[17px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md"
            >
              <span>Agendar evaluación sin costo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Column: Treatment Editorial List / Mobile Accordion */}
          <div className="lg:col-span-7 divide-y divide-ink/10 border-y border-ink/10">
            {TREATMENTS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.number} className="py-6 md:py-8 transition-colors">
                  {/* Mobile header (button for accordion) */}
                  <div className="md:hidden">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-lg"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-display font-bold text-2xl transition-colors ${
                            isOpen ? 'text-secondary' : 'text-primary'
                          }`}
                        >
                          {item.number}
                        </span>
                        <h3 className="font-display font-bold text-2xl text-ink">
                          {item.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-ink/60 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pt-3 pl-10 pr-2">
                        <p className="text-ink/80 text-[16px] leading-[1.6] mb-4">
                          {item.description}
                        </p>
                        <a
                          href={getWhatsAppLink(item.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-ink transition-colors"
                        >
                          <span>Consultar por WhatsApp</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Desktop view (always visible clean row) */}
                  <div className="hidden md:flex items-start gap-8 group">
                    <span className="font-display font-bold text-3xl text-primary group-hover:text-secondary transition-colors shrink-0 w-12 pt-1">
                      {item.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-[26px] text-ink mb-2">
                        {item.title}
                      </h3>
                      <p className="text-ink/80 text-[17px] leading-[1.6] mb-3 max-w-xl">
                        {item.description}
                      </p>
                      <a
                        href={getWhatsAppLink(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-[15px] text-primary hover:text-ink transition-colors"
                      >
                        <span>Consultar por WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

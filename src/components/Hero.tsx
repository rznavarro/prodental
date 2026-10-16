import { useState, useEffect } from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { SmileArc } from './SmileArc.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { getScheduleStatus, ScheduleStatus } from '../utils/schedule.ts';

const DENTALINK_URL =
  'https://2456e5e04b283a04d118fc40ab6cc3f21b716004.agenda.softwaredentalink.com/agendas/agendamiento';
const WHATSAPP_URL = `https://wa.me/56993960229?text=${encodeURIComponent(
  'Hola Pro Dental Santiago, me gustaría agendar una evaluación.'
)}`;
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Compa%C3%B1%C3%ADa%20de%20Jes%C3%BAs%201390%2C%20Santiago';

export function Hero() {
  const [schedule, setSchedule] = useState<ScheduleStatus>(() => getScheduleStatus());

  useEffect(() => {
    // Recalculate every minute
    const interval = setInterval(() => {
      setSchedule(getScheduleStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative bg-surface overflow-hidden pt-4 pb-8 md:pt-20 md:pb-28"
    >
      {/* Decorative static background circles */}
      <div
        className="absolute -top-24 -right-24 md:-top-32 md:-right-32 w-[340px] h-[340px] md:w-[520px] md:h-[520px] rounded-full bg-primary/10 pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -left-10 w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full bg-secondary/15 pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, subtext, CTAs, indicators */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag */}
            <div className="mb-2 md:mb-4">
              <span className="text-[12px] md:text-[13px] font-bold tracking-widest text-primary uppercase">
                CENTRO ODONTOLÓGICO · SANTIAGO CENTRO
              </span>
            </div>

            {/* Animated H1 Title */}
            <h1 className="font-display font-bold text-[36px] sm:text-[44px] lg:text-[76px] xl:text-[80px] leading-[1.05] tracking-tight text-ink mb-3 md:mb-6">
              <span
                className="inline-block animate-word mr-2"
                style={{ animationDelay: '0ms' }}
              >
                Reconcíliate
              </span>
              <span
                className="inline-block animate-word mr-2"
                style={{ animationDelay: '110ms' }}
              >
                con
              </span>
              <span
                className="inline-block animate-word mr-2"
                style={{ animationDelay: '220ms' }}
              >
                tu
              </span>
              <span
                className="inline-block relative text-primary animate-word"
                style={{ animationDelay: '330ms' }}
              >
                sonrisa.
                <span className="absolute left-0 right-0 -bottom-2 md:-bottom-3.5 w-full">
                  <SmileArc
                    strokeClass="stroke-primary"
                    strokeWidth={5}
                    animated={true}
                    className="w-full h-3 md:h-5"
                  />
                </span>
              </span>
            </h1>

            {/* Subline */}
            <p className="text-ink/85 text-[15px] sm:text-[17px] leading-[1.5] md:leading-[1.6] max-w-xl mb-4 md:mb-8 animate-hero-fade">
              Diseño de sonrisa, limpieza, blanqueamiento y alineadores
              invisibles. Tu primera evaluación es sin costo.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full mb-4 md:mb-8 animate-hero-fade">
              <a
                href={DENTALINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] min-h-[52px] px-6 rounded-full bg-primary text-ink font-bold text-[17px] flex items-center justify-center text-center shadow-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                Agendar evaluación sin costo
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] min-h-[52px] px-6 rounded-full border-2 border-ink text-ink font-bold text-[17px] flex items-center justify-center gap-2.5 text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                <WhatsAppIcon className="w-5 h-5 text-ink fill-ink" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>

            {/* Two Status / Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink animate-hero-fade">
              {/* Live Schedule Status Indicator */}
              <div className="flex items-center gap-2 font-medium">
                <span className="relative flex h-3 w-3">
                  {schedule.isOpen ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    </>
                  ) : (
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-ink/40"></span>
                  )}
                </span>
                <span className="text-[13px] sm:text-sm font-semibold">
                  {schedule.statusText}
                </span>
              </div>

              {/* Google Reviews Badge */}
              <div className="flex items-center gap-1.5 font-medium">
                <div className="flex items-center text-primary" aria-label="5 estrellas">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </div>
                <span className="text-[13px] sm:text-sm font-semibold">
                  134 reseñas en Google
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop): Floating White Card */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="bg-white rounded-3xl border border-ink/10 p-8 shadow-xs relative">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  ATENCIÓN EN SANTIAGO CENTRO
                </span>
                <h3 className="font-display font-bold text-2xl text-ink mt-1">
                  Tu evaluación es sin costo
                </h3>
              </div>

              {/* Schedule Info */}
              <div className="space-y-4 mb-6 text-sm text-ink/80 border-t border-b border-ink/10 py-5">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-ink">Horario de atención</p>
                    <p className="text-xs sm:text-sm">
                      Lunes a viernes: 08:00 a 18:00
                    </p>
                    <p className="text-xs sm:text-sm">
                      Sábados: 09:00 a 13:00
                    </p>
                    <p className="text-xs text-ink/60">Domingos: Cerrado</p>
                    <div className="pt-1.5 flex items-center gap-2">
                      <span
                        className={`inline-block w-2.5 h-2.5 rounded-full ${
                          schedule.isOpen ? 'bg-secondary animate-pulse' : 'bg-ink/30'
                        }`}
                      />
                      <span className="text-xs font-semibold text-ink">
                        {schedule.statusText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-ink">Ubicación</p>
                    <p className="text-xs sm:text-sm">
                      Compañía de Jesús 1390, Of. 618
                    </p>
                    <p className="text-xs text-ink/70">
                      Santiago Centro, Santiago
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-xs font-bold text-primary hover:underline"
                    >
                      Cómo llegar →
                    </a>
                  </div>
                </div>
              </div>

              {/* Card CTA */}
              <a
                href={DENTALINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[52px] rounded-full bg-primary text-ink font-bold text-[16px] flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                Agendar evaluación sin costo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

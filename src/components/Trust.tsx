import { ShieldCheck } from 'lucide-react';
import { SmileArc } from './SmileArc.tsx';

const DENTALINK_URL =
  'https://2456e5e04b283a04d118fc40ab6cc3f21b716004.agenda.softwaredentalink.com/agendas/agendamiento';

const PAYMENT_METHODS = [
  'Efectivo',
  'Redcompra',
  'Visa',
  'Mastercard',
  'Transferencia',
];

export function Trust() {
  return (
    <section
      id="confianza"
      className="bg-primary text-ink py-20 md:py-32 scroll-mt-20 relative overflow-hidden"
    >
      {/* Large subtle SmileArc separator at the top */}
      <div className="w-full max-w-xl mx-auto px-5 mb-10 opacity-15" aria-hidden="true">
        <SmileArc
          strokeClass="stroke-ink"
          strokeWidth={4}
          className="w-full h-8 md:h-12"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-5">
        {/* Section Tag & Heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[13px] font-bold tracking-widest text-ink uppercase block mb-2">
            POR QUÉ ELEGIRNOS
          </span>
          <h2 className="font-display font-bold text-[32px] md:text-[52px] leading-[1.1] text-ink">
            Atención profesional, amable y gentil.
          </h2>
        </div>

        {/* 4 Differentiator Blocks (2 columns on desktop, 1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Block 1: Evaluación sin costo */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-2 shrink-0 mt-2" aria-hidden="true">
              <SmileArc strokeClass="stroke-ink" strokeWidth={6} className="w-6 h-2" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[20px] text-ink mb-1">
                Evaluación sin costo
              </h3>
              <p className="text-ink/80 text-[17px] leading-[1.5]">
                Tu primera consulta de evaluación no se cobra.
              </p>
            </div>
          </div>

          {/* Block 2: Aprobada por la Seremi de Salud */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-2 shrink-0 mt-2" aria-hidden="true">
              <SmileArc strokeClass="stroke-ink" strokeWidth={6} className="w-6 h-2" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-[20px] text-ink">
                  Aprobada por la Seremi de Salud
                </h3>
                <ShieldCheck className="w-5 h-5 text-ink shrink-0" aria-label="Certificación oficial" />
              </div>
              <p className="text-ink/80 text-[17px] leading-[1.5]">
                Clínica aprobada y certificada por la Seremi de Salud.
              </p>
            </div>
          </div>

          {/* Block 3: Para toda la familia */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-2 shrink-0 mt-2" aria-hidden="true">
              <SmileArc strokeClass="stroke-ink" strokeWidth={6} className="w-6 h-2" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[20px] text-ink mb-1">
                Para toda la familia
              </h3>
              <p className="text-ink/80 text-[17px] leading-[1.5]">
                Cuidamos la salud dental de grandes y chicos.
              </p>
            </div>
          </div>

          {/* Block 4: Facilidades de pago */}
          <div className="flex items-start gap-3">
            <div className="w-6 h-2 shrink-0 mt-2" aria-hidden="true">
              <SmileArc strokeClass="stroke-ink" strokeWidth={6} className="w-6 h-2" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[20px] text-ink mb-1">
                Facilidades de pago
              </h3>
              <p className="text-ink/80 text-[17px] leading-[1.5] mb-3">
                Efectivo, Redcompra, Visa, Mastercard y transferencia.
              </p>
              {/* Payment pills */}
              <div className="flex flex-wrap gap-1.5">
                {PAYMENT_METHODS.map((method) => (
                  <span
                    key={method}
                    className="inline-block border border-ink/30 text-ink text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button at the end */}
        <div>
          <a
            href={DENTALINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full bg-ink text-white font-bold text-[17px] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Agendar evaluación sin costo
          </a>
        </div>
      </div>
    </section>
  );
}

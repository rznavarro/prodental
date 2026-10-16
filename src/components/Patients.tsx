import { SmileArc } from './SmileArc.tsx';

const DOCTORALIA_URL =
  'https://www.doctoralia.cl/clinicas/pro-dental-santiago';

interface Testimonial {
  name: string;
  source: 'Google' | 'Facebook';
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Gonzalo S.',
    source: 'Facebook',
    quote:
      'Fue el mejor lugar para atenderme, yo que le tengo terror a los odontólogos fui atendido por la doctora Ordoñez y fue lo mejor que me pudo pasar.',
  },
  {
    name: 'Matias C.',
    source: 'Google',
    quote:
      'Muy buena atención. La Doctora y su asistente muy amables, además de que el pinchazo de anestesia no se sintió. Proceso ágil y eficaz. Lo recomiendo.',
  },
  {
    name: 'Evelyn C.',
    source: 'Google',
    quote:
      'Escribí al WhatsApp para agendar hora para mis 2 hijas de 10 y 12 años, la respuesta fue rápida… mis hijas no sintieron ningún dolor ni molestia. La recomiendo 100%.',
  },
  {
    name: 'Carolina B.',
    source: 'Google',
    quote:
      'Fui a una consulta de evaluación y la Dra Soares fue muy amable en su atención, súper clara y transparente… Super facil agendar las horas.',
  },
  {
    name: 'Melissa M.',
    source: 'Google',
    quote:
      'Siempre me atiendo con la Dra. Maria y me encanta su atención y delicadeza. 100% recomendado el lugar.',
  },
];

export function Patients() {
  return (
    <section
      id="pacientes"
      className="bg-surface py-20 md:py-32 scroll-mt-20 border-t border-ink/5"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header with big 134 proof */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-12 md:mb-16">
          <div>
            <span className="text-[13px] font-bold tracking-widest text-primary uppercase block mb-1">
              OPINIONES REALES
            </span>
            <div className="inline-block relative">
              <span className="font-display font-bold text-[96px] md:text-[160px] leading-none text-primary tracking-tight">
                134
              </span>
              <div className="w-full mt-1">
                <SmileArc
                  strokeClass="stroke-secondary"
                  strokeWidth={6}
                  className="w-full h-4 md:h-6"
                />
              </div>
            </div>
          </div>

          <div className="pb-4">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-ink">
              reseñas en Google
            </h2>
            <p className="text-ink/70 text-sm md:text-base font-semibold mt-1">
              + 17 recomendaciones en Facebook
            </p>
          </div>
        </div>

        {/* Testimonials: Mobile Horizontal Scroll-snap Carousel */}
        <div className="md:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[84%] bg-white rounded-3xl border border-ink/10 p-6 flex flex-col justify-between"
            >
              <div>
                <span
                  className="font-display font-bold text-5xl text-secondary leading-none block mb-2 select-none"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="text-ink text-[16px] leading-[1.6] mb-6">
                  {t.quote}
                </p>
              </div>
              <div className="border-t border-ink/10 pt-3">
                <p className="font-display font-bold text-ink text-sm">
                  {t.name}
                </p>
                <p className="text-ink/60 text-xs font-semibold">{t.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials: Desktop Asymmetric Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {/* Card 1: Large spanning 2 columns */}
          <div className="col-span-2 bg-white rounded-3xl border border-ink/10 p-8 flex flex-col justify-between hover:border-ink/20 transition-colors">
            <div>
              <span
                className="font-display font-bold text-6xl text-secondary leading-none block mb-3 select-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="text-ink text-[20px] leading-[1.6] mb-8 font-medium">
                {TESTIMONIALS[0].quote}
              </p>
            </div>
            <div className="border-t border-ink/10 pt-4 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-ink text-base">
                  {TESTIMONIALS[0].name}
                </p>
                <p className="text-ink/60 text-xs font-semibold">
                  {TESTIMONIALS[0].source}
                </p>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Recomendación destacada
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-ink/10 p-7 flex flex-col justify-between hover:border-ink/20 transition-colors">
            <div>
              <span
                className="font-display font-bold text-5xl text-secondary leading-none block mb-2 select-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="text-ink text-[16px] leading-[1.6] mb-6">
                {TESTIMONIALS[1].quote}
              </p>
            </div>
            <div className="border-t border-ink/10 pt-3">
              <p className="font-display font-bold text-ink text-sm">
                {TESTIMONIALS[1].name}
              </p>
              <p className="text-ink/60 text-xs font-semibold">
                {TESTIMONIALS[1].source}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-ink/10 p-7 flex flex-col justify-between hover:border-ink/20 transition-colors">
            <div>
              <span
                className="font-display font-bold text-5xl text-secondary leading-none block mb-2 select-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="text-ink text-[16px] leading-[1.6] mb-6">
                {TESTIMONIALS[2].quote}
              </p>
            </div>
            <div className="border-t border-ink/10 pt-3">
              <p className="font-display font-bold text-ink text-sm">
                {TESTIMONIALS[2].name}
              </p>
              <p className="text-ink/60 text-xs font-semibold">
                {TESTIMONIALS[2].source}
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl border border-ink/10 p-7 flex flex-col justify-between hover:border-ink/20 transition-colors">
            <div>
              <span
                className="font-display font-bold text-5xl text-secondary leading-none block mb-2 select-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="text-ink text-[16px] leading-[1.6] mb-6">
                {TESTIMONIALS[3].quote}
              </p>
            </div>
            <div className="border-t border-ink/10 pt-3">
              <p className="font-display font-bold text-ink text-sm">
                {TESTIMONIALS[3].name}
              </p>
              <p className="text-ink/60 text-xs font-semibold">
                {TESTIMONIALS[3].source}
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-3xl border border-ink/10 p-7 flex flex-col justify-between hover:border-ink/20 transition-colors">
            <div>
              <span
                className="font-display font-bold text-5xl text-secondary leading-none block mb-2 select-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="text-ink text-[16px] leading-[1.6] mb-6">
                {TESTIMONIALS[4].quote}
              </p>
            </div>
            <div className="border-t border-ink/10 pt-3">
              <p className="font-display font-bold text-ink text-sm">
                {TESTIMONIALS[4].name}
              </p>
              <p className="text-ink/60 text-xs font-semibold">
                {TESTIMONIALS[4].source}
              </p>
            </div>
          </div>
        </div>

        {/* Doctoralia Link */}
        <div className="mt-8 text-center md:text-left">
          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[17px] text-ink hover:text-primary transition-colors underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm"
          >
            <span>Ver más opiniones en Doctoralia →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

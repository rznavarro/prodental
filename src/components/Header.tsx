import { useState, useEffect } from 'react';

const DENTALINK_URL =
  'https://2456e5e04b283a04d118fc40ab6cc3f21b716004.agenda.softwaredentalink.com/agendas/agendamiento';
const LOGO_URL =
  'https://prodentalsantiago.cl/wp-content/uploads/2023/04/2021-08-12.png';

export function Header() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 bg-surface transition-shadow duration-200 ${
        scrolled ? 'border-b border-ink/10 shadow-xs' : 'border-b border-ink/5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-16 md:h-20 flex items-center justify-between">
        {/* Logo or Fallback */}
        <a
          href="#inicio"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-lg"
          aria-label="Pro Dental Santiago - Inicio"
        >
          {!logoFailed ? (
            <img
              src={LOGO_URL}
              alt="Pro Dental Santiago"
              width={160}
              height={52}
              onError={() => setLogoFailed(true)}
              className="h-10 md:h-[52px] w-auto object-contain"
            />
          ) : (
            <span className="font-display font-bold text-primary text-xl md:text-2xl tracking-tight">
              Pro Dental Santiago
            </span>
          )}
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegación principal"
        >
          <a
            href="#tratamientos"
            className="text-ink font-semibold text-[15px] hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md px-1 py-0.5"
          >
            Tratamientos
          </a>
          <a
            href="#confianza"
            className="text-ink font-semibold text-[15px] hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md px-1 py-0.5"
          >
            Por qué elegirnos
          </a>
          <a
            href="#pacientes"
            className="text-ink font-semibold text-[15px] hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md px-1 py-0.5"
          >
            Pacientes
          </a>
          <a
            href="#agenda"
            className="text-ink font-semibold text-[15px] hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md px-1 py-0.5"
          >
            Agenda
          </a>

          {/* Desktop CTA Button */}
          <a
            href={DENTALINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-ink font-bold text-sm px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-all duration-200 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            Agendar hora
          </a>
        </nav>

        {/* Mobile Header CTA Button (No hamburger menu) */}
        <div className="md:hidden">
          <a
            href={DENTALINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-ink font-bold text-sm px-4 py-2 rounded-full active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
}

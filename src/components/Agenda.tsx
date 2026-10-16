import { useState } from 'react';
import { MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { getScheduleStatus } from '../utils/schedule.ts';

const DENTALINK_URL =
  'https://2456e5e04b283a04d118fc40ab6cc3f21b716004.agenda.softwaredentalink.com/agendas/agendamiento';
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Compa%C3%B1%C3%ADa%20de%20Jes%C3%BAs%201390%2C%20Santiago';
const EMAIL_ADDRESS = 'recepcionprodentalsantiago@gmail.com';

const TREATMENTS_OPTIONS = [
  'Evaluación sin costo',
  'Diseño de sonrisa',
  'Limpieza dental ultrasónica',
  'Blanqueamiento dental',
  'Alineadores invisibles',
  'Otro',
];

export function Agenda() {
  const [nombre, setNombre] = useState('');
  const [tratamiento, setTratamiento] = useState('Evaluación sin costo');
  const [dia, setDia] = useState<'Lunes a viernes' | 'Sábado'>('Lunes a viernes');
  const [mensaje, setMensaje] = useState('');
  const [errorNombre, setErrorNombre] = useState('');

  const schedule = getScheduleStatus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setErrorNombre('Por favor ingresa tu nombre');
      return;
    }
    setErrorNombre('');

    // Construct text: «Hola Pro Dental Santiago, soy {nombre}. Me interesa: {tratamiento}. Prefiero atenderme: {día}. {mensaje}»
    let whatsappText = `Hola Pro Dental Santiago, soy ${nombre.trim()}. Me interesa: ${tratamiento}. Prefiero atenderme: ${dia}.`;
    if (mensaje.trim()) {
      whatsappText += ` ${mensaje.trim()}`;
    }

    const url = `https://wa.me/56993960229?text=${encodeURIComponent(
      whatsappText
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="agenda"
      className="bg-primary/10 py-20 md:py-32 scroll-mt-20 border-t border-ink/5"
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-10 md:mb-14">
          <span className="text-[13px] font-bold tracking-widest text-primary uppercase block mb-2">
            RESERVA TU HORA
          </span>
          <h2 className="font-display font-bold text-[32px] md:text-[52px] leading-[1.1] text-ink">
            Agenda tu evaluación sin costo.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-ink/10 p-6 md:p-10 shadow-xs">
            <h3 className="font-display font-bold text-2xl text-ink mb-1">
              Escríbenos directamente
            </h3>
            <p className="text-ink/70 text-sm mb-6">
              Completa los datos y te atenderemos a la brevedad.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Field: Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block font-bold text-sm text-ink mb-1.5"
                >
                  Nombre <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    if (errorNombre) setErrorNombre('');
                  }}
                  placeholder="Tu nombre y apellido"
                  className={`w-full px-4 py-3 rounded-2xl bg-white text-ink text-[16px] outline-none transition-colors border ${
                    errorNombre
                      ? 'border-primary ring-1 ring-primary'
                      : 'border-ink/20 focus:border-primary focus:ring-1 focus:ring-primary'
                  }`}
                />
                {errorNombre && (
                  <p className="text-ink text-xs font-semibold mt-1.5">
                    {errorNombre}
                  </p>
                )}
              </div>

              {/* Field: Tratamiento de interés */}
              <div>
                <label
                  htmlFor="tratamiento"
                  className="block font-bold text-sm text-ink mb-1.5"
                >
                  Tratamiento de interés
                </label>
                <select
                  id="tratamiento"
                  value={tratamiento}
                  onChange={(e) => setTratamiento(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white text-ink text-[16px] border border-ink/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  {TREATMENTS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field: Día preferido */}
              <div>
                <span className="block font-bold text-sm text-ink mb-2">
                  Día preferido
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <label
                    className={`cursor-pointer flex items-center justify-center p-3 rounded-2xl border text-sm font-semibold transition-all ${
                      dia === 'Lunes a viernes'
                        ? 'border-primary bg-primary/10 text-ink'
                        : 'border-ink/20 bg-white text-ink/80 hover:border-ink/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="dia"
                      value="Lunes a viernes"
                      checked={dia === 'Lunes a viernes'}
                      onChange={() => setDia('Lunes a viernes')}
                      className="sr-only"
                    />
                    <span>Lunes a viernes</span>
                  </label>

                  <label
                    className={`cursor-pointer flex items-center justify-center p-3 rounded-2xl border text-sm font-semibold transition-all ${
                      dia === 'Sábado'
                        ? 'border-primary bg-primary/10 text-ink'
                        : 'border-ink/20 bg-white text-ink/80 hover:border-ink/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="dia"
                      value="Sábado"
                      checked={dia === 'Sábado'}
                      onChange={() => setDia('Sábado')}
                      className="sr-only"
                    />
                    <span>Sábado</span>
                  </label>
                </div>
              </div>

              {/* Field: Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block font-bold text-sm text-ink mb-1.5"
                >
                  Mensaje <span className="text-ink/60 font-normal">(opcional)</span>
                </label>
                <textarea
                  id="mensaje"
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="¿Tienes alguna consulta o detalle que quieras comentarnos?"
                  className="w-full px-4 py-3 rounded-2xl bg-white text-ink text-[16px] border border-ink/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-[52px] rounded-full bg-primary text-ink font-bold text-[17px] flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  <WhatsAppIcon className="w-5 h-5 text-ink fill-ink" />
                  <span>Enviar por WhatsApp</span>
                </button>
                <p className="text-ink/70 text-xs text-center mt-2.5">
                  Se abrirá WhatsApp con tu mensaje listo para enviar.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-ink/10 p-6 md:p-8 space-y-6 shadow-xs">
            <h3 className="font-display font-bold text-2xl text-ink">
              Datos de contacto
            </h3>

            {/* Dirección */}
            <div className="flex items-start gap-3.5 pt-2">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-ink text-sm">Dirección</p>
                <p className="text-ink/80 text-[15px] leading-relaxed">
                  Compañía de Jesús 1390, Of. 618
                </p>
                <p className="text-ink/70 text-sm">Santiago Centro, Santiago</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-1 text-sm font-bold text-primary hover:text-ink transition-colors"
                >
                  <span>Cómo llegar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="flex items-start gap-3.5 border-t border-ink/10 pt-4">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-ink text-sm">Horarios</p>
                <p className="text-ink/80 text-sm">
                  Lunes a viernes: 08:00 a 18:00
                </p>
                <p className="text-ink/80 text-sm">Sábados: 09:00 a 13:00</p>
                <p className="text-ink/60 text-xs">Domingos: Cerrado</p>
                <div className="pt-1 flex items-center gap-2">
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

            {/* WhatsApp */}
            <div className="flex items-start gap-3.5 border-t border-ink/10 pt-4">
              <WhatsAppIcon className="w-5 h-5 text-primary fill-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-ink text-sm">WhatsApp</p>
                <a
                  href={`https://wa.me/56993960229?text=${encodeURIComponent(
                    'Hola Pro Dental Santiago, me gustaría agendar una evaluación.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/80 hover:text-primary transition-colors text-sm font-semibold"
                >
                  +56 9 9396 0229
                </a>
              </div>
            </div>

            {/* Correo */}
            <div className="flex items-start gap-3.5 border-t border-ink/10 pt-4">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-ink text-sm">Correo electrónico</p>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-ink/80 hover:text-primary transition-colors text-sm break-all"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>

            {/* Alternative Online Booking CTA Button */}
            <div className="border-t border-ink/10 pt-6">
              <a
                href={DENTALINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[52px] rounded-full border-2 border-ink text-ink font-bold text-[16px] flex items-center justify-center hover:bg-ink hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                Prefiero agendar online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

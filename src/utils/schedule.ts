export interface ScheduleStatus {
  isOpen: boolean;
  statusText: string;
}

export function getScheduleStatus(): ScheduleStatus {
  try {
    const now = new Date();
    // Get formatted parts in Chile timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Santiago',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    let weekdayStr = '';
    let hour = 0;
    let minute = 0;

    for (const p of parts) {
      if (p.type === 'weekday') weekdayStr = p.value;
      if (p.type === 'hour') hour = parseInt(p.value, 10);
      if (p.type === 'minute') minute = parseInt(p.value, 10);
    }

    hour = hour % 24;
    const currentMinutes = hour * 60 + minute;

    // Weekday mapping (0 = Sun, 1 = Mon, ..., 6 = Sat)
    const dayMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };

    const day = dayMap[weekdayStr] ?? now.getDay();

    // Lunes a viernes: 08:00 a 18:00 (480 min a 1080 min)
    if (day >= 1 && day <= 5) {
      if (currentMinutes >= 480 && currentMinutes < 1080) {
        return {
          isOpen: true,
          statusText: 'Abierto ahora · hasta las 18:00',
        };
      }
    }

    // Sábado: 09:00 a 13:00 (540 min a 780 min)
    if (day === 6) {
      if (currentMinutes >= 540 && currentMinutes < 780) {
        return {
          isOpen: true,
          statusText: 'Abierto ahora · hasta las 13:00',
        };
      }
    }

    // Outside opening hours, calculate next opening:
    // Sunday (0): next is lunes a las 08:00
    if (day === 0) {
      return {
        isOpen: false,
        statusText: 'Cerrado ahora · abrimos lunes a las 08:00',
      };
    }

    // Monday - Thursday (1-4):
    if (day >= 1 && day <= 4) {
      if (currentMinutes < 480) {
        return {
          isOpen: false,
          statusText: 'Cerrado ahora · abrimos hoy a las 08:00',
        };
      } else {
        const nextDayName =
          day === 1
            ? 'martes'
            : day === 2
            ? 'miércoles'
            : day === 3
            ? 'jueves'
            : 'viernes';
        return {
          isOpen: false,
          statusText: `Cerrado ahora · abrimos ${nextDayName} a las 08:00`,
        };
      }
    }

    // Friday (5):
    if (day === 5) {
      if (currentMinutes < 480) {
        return {
          isOpen: false,
          statusText: 'Cerrado ahora · abrimos hoy a las 08:00',
        };
      } else {
        return {
          isOpen: false,
          statusText: 'Cerrado ahora · abrimos sábado a las 09:00',
        };
      }
    }

    // Saturday (6):
    if (day === 6) {
      if (currentMinutes < 540) {
        return {
          isOpen: false,
          statusText: 'Cerrado ahora · abrimos hoy a las 09:00',
        };
      } else {
        return {
          isOpen: false,
          statusText: 'Cerrado ahora · abrimos lunes a las 08:00',
        };
      }
    }

    return {
      isOpen: false,
      statusText: 'Cerrado ahora · abrimos lunes a las 08:00',
    };
  } catch {
    return {
      isOpen: false,
      statusText: 'Cerrado ahora · abrimos lunes a las 08:00',
    };
  }
}

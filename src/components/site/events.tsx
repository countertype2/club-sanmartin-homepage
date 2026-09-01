import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { events, formatLongDate, isUpcoming } from "./club-assets";
import { Reveal } from "./reveal";

export function Events() {
  const upcoming = events.filter((e) => isUpcoming(e.date)).sort((a, b) => a.date.localeCompare(b.date));
  const list = upcoming.length > 0 ? upcoming : [];
  const [featured, ...others] = list;

  return (
    <section id="eventos" className="section-y">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="label-xs text-club-yellow">Comunidad</p>
          <h2 className="heading-2 mt-4">Eventos del club</h2>
        </Reveal>

        {!featured ? (
          <Reveal className="mt-8">
            <p className="body-lg">
              Por ahora no tenemos eventos programados. Cuando confirmemos la próxima fecha, la vas a
              encontrar acá.
            </p>
            <Link to="/comunidad" className="btn-base btn-ghost mt-6">
              Ver la comunidad
            </Link>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
            <Reveal className="border-t-2 border-club-yellow pt-7">
              <p className="label-xs text-muted-text">{featured.type}</p>
              <p className="font-display mt-3 text-3xl leading-none font-extrabold uppercase md:text-5xl">
                {featured.dateLabel}
              </p>
              <h3 className="heading-3 mt-5 max-w-[24ch]">{featured.title}</h3>
              <p className="body-lg mt-4 max-w-[62ch]">{featured.description}</p>
              <Link to={featured.to} className="btn-base btn-ghost mt-7">
                Ver el evento
              </Link>
            </Reveal>

            <div className="border-t border-hairline lg:border-t-0 lg:border-l lg:pl-10">
              {others.map((event, i) => (
                <Reveal key={event.title} delay={i * 70}>
                  <Link
                    to={event.to}
                    className="group flex items-start justify-between gap-5 border-b border-hairline py-5"
                  >
                    <div>
                      <p className="label-xs text-muted-text">{event.type}</p>
                      <p className="font-display mt-2 text-xl leading-none font-bold uppercase transition-colors duration-[180ms] group-hover:text-club-yellow md:text-2xl">
                        {event.title}
                      </p>
                      <p className="mt-2 text-sm text-secondary-text">
                        {formatLongDate(event.date)}
                      </p>
                    </div>
                    <ArrowRight
                      className="arrow-shift mt-1 size-4 shrink-0 text-club-yellow"
                      strokeWidth={2.5}
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { events, clubPhotos } from "./club-assets";
import { Reveal, SectionLabel } from "./reveal";

export function Events() {
  const [featured, ...rest] = events;

  return (
    <section id="eventos" className="section-y border-t border-hairline">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Eventos y comunidad</SectionLabel>
            <h2 className="heading-2 mt-4">El club también se construye afuera de la cancha</h2>
            <p className="body-lg mt-4">
              Rifas, encuentros y actividades que nos ayudan a seguir sosteniendo el club y
              acompañando a nuestros jugadores.
            </p>
          </div>
          <a href="/eventos" className="btn-base btn-ghost group">
            Ver eventos
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          {featured && (
            <Reveal>
              <article className="card-surface group flex h-full flex-col overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={clubPhotos.infantiles}
                    alt="Familias y jugadores del club acompañando una jornada del barrio"
                    className="aspect-16/9 w-full object-cover transition-transform duration-[260ms] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-8">
                  <div>
                    <span className="label-xs inline-block rounded-[6px] bg-club-yellow px-2.5 py-1.5 text-dark-text">
                      {featured.type}
                    </span>
                    <h3 className="heading-3 mt-4">{featured.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-club-yellow">{featured.date}</p>
                    <p className="body-lg mt-3">{featured.description}</p>
                  </div>
                  <a href="/eventos" className="btn-base btn-yellow group w-full sm:w-fit">
                    {featured.cta}
                    <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
                  </a>
                </div>
              </article>
            </Reveal>
          )}

          <div className="grid gap-5">
            {rest.map((ev, i) => (
              <Reveal key={ev.title} delay={(i + 1) * 70} className="h-full">
                <article className="card-surface group flex h-full flex-col justify-between gap-6 p-6 md:p-7">
                  <div>
                    <span className="label-xs inline-block rounded-[6px] border border-hairline-strong px-2.5 py-1.5 text-secondary-text">
                      {ev.type}
                    </span>
                    <h3 className="card-title mt-4">{ev.title}</h3>
                    <p className="mt-2 text-sm text-muted-text">{ev.date}</p>
                    <p className="mt-3 text-secondary-text">{ev.description}</p>
                  </div>
                  <a
                    href="/eventos"
                    className="flex items-center gap-2 text-sm font-semibold uppercase text-club-yellow"
                  >
                    {ev.cta}
                    <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

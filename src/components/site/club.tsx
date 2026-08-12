import { ArrowRight } from "lucide-react";
import { clubPhotos } from "./club-assets";
import { Reveal, SectionLabel } from "./reveal";

const stats = [
  { value: "+180", label: "Jugadores" },
  { value: "6", label: "Categorías" },
  { value: "1948", label: "Desde" },
];

const quickLinks = [
  { label: "Nuestra historia", to: "/club" },
  { label: "Comisión directiva", to: "/club" },
  { label: "Nuestra cancha", to: "/cancha" },
];

export function TheClub() {
  return (
    <section id="club" className="section-y border-t border-hairline">
      <div className="shell-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="overflow-hidden rounded-[16px] border border-hairline">
          <img
            src={clubPhotos.primera}
            alt="Plantel de primera de Club San Martín antes de un partido de local"
            className="aspect-4/3 w-full object-cover lg:h-full"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={80} className="flex flex-col justify-center">
          <SectionLabel>Nuestro club</SectionLabel>
          <h2 className="heading-2 mt-4">Un semillero que no para de crecer</h2>
          <p className="body-lg mt-5">
            Somos una institución de barrio que trabaja para que chicos, jóvenes y adultos encuentren
            en el fútbol un espacio de formación, pertenencia y crecimiento.
          </p>
          <p className="body-lg mt-4">
            Nuestro semillero acompaña cada etapa del jugador y busca generar oportunidades para
            quienes sueñan con dar el próximo paso en su carrera deportiva.
          </p>

          <dl className="mt-9 grid grid-cols-3 gap-4 border-y border-hairline py-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="label-xs mt-1 text-muted-text">{stat.label}</dt>
                <dd className="font-display text-4xl leading-none font-extrabold md:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="card-surface group flex items-center justify-between gap-3 px-4 py-3.5"
              >
                <span className="text-sm font-semibold">{link.label}</span>
                <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { clubPhotos } from "./club-assets";
import { Reveal } from "./reveal";

const stats = [
  { value: "+180", label: "Jugadores" },
  { value: "6", label: "Categorías" },
  { value: "1948", label: "Desde" },
];

export function TheClub() {
  return (
    <section id="club" className="section-y">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <Reveal>
            <p className="label-xs text-club-yellow">Nuestro club</p>
            <h2 className="heading-2 mt-4">Un semillero que no para de crecer</h2>
            <p className="body-lg mt-6 max-w-[54ch]">
              Somos una institución de barrio que trabaja para que chicos, jóvenes y adultos
              encuentren en el fútbol un espacio de formación, pertenencia y crecimiento.
            </p>
            <p className="body-lg mt-4 max-w-[54ch]">
              Nuestro semillero acompaña cada etapa del jugador y busca generar oportunidades para
              quienes sueñan con dar el próximo paso.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-5xl leading-none font-extrabold md:text-6xl">
                    {stat.value}
                  </dd>
                  <dt className="label-xs mt-2 text-muted-text">{stat.label}</dt>
                </div>
              ))}
            </dl>

            <Link
              to="/club"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Conocé nuestra historia
              <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
            </Link>
          </Reveal>

          {/* Collage editorial asimétrico: 1 principal 4:3 + 2 secundarias 3:2 */}
          <div className="grid grid-cols-12 gap-4 md:gap-5">
            <Reveal className="group col-span-12 md:col-span-11">
              <figure className="media-frame">
                <img
                  src={clubPhotos.primera}
                  alt="Plantel de Club San Martín formado en la cancha antes de un partido de local"
                  className="media-zoom aspect-4/3 w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </Reveal>

            <Reveal delay={90} className="group col-span-7 md:col-span-6 md:col-start-3">
              <figure className="media-frame">
                <img
                  src={clubPhotos.juveniles}
                  alt="Juveniles de Club San Martín posando con la camiseta del club"
                  className="media-zoom aspect-3/2 w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </Reveal>

            <Reveal delay={160} className="group col-span-5 self-end md:col-span-4">
              <figure className="media-frame">
                <img
                  src={clubPhotos.infantiles}
                  alt="Categorías infantiles de Club San Martín en una jornada del semillero"
                  className="media-zoom aspect-3/2 w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

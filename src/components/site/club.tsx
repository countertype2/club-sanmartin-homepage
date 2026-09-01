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
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <p className="label-xs text-club-yellow">Nuestro club</p>
          <h2 className="heading-2 mt-4">Un semillero que no para de crecer</h2>
          <p className="body-lg mt-5 max-w-[60ch]">
            Somos una institución de barrio que trabaja para que chicos, jóvenes y adultos encuentren
            en el fútbol un espacio de formación, pertenencia y crecimiento.
          </p>
          <p className="body-lg mt-4 max-w-[60ch]">
            Nuestro semillero acompaña cada etapa del jugador y busca generar oportunidades para
            quienes sueñan con dar el próximo paso en su carrera deportiva.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-5xl leading-none font-extrabold md:text-6xl">
                  {stat.value}
                </dd>
                <dt className="label-xs mt-2 text-muted-text">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <Link to="/club" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold">
            Conocé nuestra historia
            <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
          </Link>
        </Reveal>

        <Reveal delay={80} className="relative">
          <img
            src={clubPhotos.primera}
            alt="Plantel de Club San Martín formado en la cancha antes de un partido de local"
            className="aspect-4/3 w-full object-cover"
            loading="lazy"
          />
          <img
            src={clubPhotos.infantiles}
            alt="Categorías infantiles de Club San Martín en una jornada del semillero"
            className="mt-4 hidden aspect-16/9 w-2/3 object-cover md:block"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

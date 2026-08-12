import { ArrowRight, MapPin } from "lucide-react";
import { clubPhotos } from "./club-assets";
import { Reveal, SectionLabel } from "./reveal";

export function Ground() {
  return (
    <section id="cancha" className="section-y border-t border-hairline">
      <div className="shell-wide grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal className="flex flex-col justify-center">
          <SectionLabel>Nuestra casa</SectionLabel>
          <h2 className="heading-2 mt-4">La cancha del barrio</h2>
          <p className="body-lg mt-5 max-w-lg">
            El lugar donde entrenamos, competimos y compartimos nuestra pasión por el fútbol.
          </p>
          <p className="mt-6 flex items-start gap-3 text-secondary-text">
            <MapPin className="mt-0.5 size-5 shrink-0 text-club-yellow" strokeWidth={1.75} />
            <span>
              <span className="block font-semibold">Predio Club San Martín</span>
              Av. San Martín y Los Álamos, barrio San Martín
            </span>
          </p>
          <a href="/cancha" className="btn-base btn-ghost group mt-8 w-fit">
            Conocé nuestra cancha
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
        </Reveal>

        <Reveal delay={80} className="overflow-hidden rounded-[16px] border border-hairline">
          <img
            src={clubPhotos.juveniles}
            alt="Cancha de Club San Martín con el plantel de inferiores en el campo de juego"
            className="aspect-16/10 w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

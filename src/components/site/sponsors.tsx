import { ArrowRight } from "lucide-react";
import { sponsors } from "./club-assets";
import { Reveal } from "./reveal";

export function Sponsors() {
  return (
    <section id="patrocinadores" className="section-y bg-white text-dark-text">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="rule-yellow" aria-hidden="true" />
            <span className="label-xs text-club-blue">Patrocinadores</span>
          </div>
          <h2 className="heading-2 mt-4">Crezcamos juntos</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3b4252]">
            Acompañar al club es invertir en deporte, formación y comunidad.
          </p>
          <p className="mt-4 text-[#3b4252]">
            Tu empresa puede ayudarnos a seguir generando oportunidades para nuestros jugadores
            mientras conecta su marca con las familias y vecinos que forman parte de nuestra
            institución.
          </p>
          <a href="/patrocinadores" className="btn-base btn-blue group mt-8">
            Quiero patrocinar al club
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
        </Reveal>

        <Reveal delay={80}>
          <p className="label-xs text-[#6b7280]">Nos acompañan</p>
          <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-[#e5e7eb] sm:grid-cols-3">
            {sponsors.map((name) => (
              <li
                key={name}
                className="flex min-h-28 items-center justify-center bg-white px-4 text-center font-display text-lg font-bold uppercase tracking-wide text-[#4b5563] transition-colors duration-[220ms] hover:text-club-blue"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function Membership() {
  return (
    <section id="socios" className="border-y border-hairline bg-surface-blue">
      <div className="shell grid gap-10 py-16 md:py-24 lg:grid-cols-[1.85fr_1fr] lg:gap-16">
        <Reveal>
          <p className="label-xs text-club-yellow">Tu aporte también juega</p>
          <h2 className="heading-2 mt-4">Hacete socio</h2>
          <p className="body-lg mt-5 max-w-[60ch]">
            Ser socio es sostener el día a día del club: los entrenamientos de cada categoría, el
            mantenimiento de la cancha y la formación de los chicos del barrio.
          </p>
          <ul className="mt-7 space-y-3 text-secondary-text">
            <li className="flex gap-3">
              <span className="text-club-yellow">·</span> Carnet de socio del club
            </li>
            <li className="flex gap-3">
              <span className="text-club-yellow">·</span> Acompañás a todas las categorías, no solo a
              una
            </li>
            <li className="flex gap-3">
              <span className="text-club-yellow">·</span> Formás parte de las decisiones de la vida
              institucional
            </li>
          </ul>
          <Link to="/socios" className="btn-base btn-yellow mt-9">
            Hacete socio
          </Link>
        </Reveal>

        <Reveal delay={80} className="border-t border-hairline pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <p className="label-xs text-muted-text">Afiliación</p>
          <h3 className="font-display mt-3 text-2xl leading-none font-bold uppercase">
            Un aporte más accesible
          </h3>
          <p className="mt-4 text-secondary-text">
            Si todavía no querés asumir la cuota de socio, la afiliación te permite acompañar al club
            con un aporte menor y tu carnet oficial.
          </p>
          <Link
            to="/afiliados"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold"
          >
            Conocer la afiliación
            <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "./reveal";

const options = [
  {
    title: "Jugador",
    copy: "Entrená, competí y crecé con nosotros. Conocé nuestras categorías y encontrá el espacio ideal para empezar o continuar tu camino en el fútbol.",
    cta: "Quiero jugar",
    to: "/quiero-jugar",
    featured: false,
  },
  {
    title: "Afiliado",
    copy: "Con un aporte accesible podés obtener tu carnet oficial y ayudar directamente al funcionamiento diario del club.",
    cta: "Quiero afiliarme",
    to: "/afiliados",
    featured: false,
  },
  {
    title: "Socio",
    copy: "Convertite en socio y acompañá de forma activa el crecimiento del club, el mantenimiento de nuestras actividades y la formación de nuestros jugadores.",
    cta: "Hacete socio",
    to: "/socios",
    featured: true,
  },
];

export function WaysToJoin() {
  return (
    <section id="sumate" className="section-y border-t border-hairline">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionLabel>Tu aporte también juega</SectionLabel>
          <h2 className="heading-2 mt-4">Sumate al club</h2>
          <p className="body-lg mt-4">
            Hay muchas formas de ser parte. Elegí la que mejor represente cómo querés acompañarnos.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {options.map((opt, i) => (
            <Reveal key={opt.title} delay={i * 70} className="h-full">
              <article
                className={`flex h-full flex-col justify-between gap-8 rounded-[14px] border p-6 transition-transform duration-[260ms] hover:-translate-y-1 md:p-8 ${
                  opt.featured
                    ? "border-club-yellow/40 bg-surface-blue lg:-mt-4 lg:pb-10"
                    : "border-hairline bg-surface"
                }`}
              >
                <div>
                  {opt.featured && (
                    <>
                      <span className="rule-yellow mb-5" aria-hidden="true" />
                      <span className="label-xs mb-4 inline-block rounded-[6px] bg-club-yellow px-2.5 py-1.5 text-dark-text">
                        Apoyo principal
                      </span>
                    </>
                  )}
                  <h3 className="heading-3">{opt.title}</h3>
                  <p className="body-lg mt-4">{opt.copy}</p>
                  {opt.featured && (
                    <ul className="mt-5 space-y-2 text-sm text-secondary-text">
                      <li className="flex gap-2">
                        <span className="text-club-yellow">—</span> Carnet de socio y beneficios en
                        entradas
                      </li>
                      <li className="flex gap-2">
                        <span className="text-club-yellow">—</span> Descuentos en actividades y
                        eventos del club
                      </li>
                      <li className="flex gap-2">
                        <span className="text-club-yellow">—</span> Apoyo directo a la formación de
                        nuestros jugadores
                      </li>
                    </ul>
                  )}
                </div>
                <a
                  href={opt.to}
                  className={`btn-base group w-full ${opt.featured ? "btn-yellow" : "btn-ghost"}`}
                >
                  {opt.cta}
                  <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

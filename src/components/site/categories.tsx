import { ArrowRight } from "lucide-react";
import { categories } from "./club-assets";
import { Reveal, SectionLabel } from "./reveal";

export function Categories() {
  return (
    <section id="categorias" className="section-y border-t border-hairline">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionLabel>Nuestras categorías</SectionLabel>
          <h2 className="heading-2 mt-4">Un club para cada etapa</h2>
          <p className="body-lg mt-4">
            Desde los primeros pasos hasta las categorías mayores, acompañamos a cada jugador en su
            crecimiento deportivo.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal as="li" key={cat.name} delay={i * 60}>
              <a
                href="/categorias"
                className="card-surface group relative flex h-full flex-col justify-between gap-10 overflow-hidden p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-[3px] w-10 origin-left scale-x-0 bg-club-yellow transition-transform duration-[260ms] group-hover:scale-x-100"
                />
                <div>
                  <p className="label-xs text-muted-text">{cat.range}</p>
                  <h3 className="card-title mt-2">{cat.name}</h3>
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold uppercase">
                  Ver categoría
                  <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80} className="mt-10 flex flex-wrap gap-3">
          <a href="/categorias" className="btn-base btn-blue group">
            Conocé nuestras categorías
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
          <a href="/quiero-jugar" className="btn-base btn-ghost group">
            Quiero jugar
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

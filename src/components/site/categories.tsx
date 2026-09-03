import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "./club-assets";
import { Reveal } from "./reveal";

export function FormationPath() {
  const [active, setActive] = useState(0);
  const current = categories[active]!;
  const progress = ((active + 1) / categories.length) * 100;

  return (
    <section id="categorias" className="border-y border-hairline bg-surface">
      <div className="shell py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="label-xs text-club-yellow">Ruta de formación</p>
          <h2 className="heading-2 mt-4">Del semillero al plantel mayor</h2>
          <p className="body-lg mt-5 max-w-[60ch]">
            Cada categoría es un paso dentro del mismo camino: entrenar, competir y crecer en el
            club.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* Trayectoria: línea de progreso + categorías */}
          <div className="flex gap-6">
            <div
              className="relative w-[3px] shrink-0 bg-hairline"
              aria-hidden="true"
            >
              <span
                className="absolute inset-x-0 top-0 block bg-club-yellow transition-[height] duration-[450ms] ease-out"
                style={{ height: `${progress}%` }}
              />
            </div>

            <ol className="flex-1 border-t border-hairline">
              {categories.map((cat, i) => {
                const isActive = i === active;
                return (
                  <Reveal as="li" key={cat.name} delay={i * 45}>
                    <Link
                      to="/futbol"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="group flex items-center gap-5 border-b border-hairline py-5 transition-colors duration-[180ms] md:gap-8 md:py-6"
                    >
                      <span
                        className={`font-display w-8 shrink-0 text-lg leading-none font-bold tabular-nums transition-colors duration-[180ms] ${isActive ? "text-club-yellow" : "text-muted-text"}`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display flex-1 text-2xl leading-none font-bold uppercase transition-all duration-[260ms] md:text-4xl ${isActive ? "translate-x-1 text-white" : "text-secondary-text"}`}
                      >
                        {cat.name}
                      </span>
                      <span className="text-sm font-medium text-muted-text md:text-base">
                        {cat.range}
                      </span>
                      <ArrowRight
                        className={`size-5 shrink-0 text-club-yellow transition-all duration-[180ms] ${isActive ? "translate-x-1 opacity-100" : "opacity-35"}`}
                        strokeWidth={2.5}
                      />
                    </Link>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          {/* Apoyo visual de la categoría activa */}
          <Reveal delay={80} className="lg:sticky lg:top-28">
            <figure className="media-frame">
              <img
                key={current.image}
                src={current.image}
                alt={`Categoría ${current.name} de Club San Martín`}
                className="enter-soft aspect-3/2 w-full object-cover"
                loading="lazy"
              />
            </figure>
            <p className="label-xs mt-6 text-club-yellow">{current.range}</p>
            <h3 className="font-display mt-3 text-3xl leading-none font-bold uppercase md:text-4xl">
              {current.name}
            </h3>
            <p key={current.focus} className="enter-soft body-lg mt-4 max-w-[46ch]">
              {current.focus}
            </p>
            <Link to="/futbol" className="btn-base btn-ghost mt-7">
              Encontrá tu categoría
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

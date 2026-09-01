import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "./club-assets";
import { Reveal } from "./reveal";

export function FormationPath() {
  return (
    <section id="categorias" className="border-y border-hairline bg-surface">
      <div className="shell py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="label-xs text-club-yellow">Ruta de formación</p>
          <h2 className="heading-2 mt-4">Del semillero al plantel mayor</h2>
          <p className="body-lg mt-5 max-w-[60ch]">
            Cada categoría es un paso dentro del mismo camino: entrenar, competir y crecer en el club.
          </p>
        </Reveal>

        <ol className="mt-12 border-t border-hairline">
          {categories.map((cat, i) => (
            <Reveal as="li" key={cat.name} delay={i * 50}>
              <Link
                to="/futbol"
                className="group flex items-center gap-5 border-b border-hairline py-5 transition-colors duration-[180ms] hover:bg-club-blue/25 md:gap-8 md:py-6"
              >
                <span className="font-display w-8 shrink-0 text-lg leading-none font-bold text-muted-text tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display flex-1 text-2xl leading-none font-bold uppercase md:text-4xl">
                  {cat.name}
                </span>
                <span className="text-sm font-medium text-secondary-text md:text-base">
                  {cat.range}
                </span>
                <ArrowRight
                  className="arrow-shift size-5 shrink-0 text-club-yellow"
                  strokeWidth={2.5}
                />
              </Link>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <h3 className="heading-3 max-w-md">¿Querés entrenar con nosotros?</h3>
          <Link to="/futbol" className="btn-base btn-ghost">
            Encontrá tu categoría
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

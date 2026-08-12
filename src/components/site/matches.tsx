import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { results, upcoming } from "./club-assets";
import { Reveal, SectionLabel } from "./reveal";

const tabs = ["Próximos", "Resultados"] as const;

export function Matches() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Próximos");

  return (
    <section id="partidos" className="section-y border-t border-hairline">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Partidos y resultados</SectionLabel>
            <h2 className="heading-2 mt-4">El club en la cancha</h2>
          </div>
          <a href="/partidos" className="btn-base btn-ghost group">
            Ver todos los partidos
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
        </Reveal>

        <Reveal delay={60} className="mt-9">
          <div className="flex gap-8 border-b border-hairline" role="tablist" aria-label="Partidos">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`relative pb-3 font-display text-xl font-bold uppercase transition-colors duration-[180ms] ${
                  tab === t ? "text-white" : "text-muted-text hover:text-white"
                }`}
              >
                {t}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px left-0 h-[3px] w-full origin-left bg-club-yellow transition-transform duration-[260ms]"
                  style={{ transform: tab === t ? "scaleX(1)" : "scaleX(0)" }}
                />
              </button>
            ))}
          </div>

          <ul className="mt-2">
            {tab === "Próximos"
              ? upcoming.map((m) => (
                  <li
                    key={m.home + m.date}
                    className="grid gap-3 border-b border-hairline py-5 transition-colors duration-[220ms] hover:bg-surface md:grid-cols-[110px_1fr_auto] md:items-center md:px-3"
                  >
                    <span className="label-xs text-club-yellow">{m.category}</span>
                    <div className="font-display text-2xl leading-none font-bold uppercase md:text-3xl">
                      {m.home} <span className="text-muted-text">vs</span> {m.away}
                    </div>
                    <div className="text-sm text-muted-text md:text-right">
                      <span className="font-semibold text-secondary-text">
                        {m.date} · {m.time}
                      </span>
                      <span className="block">{m.place}</span>
                    </div>
                  </li>
                ))
              : results.map((m) => (
                  <li
                    key={m.home + m.date}
                    className="grid gap-3 border-b border-hairline py-5 transition-colors duration-[220ms] hover:bg-surface md:grid-cols-[110px_1fr_auto] md:items-center md:px-3"
                  >
                    <span className="label-xs text-muted-text">{m.category}</span>
                    <div className="flex flex-wrap items-baseline gap-3 font-display text-2xl leading-none font-bold uppercase md:text-3xl">
                      <span>{m.home}</span>
                      <span className="text-club-yellow tabular-nums">{m.score}</span>
                      <span>{m.away}</span>
                    </div>
                    <span className="text-sm text-muted-text md:text-right">{m.date}</span>
                  </li>
                ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

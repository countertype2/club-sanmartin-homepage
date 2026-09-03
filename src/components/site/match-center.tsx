import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatMatchDate, isUpcoming, lastResult, nextMatch } from "./club-assets";

function useSeen() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
}

/**
 * Sports plate overlapping the bottom edge of the hero. Dark blue, hairline
 * border, thin yellow accent — never a generic white card.
 */
export function MatchCenter() {
  const upcoming = isUpcoming(nextMatch.date);
  const { ref, seen } = useSeen();

  return (
    <section id="partidos" className="relative z-10 -mt-10 md:-mt-24">
      <div className="shell-wide" ref={ref}>
        <div className="relative overflow-hidden rounded-[6px] border border-hairline-strong bg-[#0a1budefined]">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-club-yellow" aria-hidden="true" />
          <div
            className="grid gap-8 bg-surface-blue/95 p-6 backdrop-blur-md md:grid-cols-[1.6fr_1fr] md:gap-12 md:p-10"
            style={{ backgroundColor: "rgba(10,20,52,0.94)" }}
          >
            <div>
              <p className="label-xs text-club-yellow">
                {upcoming ? "Próximo partido" : "Partido programado"} · {nextMatch.competition}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4 md:gap-10">
                <div
                  className={`flex flex-col items-center gap-3 md:flex-row md:gap-4 ${seen ? "enter-left" : "opacity-0"}`}
                  style={{ animationDelay: "60ms" }}
                >
                  <img
                    src={nextMatch.home.crest}
                    alt={`Escudo de ${nextMatch.home.name}`}
                    className="size-14 md:size-20"
                  />
                  <span className="font-display text-2xl leading-none font-bold uppercase md:text-4xl">
                    {nextMatch.home.name}
                  </span>
                </div>

                <span
                  className={`font-display text-xl leading-none font-bold text-club-yellow uppercase md:text-3xl ${seen ? "enter-soft" : "opacity-0"}`}
                  style={{ animationDelay: "320ms" }}
                >
                  vs
                </span>

                <div
                  className={`flex flex-col items-center gap-3 md:flex-row-reverse md:gap-4 ${seen ? "enter-right" : "opacity-0"}`}
                  style={{ animationDelay: "60ms" }}
                >
                  <img
                    src={nextMatch.away.crest}
                    alt={`Escudo de ${nextMatch.away.name}`}
                    className="size-14 md:size-20"
                  />
                  <span className="font-display text-2xl leading-none font-bold uppercase md:text-4xl">
                    {nextMatch.away.name}
                  </span>
                </div>
              </div>

              <div
                className={`mt-7 flex flex-wrap items-end justify-between gap-5 border-t border-hairline pt-6 ${seen ? "enter-soft" : "opacity-0"}`}
                style={{ animationDelay: "500ms" }}
              >
                <div>
                  <p className="font-display text-2xl leading-none font-bold uppercase md:text-4xl">
                    {formatMatchDate(nextMatch.date)}
                    <span className="ml-3 text-club-yellow">{nextMatch.time}</span>
                  </p>
                  <p className="mt-3 text-sm text-muted-text">{nextMatch.place}</p>
                </div>
                <Link
                  to="/futbol"
                  className="group inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Ver fixture
                  <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div
              className={`border-t border-hairline pt-7 md:border-t-0 md:border-l md:pt-0 md:pl-10 ${seen ? "enter-soft" : "opacity-0"}`}
              style={{ animationDelay: "620ms" }}
            >
              <p className="label-xs text-muted-text">Último resultado</p>
              <div className="mt-5 flex items-center gap-4">
                <img
                  src={lastResult.home.crest}
                  alt={`Escudo de ${lastResult.home.name}`}
                  className="size-9"
                  loading="lazy"
                />
                <span className="font-display text-xl leading-none font-bold uppercase">
                  {lastResult.home.name}
                </span>
                <span className="font-display ml-auto text-3xl leading-none font-extrabold tabular-nums">
                  {lastResult.home.score} <span className="text-muted-text">-</span>{" "}
                  {lastResult.away.score}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={lastResult.away.crest}
                  alt={`Escudo de ${lastResult.away.name}`}
                  className="size-9"
                  loading="lazy"
                />
                <span className="font-display text-xl leading-none font-bold uppercase">
                  {lastResult.away.name}
                </span>
              </div>
              <p className="mt-5 text-sm text-muted-text">
                {formatMatchDate(lastResult.date)} · {lastResult.place}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

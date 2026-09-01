import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatMatchDate, isUpcoming, lastResult, nextMatch } from "./club-assets";
import { Reveal } from "./reveal";

function Crest({ src, name }: { src: string; name: string }) {
  return <img src={src} alt={`Escudo de ${name}`} className="size-14 md:size-20" loading="lazy" />;
}

export function MatchCenter() {
  const upcoming = isUpcoming(nextMatch.date);

  return (
    <section id="partidos" className="border-b border-hairline bg-surface-blue">
      <div className="shell py-14 md:py-20">
        <Reveal className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <div>
            <p className="label-xs text-club-yellow">
              {upcoming ? "Próximo partido" : "Partido programado"}
            </p>

            <div className="mt-6 flex items-center justify-between gap-4 border-b border-hairline pb-7 md:justify-start md:gap-10">
              <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
                <Crest src={nextMatch.home.crest} name={nextMatch.home.name} />
                <span className="font-display text-2xl leading-none font-bold uppercase md:text-4xl">
                  {nextMatch.home.name}
                </span>
              </div>
              <span className="font-display text-xl leading-none font-bold text-club-yellow uppercase md:text-3xl">
                vs
              </span>
              <div className="flex flex-col items-center gap-3 md:flex-row-reverse md:gap-4">
                <Crest src={nextMatch.away.crest} name={nextMatch.away.name} />
                <span className="font-display text-2xl leading-none font-bold uppercase md:text-4xl">
                  {nextMatch.away.name}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="font-display text-3xl leading-none font-bold uppercase md:text-5xl">
                  {formatMatchDate(nextMatch.date)}
                </p>
                <p className="font-display mt-2 text-2xl leading-none font-bold text-club-yellow md:text-3xl">
                  {nextMatch.time}
                </p>
                <p className="mt-3 text-sm text-muted-text">
                  {nextMatch.place} · {nextMatch.competition}
                </p>
              </div>
              <Link to="/futbol" className="group inline-flex items-center gap-2 text-sm font-semibold">
                Ver fixture
                <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <div className="border-t border-hairline pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
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
        </Reveal>
      </div>
    </section>
  );
}

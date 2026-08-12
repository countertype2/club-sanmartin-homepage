import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { news } from "./club-assets";
import { Reveal, SectionLabel } from "./reveal";

export function FeaturedNews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % news.length), 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  const item = news[index]!;

  return (
    <section id="noticias" className="section-y border-t border-hairline">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Últimas noticias</SectionLabel>
            <h2 className="heading-2 mt-4">Todo lo que pasa en el club</h2>
            <p className="body-lg mt-3 max-w-lg">
              Dentro y fuera de la cancha, el club se mueve todos los días.
            </p>
          </div>
          <a href="/noticias" className="btn-base btn-ghost group">
            Ver todas las noticias
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-10 grid overflow-hidden rounded-[16px] border border-hairline bg-surface lg:grid-cols-[1.2fr_1fr]"
        >
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <img
              key={item.image}
              src={item.image}
              alt={item.alt}
              className="media-reveal aspect-16/10 w-full object-cover lg:aspect-auto lg:h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
            <div key={index} className="hero-in">
              <span className="label-xs inline-block rounded-[6px] bg-club-blue px-2.5 py-1.5 text-white">
                {item.category}
              </span>
              <h3 className="heading-3 mt-5">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-text">{item.date}</p>
              <p className="body-lg mt-4">{item.description}</p>
              <a
                href="/noticias"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-club-yellow"
              >
                Leer noticia
                <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
              </a>
            </div>

            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2" role="tablist" aria-label="Noticias destacadas">
                {news.map((n, i) => (
                  <button
                    key={n.title}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Ver noticia: ${n.title}`}
                    onClick={() => setIndex(i)}
                    className="flex h-11 items-center"
                  >
                    <span
                      className="h-[3px] transition-all duration-[260ms]"
                      style={{
                        width: i === index ? 44 : 20,
                        background: i === index ? "#f9ed0e" : "rgba(255,255,255,0.24)",
                      }}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Noticia anterior"
                  onClick={() => setIndex((i) => (i - 1 + news.length) % news.length)}
                  className="flex size-11 items-center justify-center rounded-[8px] border border-hairline-strong transition-colors duration-[180ms] hover:border-white/60"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Noticia siguiente"
                  onClick={() => setIndex((i) => (i + 1) % news.length)}
                  className="flex size-11 items-center justify-center rounded-[8px] border border-hairline-strong transition-colors duration-[180ms] hover:border-white/60"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

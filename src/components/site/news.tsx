import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatLongDate, news } from "./club-assets";
import { Reveal } from "./reveal";

export function FeaturedNews() {
  const [lead, ...rest] = news;
  const secondary = rest.slice(0, 2);
  if (!lead) return null;

  return (
    <section id="noticias" className="section-y">
      <div className="shell">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-hairline pb-7">
          <div>
            <p className="label-xs text-club-yellow">Noticias</p>
            <h2 className="heading-2 mt-4">Todo lo que pasa en el club</h2>
          </div>
          <Link
            to="/comunidad"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            Ver todas las noticias
            <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
          </Link>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          {/* Nota principal — imagen 4:3, marco editorial */}
          <Reveal>
            <Link to={lead.to} className="group block pt-9">
              <p className="label-xs text-club-yellow">
                {lead.category} · {formatLongDate(lead.date)}
              </p>
              <h3 className="heading-3 mt-4 max-w-[26ch] transition-colors duration-[180ms] group-hover:text-club-yellow">
                {lead.title}
              </h3>
              <figure className="media-frame mt-7">
                <img
                  src={lead.image}
                  alt={lead.alt}
                  className="media-zoom aspect-4/3 w-full object-cover"
                  loading="lazy"
                />
              </figure>
              <p className="body-lg mt-5 max-w-[62ch]">{lead.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Leer la nota
                <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
              </span>
            </Link>
          </Reveal>

          {/* Notas secundarias — imagen 3:2 */}
          <div className="flex flex-col divide-y divide-hairline lg:border-l lg:border-hairline lg:pl-10">
            {secondary.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Link to={item.to} className="group block py-8 first:lg:pt-9">
                  <p className="label-xs text-muted-text">
                    {item.category} · {formatLongDate(item.date)}
                  </p>
                  <h3 className="font-display mt-2 text-xl leading-[1.05] font-bold uppercase transition-colors duration-[180ms] group-hover:text-club-yellow md:text-2xl">
                    {item.title}
                  </h3>
                  <figure className="media-frame mt-5">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="media-zoom aspect-3/2 w-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-xs text-club-yellow">Noticias</p>
            <h2 className="heading-2 mt-4">Todo lo que pasa en el club</h2>
          </div>
          <Link to="/comunidad" className="group inline-flex items-center gap-2 text-sm font-semibold">
            Ver todas las noticias
            <ArrowRight className="arrow-shift size-4 text-club-yellow" strokeWidth={2.5} />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          <Reveal>
            <Link to={lead.to} className="group block">
              <div className="overflow-hidden">
                <img
                  src={lead.image}
                  alt={lead.alt}
                  className="aspect-16/10 w-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <p className="label-xs mt-6 text-club-yellow">
                {lead.category} · {formatLongDate(lead.date)}
              </p>
              <h3 className="heading-3 mt-3 max-w-[24ch] transition-colors duration-[180ms] group-hover:text-club-yellow">
                {lead.title}
              </h3>
              <p className="body-lg mt-4 max-w-[62ch]">{lead.description}</p>
            </Link>
          </Reveal>

          <div className="flex flex-col divide-y divide-hairline border-t border-hairline lg:border-t-0 lg:border-l lg:pl-10">
            {secondary.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <Link to={item.to} className="group flex gap-5 py-6 first:lg:pt-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="size-24 shrink-0 object-cover md:size-28"
                    loading="lazy"
                  />
                  <div>
                    <p className="label-xs text-muted-text">
                      {item.category} · {formatLongDate(item.date)}
                    </p>
                    <h3 className="font-display mt-2 text-xl leading-[1.05] font-bold uppercase transition-colors duration-[180ms] group-hover:text-club-yellow md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

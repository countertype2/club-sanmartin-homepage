import { ArrowRight, Facebook, Instagram, MessageCircle } from "lucide-react";
import { clubLogo } from "./club-assets";

const columns = [
  {
    title: "Club",
    links: [
      { label: "Nuestra historia", to: "/club" },
      { label: "Comisión directiva", to: "/club" },
      { label: "Nuestra cancha", to: "/cancha" },
    ],
  },
  {
    title: "Actividad",
    links: [
      { label: "Categorías", to: "/categorias" },
      { label: "Partidos", to: "/partidos" },
      { label: "Eventos", to: "/eventos" },
    ],
  },
  {
    title: "Sumate",
    links: [
      { label: "Hacete socio", to: "/socios" },
      { label: "Quiero afiliarme", to: "/afiliados" },
      { label: "Patrocinadores", to: "/patrocinadores" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="shell py-14 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-hairline pb-10">
          <div>
            <span className="rule-yellow" aria-hidden="true" />
            <p className="heading-3 mt-4 max-w-lg">
              Ayudanos a seguir formando jugadores del barrio.
            </p>
          </div>
          <a href="/socios" className="btn-base btn-yellow group">
            Hacete socio
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <img src={clubLogo} alt="Escudo de Club San Martín" className="h-14 w-auto" />
              <span className="font-display text-xl leading-none font-bold uppercase">
                Club San Martín
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-text">
              Av. San Martín y Los Álamos
              <br />
              Barrio San Martín
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/" },
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-[8px] border border-hairline-strong transition-colors duration-[180ms] hover:border-club-yellow hover:text-club-yellow"
                >
                  <Icon className="size-4.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="label-xs text-club-yellow">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.to}
                      className="text-sm text-secondary-text transition-colors duration-[180ms] hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6 text-sm text-muted-text">
          <p>© {new Date().getFullYear()} Club San Martín. Todos los derechos reservados.</p>
          <p>Fútbol · Barrio · Futuro</p>
        </div>
      </div>
    </footer>
  );
}

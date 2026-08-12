import { ArrowUpRight, Facebook, Instagram } from "lucide-react";
import { Reveal, SectionLabel } from "./reveal";

const networks = [
  {
    name: "Instagram",
    handle: "@clubsanmartin",
    copy: "Entrenamientos, partidos y el día a día del semillero.",
    href: "https://instagram.com",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    handle: "Club San Martín",
    copy: "Novedades institucionales, eventos y actividades del barrio.",
    href: "https://facebook.com",
    Icon: Facebook,
  },
];

export function Social() {
  return (
    <section className="section-y border-t border-hairline">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionLabel>Redes del club</SectionLabel>
          <h2 className="heading-2 mt-4">Seguinos dentro y fuera de la cancha</h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {networks.map((net, i) => (
            <Reveal key={net.name} delay={i * 70}>
              <a
                href={net.href}
                target="_blank"
                rel="noreferrer noopener"
                className="card-surface group flex items-center justify-between gap-6 p-6 md:p-8"
              >
                <div className="flex items-center gap-5">
                  <span className="flex size-14 items-center justify-center rounded-[10px] bg-surface-blue transition-transform duration-[180ms] group-hover:-translate-y-0.5">
                    <net.Icon className="size-6 text-club-yellow" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="card-title">{net.name}</h3>
                    <p className="text-sm text-muted-text">{net.handle}</p>
                    <p className="mt-1 text-sm text-secondary-text">{net.copy}</p>
                  </div>
                </div>
                <ArrowUpRight className="arrow-shift size-5 shrink-0 text-club-yellow" strokeWidth={2.5} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, ArrowRight } from "lucide-react";
import { clubGround, clubNightImage, socialProfiles } from "./club-assets";
import { Reveal } from "./reveal";

export function ClubLife() {
  const socials = [
    { label: "Instagram", href: socialProfiles.instagram, Icon: Instagram },
    { label: "Facebook", href: socialProfiles.facebook, Icon: Facebook },
  ];

  return (
    <section id="vida-del-club" className="border-t border-hairline">
      <Reveal>
        <div className="relative isolate overflow-hidden border-y border-hairline">
          <img
            src={clubNightImage}
            alt="Partido nocturno en la cancha de Club San Martín, con la luna sobre los árboles del barrio"
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />

          {/* Overlay funcional: sostiene el titular abajo/izquierda */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top right, rgba(5,11,30,0.9) 0%, rgba(5,11,30,0.55) 32%, rgba(5,11,30,0) 62%)",
            }}
          />
          {/* Overlay funcional: sostiene el bloque de datos arriba/derecha */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom left, rgba(5,11,30,0.82) 0%, rgba(5,11,30,0.35) 26%, rgba(5,11,30,0) 55%)",
            }}
          />

          <div className="relative flex min-h-[clamp(520px,86vh,860px)] flex-col justify-between gap-12 p-6 py-14 md:p-12 lg:p-16">
            {/* Bloque funcional — superior derecha en desktop */}
            <div className="flex md:justify-end">
              <div className="w-full max-w-[26rem] md:text-right">
                <h3 className="font-display text-2xl leading-none font-bold uppercase">
                  {clubGround.name}
                </h3>
                <p className="mt-3 text-secondary-text">
                  {clubGround.address}
                  <br />
                  {clubGround.city}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 md:justify-end">
                  {socials.map(({ label, href, Icon }) =>
                    href ? (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex min-h-11 items-center gap-2 rounded-[6px] border border-hairline-strong px-4 text-sm font-semibold transition-colors duration-[180ms] hover:border-club-yellow hover:text-club-yellow"
                      >
                        <Icon className="size-4" strokeWidth={2} />
                        {label}
                      </a>
                    ) : (
                      <span
                        key={label}
                        className="inline-flex min-h-11 items-center gap-2 rounded-[6px] border border-hairline px-4 text-sm font-medium text-muted-text"
                      >
                        <Icon className="size-4" strokeWidth={2} />
                        {label}: por confirmar
                      </span>
                    ),
                  )}
                </div>

                <Link
                  to="/contacto"
                  className="mt-4 inline-block text-sm font-semibold underline-offset-4 hover:underline"
                >
                  Contacto y cómo llegar
                </Link>
              </div>
            </div>

            {/* Bloque principal — inferior izquierda */}
            <div className="max-w-[44ch]">
              <p className="label-xs text-club-yellow">La vida del club</p>
              <h2 className="heading-2 mt-3 max-w-[16ch]">
                Nuestra casa
                <br />
                es el barrio
              </h2>
              <p className="mt-4 max-w-[42ch] text-lg font-medium text-secondary-text">
                Se juega de día, de noche y con la gente del barrio en el alambrado.
              </p>
              {clubGround.mapUrl ? (
                <a
                  href={clubGround.mapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-club-yellow underline-offset-4 hover:underline"
                >
                  Cómo llegar
                  <ArrowRight className="arrow-shift size-4" strokeWidth={2} />
                </a>
              ) : (
                <Link
                  to="/contacto"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-club-yellow underline-offset-4 hover:underline"
                >
                  Cómo llegar
                  <ArrowRight className="arrow-shift size-4" strokeWidth={2} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

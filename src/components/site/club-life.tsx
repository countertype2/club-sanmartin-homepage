import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin } from "lucide-react";
import { clubGround, clubNightImage, socialProfiles } from "./club-assets";
import { Reveal } from "./reveal";

export function ClubLife() {
  const socials = [
    { label: "Instagram", href: socialProfiles.instagram, Icon: Instagram },
    { label: "Facebook", href: socialProfiles.facebook, Icon: Facebook },
  ];

  return (
    <section id="vida-del-club" className="border-t border-hairline py-16 md:py-24">
      {/* Pieza atmosférica: panorámica, ancha, sin card */}
      <Reveal className="shell-wide">
        <div className="relative isolate overflow-hidden rounded-[4px] border border-hairline">
          <img
            src={clubNightImage}
            alt="Partido nocturno en la cancha de Club San Martín, con la luna sobre los árboles del barrio"
            className="h-[clamp(340px,62vh,620px)] w-full object-cover"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,11,30,0.62) 0%, rgba(5,11,30,0.28) 45%, rgba(5,11,30,0.9) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
            <p className="label-xs text-club-yellow">La vida del club</p>
            <h2 className="heading-2 mt-3 max-w-[22ch]">Nuestra casa es el barrio</h2>
            <p className="mt-4 max-w-[42ch] text-lg font-medium text-secondary-text">
              Se juega de día, de noche y con la gente del barrio en el alambrado.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="shell mt-12 grid gap-10 border-t border-hairline pt-10 md:grid-cols-2 md:gap-16">
        <Reveal className="flex gap-4">
          <MapPin className="mt-1 size-5 shrink-0 text-club-yellow" strokeWidth={2} />
          <div>
            <h3 className="font-display text-2xl leading-none font-bold uppercase">
              {clubGround.name}
            </h3>
            <p className="mt-3 text-secondary-text">
              {clubGround.address}
              <br />
              {clubGround.city}
            </p>
            {clubGround.mapUrl ? (
              <a
                href={clubGround.mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-block text-sm font-semibold text-club-yellow underline-offset-4 hover:underline"
              >
                Ver en el mapa
              </a>
            ) : (
              <p className="mt-4 text-sm text-muted-text">
                Dirección exacta y mapa a confirmar por el club.
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="label-xs text-muted-text">Seguinos</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
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
            className="mt-5 inline-block text-sm font-semibold underline-offset-4 hover:underline"
          >
            Escribinos por consultas
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

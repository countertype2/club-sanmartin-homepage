import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin } from "lucide-react";
import { clubGround, clubPhotos, socialProfiles } from "./club-assets";
import { Reveal } from "./reveal";

export function ClubLife() {
  const socials = [
    { label: "Instagram", href: socialProfiles.instagram, Icon: Instagram },
    { label: "Facebook", href: socialProfiles.facebook, Icon: Facebook },
  ];

  return (
    <section id="vida-del-club" className="border-t border-hairline">
      <div className="shell py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="label-xs text-club-yellow">La vida del club</p>
          <h2 className="heading-2 mt-4">Nuestra casa es el barrio</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <Reveal>
            <img
              src={clubPhotos.juveniles}
              alt="Jugadores de Club San Martín en la cancha del club junto a las familias del barrio"
              className="aspect-16/9 w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={80} className="flex flex-col justify-center">
            <div className="flex gap-4">
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
            </div>

            <div className="mt-9 border-t border-hairline pt-7">
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

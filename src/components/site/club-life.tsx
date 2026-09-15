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
    <section id="vida-del-club" className="border-t border-hairline">
      <Reveal>
        <div className="relative isolate overflow-hidden border-y border-hairline">
          <img
            src={clubNightImage}
            alt="Partido nocturno en la cancha de Club San Martín, con la luna sobre los árboles del barrio"
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />

          {/* Overlay funcional: sostiene el titular arriba/derecha */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom left, rgba(5,11,30,0.9) 0%, rgba(5,11,30,0.55) 32%, rgba(5,11,30,0) 62%)",
            }}
          />
          {/* Overlay funcional: sostiene el bloque de datos abajo/izquierda */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top right, rgba(5,11,30,0.82) 0%, rgba(5,11,30,0.35) 26%, rgba(5,11,30,0) 55%)",
            }}
          />

          <div className="relative flex min-h-[clamp(520px,86vh,860px)] flex-col justify-between gap-10 p-6 py-14 md:gap-12 md:p-12 lg:p-16">
            {/* Bloque principal — superior derecha en desktop */}
            <div className="flex md:justify-end">
              <div className="w-full max-w-[26rem] md:text-right">
                <p className="label-xs text-club-yellow">La vida del club</p>
                <h2 className="heading-2 mt-3 uppercase">
                  Nuestra casa
                  <br />
                  es Calabacilla
                </h2>
                <p className="mt-4 max-w-[42ch] text-lg font-medium text-secondary-text md:ml-auto">
                  Desde 1946, generaciones se encuentran en esta cancha para jugar, acompañar y
                  hacer crecer a Sanma.
                </p>
              </div>
            </div>

            {/* Bloque funcional — inferior izquierda en desktop */}
            <div className="max-w-[26rem]">
              <h3 className="font-display text-2xl leading-none font-bold uppercase">
                {clubGround.name}
              </h3>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
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
                ))}
              </div>

              <a
                href={clubGround.mapUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-club-yellow underline-offset-4 hover:underline"
              >
                <MapPin className="size-4" strokeWidth={2} />
                {clubGround.address}
              </a>

              <Link
                to="/contacto"
                className="mt-3 block text-sm font-semibold underline-offset-4 hover:underline"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

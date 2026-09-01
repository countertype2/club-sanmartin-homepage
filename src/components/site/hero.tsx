import { Link } from "@tanstack/react-router";
import { heroImage } from "./club-assets";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-club-blue" aria-labelledby="hero-title">
      {/* Desktop: full-bleed photo with a functional left scrim for legibility */}
      <div className="relative hidden md:block">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="h-[clamp(560px,78vh,760px)] w-full object-cover object-[center_top]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,17,69,0.86) 0%, rgba(3,17,69,0.52) 35%, rgba(3,17,69,0.05) 65%)",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="shell-wide">
            <div className="max-w-[34rem]">
              <p className="hero-in label-xs text-club-yellow" style={{ animationDelay: "0ms" }}>
                Club de fútbol de barrio
              </p>
              <h1
                id="hero-title"
                className="hero-in display-xl mt-4"
                style={{ animationDelay: "90ms" }}
              >
                Formamos jugadores.
                <br />
                Construimos futuro.
              </h1>
              <p
                className="hero-in mt-6 text-lg font-medium text-secondary-text"
                style={{ animationDelay: "180ms" }}
              >
                Fútbol, formación y comunidad desde 1948.
              </p>
              <Link
                to="/socios"
                className="hero-in btn-base btn-yellow mt-8"
                style={{ animationDelay: "260ms" }}
              >
                Hacete socio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: copy first, photo integrated below, CTA above the fold */}
      <div className="md:hidden">
        <div className="shell pt-[104px] pb-9">
          <p className="hero-in label-xs text-club-yellow">Club de fútbol de barrio</p>
          <h1 className="hero-in display-xl mt-3" style={{ animationDelay: "80ms" }}>
            Formamos jugadores.
            <br />
            Construimos futuro.
          </h1>
          <p
            className="hero-in mt-5 font-medium text-secondary-text"
            style={{ animationDelay: "160ms" }}
          >
            Fútbol, formación y comunidad desde 1948.
          </p>
          <Link
            to="/socios"
            className="hero-in btn-base btn-yellow mt-7 w-full"
            style={{ animationDelay: "240ms" }}
          >
            Hacete socio
          </Link>
        </div>
        <img
          src={heroImage}
          alt="Plantel de primera de Club San Martín frente al escudo del club"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="aspect-4/3 w-full object-cover object-[center_top]"
        />
      </div>
    </section>
  );
}

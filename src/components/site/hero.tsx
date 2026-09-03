import { Link } from "@tanstack/react-router";
import { heroImage } from "./club-assets";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-club-blue" aria-labelledby="hero-title">
      {/* Desktop: full-bleed photo with a functional left scrim for legibility */}
      <div className="relative hidden md:block">
        <div className="overflow-hidden">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            width={1536}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="hero-zoom h-[clamp(600px,86vh,860px)] w-full object-cover object-[center_top]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,17,69,0.88) 0%, rgba(3,17,69,0.55) 38%, rgba(3,17,69,0.06) 68%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-56"
          style={{ background: "linear-gradient(180deg, rgba(8,13,26,0) 0%, rgba(8,13,26,0.92) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="shell-wide">
            <div className="max-w-[36rem]">
              <p className="hero-in label-xs text-club-yellow" style={{ animationDelay: "120ms" }}>
                Club de fútbol de barrio · desde 1948
              </p>
              <h1
                id="hero-title"
                className="hero-in display-xl mt-4"
                style={{ animationDelay: "260ms" }}
              >
                Formamos jugadores.
                <br />
                Construimos futuro.
              </h1>
              <p
                className="hero-in mt-6 text-lg font-medium text-secondary-text"
                style={{ animationDelay: "420ms" }}
              >
                Fútbol, formación y comunidad en el barrio.
              </p>
              <Link
                to="/socios"
                className="hero-in btn-base btn-yellow mt-8"
                style={{ animationDelay: "600ms" }}
              >
                Hacete socio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: copy first, photo integrated below, CTA above the fold */}
      <div className="md:hidden">
        <div className="shell pt-14 pb-9">
          <p className="hero-in label-xs text-club-yellow">Club de fútbol de barrio · desde 1948</p>
          <h1 className="hero-in display-xl mt-3" style={{ animationDelay: "140ms" }}>
            Formamos jugadores.
            <br />
            Construimos futuro.
          </h1>
          <p
            className="hero-in mt-5 font-medium text-secondary-text"
            style={{ animationDelay: "300ms" }}
          >
            Fútbol, formación y comunidad en el barrio.
          </p>
          <Link
            to="/socios"
            className="hero-in btn-base btn-yellow mt-7 w-full"
            style={{ animationDelay: "460ms" }}
          >
            Hacete socio
          </Link>
        </div>
        <div className="overflow-hidden">
          <img
            src={heroImage}
            alt="Plantel de primera de Club San Martín frente al escudo del club"
            width={1536}
            height={1024}
            fetchPriority="high"
            decoding="async"
            className="hero-zoom aspect-4/3 w-full object-cover object-[center_top]"
          />
        </div>
      </div>
    </section>
  );
}

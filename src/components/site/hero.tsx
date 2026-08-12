import { ArrowRight } from "lucide-react";
import { clubLogo, clubPhotos } from "./club-assets";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 hidden size-[620px] rounded-full opacity-[0.18] blur-[120px] lg:block"
        style={{ background: "#2b4290" }}
      />
      <div className="shell-wide relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p
            className="hero-in label-xs text-club-yellow"
            style={{ animationDelay: "0ms" }}
          >
            Club de fútbol · Formación y comunidad
          </p>
          <h1 className="hero-in display-xl mt-5" style={{ animationDelay: "80ms" }}>
            Formamos jugadores.
            <br />
            <span className="text-club-yellow">Construimos futuro.</span>
          </h1>
          <p
            className="hero-in body-lg mt-6 max-w-xl"
            style={{ animationDelay: "160ms" }}
          >
            Somos un club de barrio que acompaña a cada jugador desde sus primeros pasos hasta las
            categorías mayores, formando personas, deportistas y oportunidades dentro y fuera de la
            cancha.
          </p>
          <p
            className="hero-in mt-4 max-w-xl text-muted-text"
            style={{ animationDelay: "200ms" }}
          >
            Nuestro semillero ya abrió camino a jugadores que continuaron su formación en
            instituciones de primer nivel.
          </p>
          <div
            className="hero-in mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <a href="/socios" className="btn-base btn-yellow group">
              Hacete socio
              <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
            </a>
            <a href="/club" className="btn-base btn-ghost group">
              Conocé el club
              <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="media-reveal overflow-hidden rounded-[16px] border border-hairline">
            <img
              src={clubPhotos.juveniles}
              alt="Plantel de inferiores de Club San Martín en la cancha del barrio"
              className="aspect-4/3 w-full object-cover lg:aspect-3/4"
              loading="eager"
            />
          </div>
          <div className="hero-in absolute -bottom-6 -left-4 flex items-center gap-3 rounded-[12px] border border-hairline bg-surface px-4 py-3 md:left-6" style={{ animationDelay: "420ms" }}>
            <img src={clubLogo} alt="" className="size-10" aria-hidden="true" />
            <div>
              <p className="font-display text-xl leading-none font-bold uppercase">Semillero activo</p>
              <p className="text-sm text-muted-text">Infantiles, juveniles, primera y senior</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { clubCrest } from "./club-assets";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="border-t border-hairline bg-club-blue">
      <div className="shell py-16 text-center md:py-24">
        <Reveal>
          <img src={clubCrest} alt="" aria-hidden="true" className="mx-auto size-16" loading="lazy" />
          <h2 className="heading-2 mt-6">Ayudanos a seguir formando jugadores del barrio</h2>
          <p className="body-lg mx-auto mt-5 max-w-[52ch]">
            Cada socio sostiene un entrenamiento, una categoría y un chico jugando al fútbol.
          </p>
          <Link to="/socios" className="btn-base btn-yellow mt-9">
            Hacete socio
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

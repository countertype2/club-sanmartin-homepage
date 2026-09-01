import { Link } from "@tanstack/react-router";
import { Reveal } from "./reveal";

export function SponsorshipCta() {
  return (
    <section id="sponsors" className="bg-club-yellow text-dark-text">
      <div className="shell flex flex-wrap items-center justify-between gap-8 py-14 md:py-20">
        <Reveal className="max-w-xl">
          <h2 className="heading-2">¿Querés acompañar al club?</h2>
          <p className="mt-4 text-lg font-medium text-dark-text/80">
            Sumá tu marca al crecimiento de San Martín y apoyá el deporte local.
          </p>
        </Reveal>
        <Reveal delay={70}>
          <Link to="/sponsors" className="btn-base btn-blue">
            Quiero ser sponsor
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

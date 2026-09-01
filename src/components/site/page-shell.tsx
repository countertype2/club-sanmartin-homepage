import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./header";
import { SiteFooter } from "./footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-hairline bg-surface-blue pt-[124px] pb-16 md:pt-[160px] md:pb-24">
          <div className="shell max-w-3xl">
            <p className="label-xs text-club-yellow">{eyebrow}</p>
            <h1 className="heading-2 mt-4">{title}</h1>
            <p className="body-lg mt-5">{intro}</p>
            <Link to="/socios" className="btn-base btn-yellow mt-9">
              Hacete socio
            </Link>
          </div>
        </section>
        {children}
        <section className="section-y">
          <div className="shell">
            <p className="body-lg">
              Estamos preparando esta página. Mientras tanto, escribinos y te contamos todo sobre el
              club.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contacto" className="btn-base btn-ghost">
                Contacto
              </Link>
              <Link to="/" className="btn-base btn-ghost">
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { clubLogo, navLinks } from "./club-assets";

/**
 * Floating capsule header. Hidden on the first viewport: it only appears once
 * the visitor has scrolled past "Nuestro club" and is reaching "Categorías",
 * and it fades out again when returning to the top.
 */
export function SiteHeader() {
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const anchor = document.getElementById("categorias");
      const trigger = anchor
        ? anchor.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.6
        : window.innerHeight * 1.6;
      setShown(window.scrollY > Math.max(trigger, 240));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!shown) setOpen(false);
  }, [shown]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-5"
        style={{ pointerEvents: shown ? "auto" : "none" }}
      >
        <header
          className="float-bar flex h-16 w-full max-w-[68rem] items-center gap-4 pr-2 pl-4 md:pl-6"
          aria-hidden={!shown}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "none" : "translateY(-12px)",
          }}
        >
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
            tabIndex={shown ? 0 : -1}
            aria-label="Club San Martín, inicio"
          >
            <img src={clubLogo} alt="Club San Martín" className="h-9 w-auto" />
            <span className="font-display hidden text-lg leading-none font-bold tracking-wide uppercase sm:inline">
              San Martín
            </span>
          </Link>

          <nav
            className="ml-auto hidden items-center gap-7 md:flex"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                tabIndex={shown ? 0 : -1}
                className="text-[0.9375rem] font-medium text-secondary-text transition-colors duration-[180ms] hover:text-white"
                activeProps={{ className: "text-white", "aria-current": "page" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/socios"
            tabIndex={shown ? 0 : -1}
            className="btn-base btn-yellow ml-auto !min-h-[48px] !rounded-full md:ml-0"
          >
            Hacete socio
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            tabIndex={shown ? 0 : -1}
            aria-label="Abrir menú"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline-strong md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </header>
      </div>

      {open && (
        <div className="fixed inset-0 z-60 bg-background md:hidden">
          <div className="shell flex h-[72px] items-center justify-between">
            <img src={clubLogo} alt="Club San Martín" className="h-10 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex size-11 items-center justify-center rounded-full border border-hairline-strong"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="shell mt-4 flex flex-col" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-display border-b border-hairline py-4 text-3xl font-bold uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/socios"
              onClick={() => setOpen(false)}
              className="btn-base btn-yellow mt-8 w-full"
            >
              Hacete socio
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

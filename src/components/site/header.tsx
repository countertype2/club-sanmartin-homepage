import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { clubLogo, navLinks } from "./club-assets";

export function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,padding,border-color] duration-[260ms]"
      style={{
        backgroundColor: stuck ? "rgba(8,13,26,0.92)" : "transparent",
        backdropFilter: stuck ? "blur(10px)" : "none",
        borderBottom: `1px solid ${stuck ? "rgba(255,255,255,0.10)" : "transparent"}`,
      }}
    >
      <div className={`shell flex items-center justify-between ${stuck ? "py-3" : "py-4 md:py-5"}`}>
        <a href="/" className="flex items-center gap-3" aria-label="Club San Martín — Inicio">
          <img src={clubLogo} alt="Escudo de Club San Martín" className="h-11 w-auto md:h-14" />
          <span className="hidden font-display text-lg leading-none font-700 uppercase sm:block">
            <span className="block text-base leading-[1.05] font-bold tracking-wide">
              Club San Martín
            </span>
            <span className="label-xs block text-muted-text">Fútbol · Barrio · Futuro</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="group relative text-sm font-medium text-secondary-text transition-colors duration-[180ms] hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-club-yellow transition-transform duration-[180ms] group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/socios" className="btn-base btn-yellow group hidden md:inline-flex">
            Hacete socio
            <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="flex size-11 items-center justify-center rounded-[8px] border border-hairline-strong lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="shell flex items-center justify-between py-4">
            <img src={clubLogo} alt="Escudo de Club San Martín" className="h-11 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex size-11 items-center justify-center rounded-[8px] border border-hairline-strong"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="shell mt-6 flex flex-col" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 font-display text-3xl font-bold uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/socios"
              onClick={() => setOpen(false)}
              className="btn-base btn-yellow group mt-8 w-full"
            >
              Hacete socio
              <ArrowRight className="arrow-shift size-4" strokeWidth={2.5} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

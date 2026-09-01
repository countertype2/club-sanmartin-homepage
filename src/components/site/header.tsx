import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { clubLogo, navLinks } from "./club-assets";

export function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 20);
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
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-[260ms]"
      style={{
        backgroundColor: stuck ? "rgba(5,11,30,0.94)" : "rgba(5,11,30,0.35)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${stuck ? "rgba(255,255,255,0.12)" : "transparent"}`,
      }}
    >
      <div className="shell flex h-[68px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Club San Martín, inicio">
          <img src={clubLogo} alt="Club San Martín" className="h-10 w-auto" />
          <span className="font-display text-lg leading-none font-bold tracking-wide uppercase sm:text-xl">
            Club San Martín
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="relative py-1 text-[0.9375rem] font-medium text-secondary-text transition-colors duration-[180ms] hover:text-white"
              activeProps={{ className: "text-white", "aria-current": "page" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/socios" className="btn-base btn-yellow hidden !min-h-[44px] md:inline-flex">
            Hacete socio
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="flex size-11 items-center justify-center rounded-[6px] border border-hairline-strong md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="shell flex h-[68px] items-center justify-between">
            <img src={clubLogo} alt="Club San Martín" className="h-10 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="flex size-11 items-center justify-center rounded-[6px] border border-hairline-strong"
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
                className="border-b border-hairline py-4 font-display text-3xl font-bold uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/socios" onClick={() => setOpen(false)} className="btn-base btn-yellow mt-8 w-full">
              Hacete socio
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

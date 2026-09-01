import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { clubGround, clubLogo, navLinks, socialProfiles } from "./club-assets";

export function SiteFooter() {
  const socials = [
    { label: "Instagram", href: socialProfiles.instagram, Icon: Instagram },
    { label: "Facebook", href: socialProfiles.facebook, Icon: Facebook },
  ].filter((s) => Boolean(s.href));

  return (
    <footer className="border-t border-hairline">
      <div className="shell py-12 md:py-14">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={clubLogo} alt="Club San Martín" className="h-12 w-auto" />
              <span className="font-display text-xl leading-none font-bold uppercase">
                Club San Martín
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-text">
              {clubGround.address}
              <br />
              {clubGround.city}
            </p>
          </div>

          <nav aria-label="Navegación del pie" className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-secondary-text transition-colors duration-[180ms] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/socios"
              className="text-sm font-semibold text-club-yellow underline-offset-4 hover:underline"
            >
              Hacete socio
            </Link>
          </nav>

          {socials.length > 0 && (
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-[6px] border border-hairline-strong transition-colors duration-[180ms] hover:border-club-yellow hover:text-club-yellow"
                >
                  <Icon className="size-4.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6 text-sm text-muted-text">
          <p>© {new Date().getFullYear()} Club San Martín.</p>
          <p>Fútbol, formación y comunidad desde 1948.</p>
        </div>
      </div>
    </footer>
  );
}

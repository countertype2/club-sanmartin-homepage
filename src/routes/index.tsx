import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { MatchCenter } from "@/components/site/match-center";
import { TheClub } from "@/components/site/club";
import { FormationPath } from "@/components/site/categories";
import { FeaturedNews } from "@/components/site/news";
import { Membership } from "@/components/site/membership";
import { Events } from "@/components/site/events";
import { SponsorshipCta } from "@/components/site/sponsorship";
import { ClubLife } from "@/components/site/club-life";
import { FinalCta } from "@/components/site/final-cta";
import { SiteFooter } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club San Martín | Fútbol, formación y comunidad" },
      {
        name: "description",
        content:
          "Club de barrio dedicado a la formación de jugadores desde 1948. Próximo partido, categorías, eventos y cómo hacerte socio.",
      },
      { property: "og:title", content: "Club San Martín | Fútbol, formación y comunidad" },
      {
        property: "og:description",
        content:
          "Formamos jugadores y construimos futuro desde el barrio. Hacete socio de Club San Martín.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MatchCenter />
        <TheClub />
        <FormationPath />
        <FeaturedNews />
        <Membership />
        <Events />
        <SponsorshipCta />
        <ClubLife />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

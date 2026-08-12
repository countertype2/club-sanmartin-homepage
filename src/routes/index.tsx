import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { FeaturedNews } from "@/components/site/news";
import { TheClub } from "@/components/site/club";
import { Categories } from "@/components/site/categories";
import { WaysToJoin } from "@/components/site/join";
import { Matches } from "@/components/site/matches";
import { Events } from "@/components/site/events";
import { Sponsors } from "@/components/site/sponsors";
import { Social } from "@/components/site/social";
import { Ground } from "@/components/site/ground";
import { SiteFooter } from "@/components/site/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Club San Martín | Fútbol, formación y barrio" },
      {
        name: "description",
        content:
          "Club de barrio dedicado a la formación de jugadores. Conocé nuestras categorías, partidos y eventos, y hacete socio para apoyar al semillero.",
      },
      { property: "og:title", content: "Club San Martín | Fútbol, formación y barrio" },
      {
        property: "og:description",
        content:
          "Formamos jugadores y construimos futuro desde el barrio. Sumate como socio, afiliado o jugador.",
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
        <FeaturedNews />
        <TheClub />
        <Categories />
        <WaysToJoin />
        <Matches />
        <Events />
        <Sponsors />
        <Social />
        <Ground />
      </main>
      <SiteFooter />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/futbol")({
  head: () => ({
    meta: [
      { title: "Fútbol | Categorías, partidos y resultados de Club San Martín" },
      { name: "description", content: "Categorías, fixture y resultados de Club San Martín, del semillero al plantel mayor." },
      { property: "og:title", content: "Fútbol | Categorías, partidos y resultados de Club San Martín" },
      { property: "og:description", content: "Categorías, fixture y resultados de Club San Martín, del semillero al plantel mayor." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Fútbol"
      title="Fútbol"
      intro="Categorías, partidos y resultados de todas nuestras divisiones, del semillero a la primera."
    />
  );
}

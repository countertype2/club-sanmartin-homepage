import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/club")({
  head: () => ({
    meta: [
      { title: "Club San Martín | El club, historia e institución" },
      { name: "description", content: "Conocé la historia y la vida institucional de Club San Martín, un club de barrio dedicado a la formación de jugadores." },
      { property: "og:title", content: "Club San Martín | El club, historia e institución" },
      { property: "og:description", content: "Conocé la historia y la vida institucional de Club San Martín, un club de barrio dedicado a la formación de jugadores." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Nuestro club"
      title="El club"
      intro="Historia, institución y comisión directiva de Club San Martín, un club de barrio dedicado a la formación."
    />
  );
}

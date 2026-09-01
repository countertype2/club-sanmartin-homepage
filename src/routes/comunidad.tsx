import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/comunidad")({
  head: () => ({
    meta: [
      { title: "Comunidad | Noticias y eventos de Club San Martín" },
      { name: "description", content: "Noticias, eventos y la vida del barrio alrededor de Club San Martín." },
      { property: "og:title", content: "Comunidad | Noticias y eventos de Club San Martín" },
      { property: "og:description", content: "Noticias, eventos y la vida del barrio alrededor de Club San Martín." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Comunidad"
      title="Comunidad"
      intro="Noticias, eventos y la vida del club: lo que pasa en la cancha y en el barrio."
    />
  );
}

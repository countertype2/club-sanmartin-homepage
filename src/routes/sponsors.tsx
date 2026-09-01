import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsors | Acompañá a Club San Martín" },
      { name: "description", content: "Sumá tu marca al crecimiento de Club San Martín y apoyá el deporte local." },
      { property: "og:title", content: "Sponsors | Acompañá a Club San Martín" },
      { property: "og:description", content: "Sumá tu marca al crecimiento de Club San Martín y apoyá el deporte local." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Sponsors"
      title="Quiero ser sponsor"
      intro="Sumá tu marca al crecimiento de San Martín y apoyá el deporte local del barrio."
    />
  );
}

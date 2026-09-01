import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/afiliados")({
  head: () => ({
    meta: [
      { title: "Afiliación | Club San Martín" },
      { name: "description", content: "Afiliate a Club San Martín con un aporte accesible y obtené tu carnet oficial." },
      { property: "og:title", content: "Afiliación | Club San Martín" },
      { property: "og:description", content: "Afiliate a Club San Martín con un aporte accesible y obtené tu carnet oficial." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Afiliación"
      title="Afiliación"
      intro="Un aporte accesible con carnet oficial para acompañar el día a día del club."
    />
  );
}

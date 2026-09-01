import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/socios")({
  head: () => ({
    meta: [
      { title: "Hacete socio | Club San Martín" },
      { name: "description", content: "Sumate como socio de Club San Martín y sostené la formación de jugadores del barrio." },
      { property: "og:title", content: "Hacete socio | Club San Martín" },
      { property: "og:description", content: "Sumate como socio de Club San Martín y sostené la formación de jugadores del barrio." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Hacete socio"
      title="Hacete socio"
      intro="Con tu cuota mensual sostenés los entrenamientos, la cancha y la formación de cada categoría."
    />
  );
}

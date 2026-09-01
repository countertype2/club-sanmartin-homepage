import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Club San Martín" },
      { name: "description", content: "Contactate con Club San Martín para sumarte como socio, consultar categorías o acompañar al club." },
      { property: "og:title", content: "Contacto | Club San Martín" },
      { property: "og:description", content: "Contactate con Club San Martín para sumarte como socio, consultar categorías o acompañar al club." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Contacto"
      title="Contacto"
      intro="Escribinos para sumarte al club, consultar por categorías o acompañarnos como sponsor."
    />
  );
}

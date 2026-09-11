import type { Metadata } from "next";
import { PRODUCT_LINES } from "@/lib/content";
import { QuoteForm } from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Solicite o catálogo completo de equipamentos TRG Fitness — linhas Evoque, Infinity, E-Line, Premium e Cardio.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogoPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Catálogo</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Catálogo de equipamentos
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Reunimos as linhas {PRODUCT_LINES.map((l) => l.name).join(", ")} em um
        catálogo completo. Preencha os dados abaixo e nosso time comercial
        envia o material atualizado.
      </p>

      <div className="mt-14 max-w-xl">
        <QuoteForm context="catalogo" />
      </div>
    </div>
  );
}

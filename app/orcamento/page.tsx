import type { Metadata } from "next";
import { QuoteForm } from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Solicite um Orçamento",
  description:
    "Solicite um orçamento de equipamentos TRG Fitness para sua academia, condomínio, hotel ou residência.",
  alternates: { canonical: "/orcamento" },
};

export default function OrcamentoPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Orçamento</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Solicite um orçamento
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Conte um pouco sobre o seu projeto — academia, condomínio, hotel ou
        residência — e nosso time comercial retorna com uma proposta sob
        medida.
      </p>

      <div className="mt-14 max-w-xl">
        <QuoteForm context="orcamento" />
      </div>
    </div>
  );
}

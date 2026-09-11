import type { Metadata } from "next";
import Link from "next/link";
import { CONDO_PLANS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Condomínios / Hotéis",
  description:
    "Conheça os equipamentos TRG Fitness para montar uma academia no seu condomínio ou hotel. Fabricação 100% nacional, com projetos para espaços de 20m² a 48m².",
  alternates: { canonical: "/condominios" },
};

export default function CondominiosPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Condomínios / Hotéis</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Equipamentos para academia em condomínio
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        A TRG Fitness fabrica e comercializa produtos para musculação e
        cardiovasculares, oferecendo garantia e assistência técnica.
        Conquistando confiança e tradição há 28 anos, hoje atendemos várias
        academias, condomínios, hotéis e residências em quase todos os
        estados brasileiros. Apresentamos abaixo a versatilidade dos produtos
        em três projetos de tamanhos diferentes, para ajudar na visualização
        e execução do seu espaço fitness.
      </p>

      <div className="mt-16 flex flex-col gap-px overflow-hidden border border-border bg-border">
        {CONDO_PLANS.map((plan) => (
          <div
            key={plan.size}
            className="grid grid-cols-1 gap-8 bg-surface p-8 md:grid-cols-12 md:p-10"
          >
            <div className="md:col-span-3">
              <p className="font-display text-5xl font-bold tracking-tight text-signal">
                {plan.size}
              </p>
              <p className="mt-2 text-sm text-muted">Planta de referência</p>
            </div>
            <div className="md:col-span-9">
              <p className="text-sm font-medium text-foreground">Equipamentos da planta</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {plan.equipment.map((eq) => (
                  <li key={eq} className="text-sm text-muted">
                    {eq}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/orcamento"
        className="mt-10 inline-block border border-signal bg-signal px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-signal-dim"
      >
        Solicitar orçamento
      </Link>
    </div>
  );
}

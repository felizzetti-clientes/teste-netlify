import Link from "next/link";
import { CONDO_PLANS } from "@/lib/content";

export function SolutionsSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Soluções para academias, condomínios e hotéis
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Conquistando confiança e tradição há 28 anos, atendemos várias
            academias, condomínios, hotéis e residências em quase todos os
            estados brasileiros — com portfólio dimensionado para cada
            metragem de espaço fitness.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {CONDO_PLANS.map((plan) => (
            <div key={plan.size} className="flex flex-col gap-5 bg-surface p-8">
              <p className="font-display text-4xl font-bold tracking-tight text-signal">
                {plan.size}
              </p>
              <ul className="flex flex-col gap-2">
                {plan.equipment.map((eq) => (
                  <li key={eq} className="text-sm text-muted">
                    {eq}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          href="/condominios"
          className="mt-10 inline-block border border-signal bg-signal px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-signal-dim"
        >
          Ver plantas completas e solicitar orçamento
        </Link>
      </div>
    </section>
  );
}

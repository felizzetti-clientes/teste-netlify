import type { Metadata } from "next";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { UNITS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a TRG Fitness — unidades em Blumenau (matriz) e Curitiba, telefones, WhatsApp e formulário de contato.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Contato</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Fale com a TRG Fitness
      </h1>

      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-8">
            {UNITS.map((unit) => (
              <div key={unit.label} className="border border-border p-6">
                <p className="text-sm font-medium text-foreground">
                  {unit.label}
                  {unit.tag ? (
                    <span className="ml-2 text-xs font-normal text-signal">{unit.tag}</span>
                  ) : null}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{unit.address}</p>
                <ul className="mt-3 flex flex-col gap-1">
                  {unit.phones.map((p) => (
                    <li key={p.label}>
                      <a
                        href={p.href}
                        target={p.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <QuoteForm context="contato" />
        </div>
      </div>
    </div>
  );
}

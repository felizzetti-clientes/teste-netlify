import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 border border-border bg-surface p-10 md:flex-row md:items-center md:p-14">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Vamos equipar o seu espaço fitness
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Amplo portfólio de equipamentos 100% nacionais para academias,
              condomínios, hotéis, clubes e residências. Fale com nosso time
              comercial e receba um orçamento sob medida.
            </p>
          </div>
          <Link
            href="/orcamento"
            className="shrink-0 border border-signal bg-signal px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-signal-dim"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}

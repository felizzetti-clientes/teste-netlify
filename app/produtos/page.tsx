import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_LINES, SUPPORT_CATEGORIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Conheça as linhas de equipamentos TRG Fitness: Evoque, Infinity, E-Line, Premium e Cardio, além de bancos, pesos livres, articulados e suportes.",
  alternates: { canonical: "/produtos" },
};

export default function ProdutosPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Produtos</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Linhas de equipamentos TRG
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Produção nacional, em parque fabril próprio, para academias,
        condomínios, hotéis, clubes e residências.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
        {PRODUCT_LINES.map((line) => (
          <Link
            key={line.slug}
            href={`/produtos/${line.slug}`}
            className="group flex flex-col gap-4 bg-surface p-8 transition-colors hover:bg-surface-raised"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={line.products[0]?.image}
              alt={`Equipamento da linha ${line.name}`}
              loading="lazy"
              className="aspect-[16/10] w-full border border-border object-cover"
            />
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight group-hover:text-signal">
                {line.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{line.tagline}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mt-20 font-display text-2xl font-bold tracking-tight">
        Bancos, pesos livres e acessórios
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
        {SUPPORT_CATEGORIES.map((cat) => (
          <a
            key={cat.slug}
            href={cat.href}
            className="group flex flex-col gap-3 bg-surface p-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="aspect-square w-full border border-border object-cover"
            />
            <p className="text-sm font-medium group-hover:text-signal">{cat.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

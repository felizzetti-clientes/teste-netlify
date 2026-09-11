import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCT_LINES } from "@/lib/content";

export function generateStaticParams() {
  return PRODUCT_LINES.map((line) => ({ linha: line.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ linha: string }>;
}): Promise<Metadata> {
  const { linha } = await params;
  const line = PRODUCT_LINES.find((l) => l.slug === linha);
  if (!line) return {};
  return {
    title: `Linha ${line.name}`,
    description: line.description,
    alternates: { canonical: `/produtos/${line.slug}` },
  };
}

export default async function LinhaPage({
  params,
}: {
  params: Promise<{ linha: string }>;
}) {
  const { linha } = await params;
  const line = PRODUCT_LINES.find((l) => l.slug === linha);
  if (!line) notFound();

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Linha de equipamentos</p>
      <h1 className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">
        {line.name}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        {line.description}
      </p>

      <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {line.products.map((p) => (
          <a
            key={p.code + p.name}
            href={p.href}
            className="group flex flex-col gap-3 border border-border bg-surface p-4 transition-colors hover:border-signal/60"
          >
            <div className="aspect-[4/5] w-full overflow-hidden bg-surface-raised">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug text-foreground">{p.name}</p>
              <p className="mt-1 text-xs text-muted">{p.code}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

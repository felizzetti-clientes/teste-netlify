import Link from "next/link";
import { PRODUCT_LINES } from "@/lib/content";

export function ProductLinesSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Linhas de equipamentos
          </h2>
          <Link
            href="/produtos"
            className="hidden shrink-0 border-b border-foreground pb-1 text-sm font-medium transition-colors hover:border-signal hover:text-signal md:block"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>

      <div className="mt-14 flex flex-col">
        {PRODUCT_LINES.map((line, i) => (
          <div
            key={line.slug}
            className="sticky top-16 border-t border-border bg-background"
            style={{ zIndex: i + 1 }}
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-14 md:px-10 lg:grid-cols-12 lg:gap-16 lg:py-20">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium tracking-[0.14em] text-muted">
                  LINHA {String(i + 1).padStart(2, "0")} / {PRODUCT_LINES.length}
                </p>
                <h3 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {line.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {line.description}
                </p>
                <Link
                  href={`/produtos/${line.slug}`}
                  className="mt-6 inline-block border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-signal hover:text-signal"
                >
                  Conheça a linha {line.name}
                </Link>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {line.products.slice(0, 6).map((p) => (
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
                        <p className="text-sm font-medium leading-snug text-foreground">
                          {p.name}
                        </p>
                        <p className="mt-1 text-xs text-muted">{p.code}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { COMPANY_ABOUT, COMPANY_PILLARS } from "@/lib/content";

export function AboutStrip() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 py-24 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-signal">28 anos de fabricação nacional</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl">
            {COMPANY_ABOUT.headline}
          </h2>
          <Link
            href="/empresa"
            className="mt-8 inline-block border-b border-foreground pb-1 text-sm font-medium text-foreground transition-colors hover:border-signal hover:text-signal"
          >
            Conheça a empresa
          </Link>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          {COMPANY_ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="max-w-2xl text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}

          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {COMPANY_PILLARS.map((pillar) => (
              <div key={pillar.label} className="flex flex-col items-start gap-4 bg-surface p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pillar.image}
                  alt=""
                  className="h-10 w-auto object-contain opacity-90"
                  loading="lazy"
                />
                <p className="text-sm font-medium text-foreground">{pillar.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

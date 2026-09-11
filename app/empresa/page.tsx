import type { Metadata } from "next";
import { COMPANY_ABOUT, COMPANY_PILLARS, UNITS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "A TRG Fitness se destaca pela produção de equipamentos de musculação e cardiovasculares 100% nacional. Conheça nossa história, fábrica e frota própria.",
  alternates: { canonical: "/empresa" },
};

export default function EmpresaPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Empresa</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        28 anos fabricando equipamentos no Brasil
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={COMPANY_ABOUT.heroImage}
            alt="Sede da TRG Fitness"
            className="w-full border border-border object-cover"
          />
          <div className="mt-8 flex flex-col gap-6">
            {COMPANY_ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="max-w-2xl text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-1">
            {COMPANY_PILLARS.map((pillar) => (
              <div key={pillar.label} className="flex items-center gap-4 bg-surface p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pillar.image} alt="" className="h-10 w-auto object-contain" />
                <p className="text-sm font-medium text-foreground">{pillar.label}</p>
              </div>
            ))}
          </div>

          <div className="border border-border p-6">
            <p className="text-sm font-medium text-foreground">Nossas unidades</p>
            <div className="mt-4 flex flex-col gap-6">
              {UNITS.map((unit) => (
                <div key={unit.label}>
                  <p className="text-sm font-medium text-foreground">
                    {unit.label}
                    {unit.tag ? (
                      <span className="ml-2 text-xs font-normal text-signal">{unit.tag}</span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{unit.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

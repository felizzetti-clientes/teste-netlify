import { PRODUCT_LINES, COMPANY_PILLARS } from "@/lib/content";

export type HeroImage = { src: string; label: string };

// Duas fotos reais por linha (quando disponíveis) + os três pilares
// institucionais (fabricação, assistência, frota). Mantém a Hero
// alimentada por material real da TRG em vez de imagens de banco.
export const HERO_IMAGES: HeroImage[] = [
  ...PRODUCT_LINES.flatMap((line) =>
    line.products.slice(0, 3).map((p) => ({ src: p.image, label: line.shortName }))
  ),
  ...COMPANY_PILLARS.map((p) => ({ src: p.image, label: "TRG" })),
];

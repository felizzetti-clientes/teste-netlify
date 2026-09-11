import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "A TRG Fitness atende academias, condomínios, hotéis e residências em quase todos os estados brasileiros, há 28 anos.",
  alternates: { canonical: "/clientes" },
};

export default function ClientesPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Clientes</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Presente em quase todos os estados brasileiros
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Conquistando confiança e tradição há 28 anos, a TRG Fitness atende
        academias, condomínios, hotéis, clubes e residências em praticamente
        todo o Brasil, com um portfólio amplo o suficiente para atender
        qualquer porte de projeto.
      </p>
      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
        A galeria de clientes e estudos de caso está em atualização — fale
        com nosso time comercial para referências no seu estado ou segmento.
      </p>
    </div>
  );
}

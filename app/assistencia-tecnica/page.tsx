import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assistência Técnica",
  description:
    "Assistência técnica especializada TRG Fitness para conserto e manutenção de equipamentos de musculação e cardiovasculares em todo o Brasil.",
  alternates: { canonical: "/assistencia-tecnica" },
};

// Amostra real de parceiros de assistência técnica listados no site
// atual. A lista completa (por estado/cidade) deve ser importada do
// mesmo formato ao migrar o conteúdo definitivo.
const SAMPLE_PARTNERS = [
  { name: "Samuel Elias Portella", city: "Mafra", state: "Santa Catarina", phone: "(47) 99123-7901" },
  { name: "Gym Tech Solutions", city: "Otacílio Costa", state: "Santa Catarina", phone: "(49) 99187-3623" },
  { name: "JG Trindade", city: "Uruguaiana", state: "Rio Grande do Sul", phone: "(55) 3412-2953" },
  { name: "FIT TEC Vendas e Serviços LTDA", city: "Niterói", state: "Rio de Janeiro", phone: "(21) 98153-5790" },
  { name: "Edsonassistec", city: "Marechal Cândido Rondon", state: "Paraná", phone: "(45) 99922-0401" },
  { name: "Wando Ferreira Santos", city: "São Paulo", state: "São Paulo", phone: "(11) 96772-6234" },
];

export default function AssistenciaTecnicaPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
      <p className="text-sm font-medium text-signal">Assistência Técnica</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
        Assistência técnica mais perto de você
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
        Dispomos de assistência técnica especializada para conserto e
        manutenção dos equipamentos TRG Fitness em todo o Brasil.
      </p>

      <div className="mt-14 overflow-hidden border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-5 py-3 font-medium text-foreground">Parceiro</th>
              <th className="px-5 py-3 font-medium text-foreground">Cidade / Estado</th>
              <th className="px-5 py-3 font-medium text-foreground">Contato</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_PARTNERS.map((p) => (
              <tr key={p.name} className="border-b border-border last:border-0">
                <td className="px-5 py-4 text-foreground">{p.name}</td>
                <td className="px-5 py-4 text-muted">
                  {p.city} / {p.state}
                </td>
                <td className="px-5 py-4 text-muted">{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-muted">
        Amostra de parceiros. A busca completa por estado e cidade segue o
        mesmo modelo de dados e pode ser conectada a um filtro interativo.
      </p>
    </div>
  );
}

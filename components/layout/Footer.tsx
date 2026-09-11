import Link from "next/link";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { SOCIAL, STORE_URL, UNITS } from "@/lib/content";

const productLinks = [
  { label: "Produtos", href: "/produtos" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Condomínios / Hotéis", href: "/condominios" },
  { label: "Assistência Técnica", href: "/assistencia-tecnica" },
];

const companyLinks = [
  { label: "Empresa", href: "/empresa" },
  { label: "Clientes", href: "/clientes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight">
              TRG<span className="text-signal">·</span>FITNESS
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              28 anos de fabricação nacional de equipamentos de musculação e
              cardiovasculares, de Santa Catarina para o Brasil.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted transition-colors hover:text-foreground"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-foreground"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted transition-colors hover:text-foreground"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Produtos</p>
            <ul className="mt-4 flex flex-col gap-3">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  Loja Virtual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">TRG</p>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {UNITS.map((unit) => (
              <div key={unit.label}>
                <p className="text-sm font-medium text-foreground">
                  {unit.label}
                  {unit.tag && (
                    <span className="ml-2 text-xs font-normal text-signal">
                      {unit.tag}
                    </span>
                  )}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {unit.address}
                </p>
                <ul className="mt-2 flex flex-col gap-1">
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

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TRG Fitness. Todos os direitos reservados.</p>
          <p>Fabricação 100% nacional — Blumenau, Santa Catarina.</p>
        </div>
      </div>
    </footer>
  );
}

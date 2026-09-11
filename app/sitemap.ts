import type { MetadataRoute } from "next";
import { SITE, PRODUCT_LINES } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/empresa",
    "/produtos",
    "/condominios",
    "/clientes",
    "/assistencia-tecnica",
    "/catalogo",
    "/blog",
    "/contato",
    "/orcamento",
  ];

  const lineRoutes = PRODUCT_LINES.map((l) => `/produtos/${l.slug}`);

  return [...staticRoutes, ...lineRoutes].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

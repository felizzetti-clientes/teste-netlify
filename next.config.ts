import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático (sem rotas de API, Server Actions ou ISR) —
  // exporta para /out e é servido como arquivos estáticos puros na
  // Netlify, sem depender do runtime serverless do Next.
  output: "export",
};

export default nextConfig;

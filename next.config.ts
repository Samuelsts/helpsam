import type { NextConfig } from "next";

// Site 100% estático: `next build` gera a pasta /out (output: "export").
// Os headers de segurança NÃO ficam mais aqui: headers() é ignorado em export.
// Eles são gerados em out/_headers por scripts/generate-headers.mjs (pós-build).
const nextConfig: NextConfig = {
  output: "export",
  // O otimizador de imagens do Next exige servidor. As miniaturas já são JPGs
  // locais pequenos, então servimos os arquivos como estão.
  images: { unoptimized: true },
};

export default nextConfig;

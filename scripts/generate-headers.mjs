// Gera out/_headers (Cloudflare Pages / Netlify) reproduzindo a lógica que
// antes vivia em next.config.ts. Roda DEPOIS do `next build`, com as mesmas
// variáveis de ambiente do build (NEXT_PUBLIC_ADSENSE_CLIENT, CSP_REPORT_ONLY).
import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "out";
if (!existsSync(OUT_DIR)) {
  console.error("generate-headers: pasta out/ não existe. Rode `next build` antes.");
  process.exit(1);
}

const adsEnabled = Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT);

const csp = [
  "default-src 'self'",
  adsEnabled
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:"
    : "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  adsEnabled ? "img-src 'self' data: https:" : "img-src 'self' data:",
  "font-src 'self' data:",
  adsEnabled ? "frame-src https:" : "frame-src https://www.youtube-nocookie.com",
  adsEnabled ? "connect-src 'self' https:" : "connect-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const cspHeaderName =
  process.env.CSP_REPORT_ONLY === "1"
    ? "Content-Security-Policy-Report-Only"
    : "Content-Security-Policy";

const securityHeaders = [
  [cspHeaderName, csp],
  // Antes era injetado pela Vercel; aqui fica explícito e restrito a este host.
  ["Strict-Transport-Security", "max-age=63072000"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["X-Content-Type-Options", "nosniff"],
  ["X-Frame-Options", "DENY"],
  [
    "Permissions-Policy",
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self "https://www.youtube-nocookie.com")',
  ],
  ["Cross-Origin-Opener-Policy", "same-origin"],
  ["X-DNS-Prefetch-Control", "on"],
];

// Cache: assets com hash do Next são imutáveis; o HTML precisa revalidar
// sempre, senão uma troca de NEXT_PUBLIC_* demora a aparecer.
const rules = [
  ["/*", securityHeaders],
  ["/_next/static/*", [["Cache-Control", "public, max-age=31536000, immutable"]]],
];

const body =
  rules
    .map(
      ([path, headers]) =>
        `${path}\n${headers.map(([k, v]) => `  ${k}: ${v}`).join("\n")}`
    )
    .join("\n\n") + "\n";

writeFileSync(join(OUT_DIR, "_headers"), body);
console.log(
  `generate-headers: out/_headers escrito (ads=${adsEnabled ? "ON" : "OFF"}, ${cspHeaderName})`
);

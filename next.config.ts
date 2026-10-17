import type { NextConfig } from "next";

// Os anúncios só são ligados quando o ID do AdSense existe no build.
const adsEnabled = Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT);

const csp = [
  "default-src 'self'",
  adsEnabled
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:"
    : "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  adsEnabled ? "img-src 'self' data: https:" : "img-src 'self' data:",
  "font-src 'self' data:",
  adsEnabled
    ? "frame-src https:"
    : "frame-src https://www.youtube-nocookie.com",
  adsEnabled ? "connect-src 'self' https:" : "connect-src 'self'",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

// Para testar sem bloquear nada: defina CSP_REPORT_ONLY=1 no ambiente.
const cspHeaderName =
  process.env.CSP_REPORT_ONLY === "1"
    ? "Content-Security-Policy-Report-Only"
    : "Content-Security-Policy";

const securityHeaders = [
  { key: cspHeaderName, value: csp },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value:
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self "https://www.youtube-nocookie.com")',
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

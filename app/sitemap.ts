import type { MetadataRoute } from "next";
import { tutorials } from "@/src/data/tutorials";

const base = "https://help.samlabs.com.br";

// Obrigatório com output: "export" (a rota é resolvida em build time).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/web", "/desktop", "/sobre", "/contato", "/termos", "/privacidade"].map(
    (path) => ({ url: `${base}${path}` })
  );
  const items = tutorials.map((tutorial) => ({
    url: `${base}/tutorial/${tutorial.slug}`
  }));
  return [...pages, ...items];
}

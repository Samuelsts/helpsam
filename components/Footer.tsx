import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Início" },
  { href: "/web", label: "Clinic All Web" },
  { href: "/desktop", label: "Clinic All Desktop" },
  { href: "/termos", label: "Termos de uso" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "https://samlabs.com.br", label: "Conheça o SAM" }
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/78 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10">
            <BookOpenCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold text-slate-950">Tutoriais Clinic All</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Biblioteca independente de apoio com tutoriais em vídeo e imagem. Este site não é
              oficial da Focus ou do Clinic All e não oferece suporte pela plataforma.
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2 md:justify-end" aria-label="Links do rodapé">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 outline-none hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/web", label: "Clinic All Web" },
  { href: "/desktop", label: "Clinic All Desktop" },
  { href: "https://samlabs.com.br", label: "Conheça o SAM" }
];

export function Header() {
  return (
    <header className="animate-fade-in sticky top-0 z-30 border-b border-slate-200/80 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/20">
            <BookOpenCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-bold leading-tight">Tutoriais Clinic All</span>
            <span className="block text-xs text-slate-500">Guias independentes</span>
          </span>
        </Link>

        <nav className="flex flex-wrap gap-2" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 outline-none hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

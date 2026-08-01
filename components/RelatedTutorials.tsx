import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tutorial } from "@/src/data/tutorials";

export function RelatedTutorials({ tutorials }: { tutorials: Tutorial[] }) {
  if (tutorials.length === 0) {
    return null;
  }

  return (
    <section className="animate-fade-up delay-200 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-white/70">
      <h2 className="text-lg font-bold text-slate-950">Tutoriais relacionados</h2>
      <div className="mt-4 grid gap-3">
        {tutorials.map((tutorial) => (
          <Link
            key={tutorial.id}
            href={`/tutorial/${tutorial.slug}`}
            className="group rounded-2xl border border-slate-200 p-4 outline-none hover:border-blue-200 hover:bg-blue-50/50 focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span className="block text-sm font-bold text-slate-950">{tutorial.title}</span>
            <span className="mt-2 flex items-center gap-2 text-xs font-semibold text-blue-700">
              Abrir tutorial
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

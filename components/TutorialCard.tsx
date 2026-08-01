import Link from "next/link";
import { Clock3, ImageIcon, PlayCircle } from "lucide-react";
import type { Tutorial } from "@/src/data/tutorials";

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <article className="animate-fade-up group flex h-full min-h-[280px] flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-white/70 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10">
      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          {tutorial.category}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {tutorial.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-bold leading-tight text-slate-950">{tutorial.title}</h3>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{tutorial.description}</p>

        <div className="mt-auto pt-8">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {tutorial.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <ImageIcon className="h-4 w-4" aria-hidden="true" />
              {tutorial.hasImageTutorial ? "Com prints" : "Sem prints"}
            </span>
          </div>

          <Link
            href={`/tutorial/${tutorial.slug}`}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            Assistir tutorial
          </Link>
        </div>
      </div>
    </article>
  );
}

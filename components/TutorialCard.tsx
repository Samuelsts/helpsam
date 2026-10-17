import Image from "next/image";
import Link from "next/link";
import { Clock3, ImageIcon, Play, PlayCircle } from "lucide-react";
import type { Tutorial } from "@/src/data/tutorials";

type TutorialCardProps = {
  tutorial: Tutorial;
  priority?: boolean;
};

export function TutorialCard({
  tutorial,
  priority = false,
}: TutorialCardProps) {
  const href = `/tutorial/${tutorial.slug}`;

  return (
    <article className="animate-fade-up group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ring-1 ring-white/70 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className="relative block aspect-video overflow-hidden bg-slate-950"
      >
        <Image
          src={`/thumbs/${tutorial.youtubeId}.jpg`}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-slate-950/20 transition group-hover:bg-slate-950/5" />
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-950 shadow-lg">
          <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />
        </span>
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-white">
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
          {tutorial.duration}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {tutorial.category}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {tutorial.level}
          </span>
        </div>

        <h3 className="text-xl font-bold leading-tight text-slate-950">
          {tutorial.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {tutorial.description}
        </p>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm text-slate-500">
            <ImageIcon className="h-4 w-4" aria-hidden="true" />
            {tutorial.hasImageTutorial ? "Com prints" : "Sem prints"}
          </span>

          <Link
            href={href}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            Assistir tutorial
          </Link>
        </div>
      </div>
    </article>
  );
}

"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
  priority?: boolean;
};

export function YouTubeFacade({ videoId, title, priority = false }: Props) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="aspect-video w-full rounded-2xl border-0"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Reproduzir vídeo: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-slate-950 outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <Image
        src={`/thumbs/${videoId}.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 768px, 100vw"
        priority={priority}
        className="object-cover transition group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 bg-slate-950/25 transition group-hover:bg-slate-950/10" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl">
        <Play className="ml-1 h-7 w-7" aria-hidden="true" />
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-slate-950/70 px-4 py-2 text-left text-xs text-white">
        Ao reproduzir, o vídeo é carregado do YouTube (modo de privacidade
        aprimorada).
      </span>
    </button>
  );
}

import { YouTubeFacade } from "@/components/YouTubeFacade";

type VideoEmbedProps = {
  youtubeId: string;
  title: string;
  priority?: boolean;
};

export function VideoEmbed({ youtubeId, title, priority = false }: VideoEmbedProps) {
  return (
    <div className="animate-scale-in overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-950/12 ring-1 ring-white/70">
      <YouTubeFacade videoId={youtubeId} title={title} priority={priority} />
    </div>
  );
}
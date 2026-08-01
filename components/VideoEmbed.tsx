type VideoEmbedProps = {
  youtubeId: string;
  title: string;
};

export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
  return (
    <div className="animate-scale-in overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-950/12 ring-1 ring-white/70">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?controls=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

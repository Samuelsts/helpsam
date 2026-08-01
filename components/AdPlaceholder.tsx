import { Megaphone } from "lucide-react";

type AdPlaceholderProps = {
  compact?: boolean;
};

export function AdPlaceholder({ compact = false }: AdPlaceholderProps) {
  return (
    <aside
      // className={`animate-fade-up delay-200 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5 text-center text-slate-500 ring-1 ring-white/70 ${
      //   compact ? "min-h-24" : "min-h-36"
      // }`}
      // aria-label="Publicidade"
    >
      <div className="flex h-full min-h-16 flex-col items-center justify-center gap-2">
        {/* <Megaphone className="h-5 w-5 text-blue-500" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Publicidade</p>
        <p className="text-sm">Espaço reservado para anúncio</p> */}
      </div>
    </aside>
  );
}

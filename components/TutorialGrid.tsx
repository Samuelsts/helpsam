"use client";

import { useMemo, useState } from "react";
import type { Tutorial } from "@/src/data/tutorials";
import { SearchInput } from "@/components/SearchInput";
import { TutorialCard } from "@/components/TutorialCard";

export function TutorialGrid({ tutorials }: { tutorials: Tutorial[] }) {
  const [query, setQuery] = useState("");

  const filteredTutorials = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return tutorials;
    }

    return tutorials.filter((tutorial) => {
      const searchable = `${tutorial.title} ${tutorial.description} ${tutorial.category}`.toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [query, tutorials]);

  return (
    <div className="space-y-6">
      <SearchInput value={query} onChange={setQuery} />

      {filteredTutorials.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-lg font-bold text-slate-950">Nenhum tutorial encontrado</p>
          <p className="mt-2 text-sm text-slate-500">
            Tente buscar por outra palavra, categoria ou etapa da rotina.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { groupTutorialsByCategory, type Tutorial } from "@/src/data/tutorials";
import { SearchInput } from "@/components/SearchInput";
import { TutorialCard } from "@/components/TutorialCard";

export function TutorialGrid({ tutorials }: { tutorials: Tutorial[] }) {
  const [query, setQuery] = useState("");

  // Filtra e agrupa no mesmo useMemo: o agrupamento depende do resultado do filtro,
  // então separar em dois memos só adicionaria uma dependência encadeada sem ganho.
  const groups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = normalizedQuery
      ? tutorials.filter((tutorial) => {
          const searchable =
            `${tutorial.title} ${tutorial.description} ${tutorial.category}`.toLowerCase();
          return searchable.includes(normalizedQuery);
        })
      : tutorials;

    return groupTutorialsByCategory(filtered);
  }, [query, tutorials]);

  return (
    <div className="space-y-6">
      <SearchInput value={query} onChange={setQuery} />

      {groups.length > 0 ? (
        <div className="space-y-12">
          {groups.map(({ category, tutorials: categoryTutorials }) => (
            // aria-label em vez de aria-labelledby: não depende de id,
            // então não quebra se uma categoria futura tiver espaço ("Módulo Médico").
            <section key={category} aria-label={category}>
              <div className="mb-6 border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {category}
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {categoryTutorials.map((tutorial) => (
                  <TutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-lg font-bold text-slate-950">
            Nenhum tutorial encontrado
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Tente buscar por outra palavra, categoria ou etapa da rotina.
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { appInfo, type ClinicAllApp } from "@/src/data/tutorials";
import { readPreferredApp } from "@/components/AppChoiceCard";

export function ContinueSuggestion() {
  const [preferredApp, setPreferredApp] = useState<ClinicAllApp | null>(null);

  useEffect(() => {
    setPreferredApp(readPreferredApp());
  }, []);

  if (!preferredApp) {
    return null;
  }

  const item = appInfo[preferredApp];

  return (
    <div className="animate-fade-up delay-200 rounded-2xl border border-blue-100 bg-white/80 p-4 text-sm text-slate-600 shadow-sm ring-1 ring-white/70">
      <p>
        Você acessou recentemente os tutoriais do <strong>{item.name}</strong>. Deseja continuar?
      </p>
      <Link
        href={item.href}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-blue-600 px-4 py-2 font-bold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        Continuar em {item.shortName}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

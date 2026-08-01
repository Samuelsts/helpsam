'use client';

import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { appInfo, type ClinicAllApp } from '@/src/data/tutorials';

const preferredAppKey = 'preferredClinicAllApp';

export function savePreferredApp(app: ClinicAllApp) {
  window.localStorage.setItem(preferredAppKey, app);
}

export function readPreferredApp(): ClinicAllApp | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const value = window.localStorage.getItem(preferredAppKey);
  return value === 'web' || value === 'desktop' ? value : null;
}

export function AppChoiceCard({ app }: { app: ClinicAllApp }) {
  const router = useRouter();
  const item = appInfo[app];


  return (
    <button
      type="button"
      onClick={() => {
        savePreferredApp(app);
        router.push(item.href);
      }}
      className="animate-scale-in group flex min-h-64 flex-col rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm outline-none ring-1 ring-white/70 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10 focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 shadow-lg shadow-blue-500/20 overflow-hidden">
        <img
          src={
            app === 'web'
              ? '/logos/clinic_all.png'
              : '/logos/clinic_alldesk.png'
          }
          alt={item.name}
          className="h-10 w-10 object-contain"
        />
      </span>
      <span className="text-2xl font-bold text-slate-950">{item.name}</span>
      <span className="mt-4 text-base leading-7 text-slate-600">
        {item.description}
      </span>
      <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-blue-700">
        Acessar tutoriais
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </button>
  );
}

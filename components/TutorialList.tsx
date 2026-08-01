import type { ClinicAllApp } from "@/src/data/tutorials";
import { appInfo, getTutorialsByApp } from "@/src/data/tutorials";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TutorialGrid } from "@/components/TutorialGrid";

export function TutorialList({ app }: { app: ClinicAllApp }) {
  const item = appInfo[app];
  const appTutorials = getTutorialsByApp(app);

  return (
    <>
      <Header />
      <main>
        <section className="premium-surface border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <DisclaimerBanner />
            <div className="animate-fade-up delay-150 mt-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Biblioteca de tutoriais
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {item.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{item.description}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
          <TutorialGrid tutorials={appTutorials} />
          <div className="space-y-5">
            <AdPlaceholder />
            <AdPlaceholder compact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Airplay } from 'lucide-react';
import { AppChoiceCard } from '@/components/AppChoiceCard';
import { ContinueSuggestion } from '@/components/ContinueSuggestion';
import { DisclaimerBanner } from '@/components/DisclaimerBanner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="premium-surface mx-auto max-w-6xl rounded-b-[2rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <DisclaimerBanner />

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_360px]">
            <div className="animate-fade-up delay-150">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                <Airplay className="h-4 w-4 text-blue-600" aria-hidden="true" />
                Guias em vídeo
              </div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Tutoriais práticos para uso do Sistema Clinic All
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Escolha entre tutoriais da versão Web ou Desktop e acesse
                materiais simples, objetivos e fáceis de consultar.
              </p>
            </div>

            <ContinueSuggestion />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <AppChoiceCard app="web" />
            <AppChoiceCard app="desktop" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, ImageIcon, Layers3, Tag } from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RelatedTutorials } from "@/components/RelatedTutorials";
import { VideoEmbed } from "@/components/VideoEmbed";
import {
  appInfo,
  getRelatedTutorials,
  getTutorialBySlug,
  tutorials
} from "@/src/data/tutorials";

export function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug
  }));
}

export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  const app = appInfo[tutorial.app];
  const relatedTutorials = getRelatedTutorials(tutorial);

  return (
    <>
      <Header />
      <main>
        <section className="premium-surface border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <DisclaimerBanner />
            <Link
              href={app.href}
              className="animate-fade-up delay-100 mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm outline-none ring-1 ring-white/70 hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Voltar para {app.name}
            </Link>

            <div className="animate-fade-up delay-150 mt-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Tutorial em vídeo
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {tutorial.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{tutorial.description}</p>
            </div>

            <div className="animate-fade-up delay-200 mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold">
                <Layers3 className="h-4 w-4 text-blue-600" aria-hidden="true" />
                {app.name}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold">
                <Tag className="h-4 w-4 text-blue-600" aria-hidden="true" />
                {tutorial.category}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold">
                {tutorial.level}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold">
                <Clock3 className="h-4 w-4 text-blue-600" aria-hidden="true" />
                {tutorial.duration}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
          <div className="space-y-6">
            <VideoEmbed youtubeId={tutorial.youtubeId} title={tutorial.title} />

            <section id="imagens" className="animate-fade-up delay-150 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-white/70">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">Tutorial em imagens</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Uma alternativa para revisar o passo a passo sem assistir ao vídeo completo.
                  </p>
                </div>

                {tutorial.hasImageTutorial && tutorial.imageTutorialUrl ? (
                  <a
                    href={tutorial.imageTutorialUrl}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <ImageIcon className="h-4 w-4" aria-hidden="true" />
                    Ver tutorial em imagens
                  </a>
                ) : null}
              </div>

              {!tutorial.hasImageTutorial ? (
                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <ImageIcon className="mx-auto h-8 w-8 text-slate-400" aria-hidden="true" />
                  <p className="mt-3 font-semibold text-slate-700">
                    Tutorial por imagens ainda não disponível.
                  </p>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
                  Área preparada para receber prints do tutorial.
                </div>
              )}
            </section>

            <RelatedTutorials tutorials={relatedTutorials} />
          </div>

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

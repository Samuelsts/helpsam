import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Layers3, Lightbulb, Tag } from "lucide-react";
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
  tutorials,
} from "@/src/data/tutorials";

// Os espaços de anúncio só existem quando o AdSense estiver configurado.
const showAds = Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT);

function clip(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean;
}

export function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) return {};

  const app = appInfo[tutorial.app];
  const title = `${tutorial.title} (${app.shortName})`;
  const description = clip(tutorial.summary ?? tutorial.description);
  const url = `/tutorial/${tutorial.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "pt_BR",
      images: [{ url: `/thumbs/${tutorial.youtubeId}.jpg` }],
    },
  };
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  const app = appInfo[tutorial.app];
  const relatedTutorials = getRelatedTutorials(tutorial);
  const steps = tutorial.steps ?? [];
  const tips = tutorial.tips ?? [];
  const faq = tutorial.faq ?? [];
  const images = tutorial.images ?? [];

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
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {tutorial.description}
              </p>
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

        <section
          className={`mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:px-8 ${
            showAds ? "lg:grid-cols-[1fr_300px]" : ""
          }`}
        >
          <div className="min-w-0 space-y-6">
            <VideoEmbed
              youtubeId={tutorial.youtubeId}
              title={tutorial.title}
              priority
            />

            {steps.length > 0 ? (
              <article className="animate-fade-up delay-150 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-white/70 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-950">
                  Passo a passo
                </h2>
                {tutorial.summary ? (
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {tutorial.summary}
                  </p>
                ) : null}

                <ol className="mt-6 space-y-6">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                {tips.length > 0 ? (
                  <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <h3 className="inline-flex items-center gap-2 font-bold text-blue-900">
                      <Lightbulb className="h-4 w-4" aria-hidden="true" />
                      Dicas e pontos de atenção
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-blue-950">
                      {tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {faq.length > 0 ? (
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-950">
                      Dúvidas frequentes
                    </h3>
                    <div className="mt-3 space-y-3">
                      {faq.map((item) => (
                        <details
                          key={item.question}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                        >
                          <summary className="cursor-pointer font-semibold text-slate-950">
                            {item.question}
                          </summary>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ) : null}

            {images.length > 0 ? (
              <section
                id="imagens"
                className="animate-fade-up delay-150 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-white/70 sm:p-8"
              >
                <h2 className="text-2xl font-bold text-slate-950">
                  Tutorial em imagens
                </h2>
                <div className="mt-6 space-y-8">
                  {images.map((image) => (
                    <figure key={image.src}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(min-width: 1024px) 800px, 100vw"
                        className="h-auto w-full rounded-2xl border border-slate-200"
                      />
                      {image.caption ? (
                        <figcaption className="mt-2 text-sm text-slate-500">
                          {image.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            <RelatedTutorials tutorials={relatedTutorials} />
          </div>

          {showAds ? (
            <aside className="space-y-5">
              <AdPlaceholder />
              <AdPlaceholder compact />
            </aside>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}

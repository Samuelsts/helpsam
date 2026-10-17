import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça esta plataforma independente de tutoriais do Clinic All Web e Desktop: quem mantém, como os tutoriais são feitos e o que ela não oferece.",
};

const sections = [
  {
    title: "O que é esta plataforma",
    body: "Esta plataforma reúne tutoriais em vídeo, com passo a passo escrito, sobre as rotinas mais comuns do Clinic All Web e do Clinic All Desktop, sistema usado na rotina de clínicas e desenvolvido pela Focus Tecnologia em Sistema.",
  },
  {
    title: "Quem mantém",
    body: "O site é mantido por Samuel J. Santos, colaborador da Focus, que criou os tutoriais com autorização da empresa para ajudar quem usa o sistema. O projeto é independente: não é um canal oficial da Focus e não é patrocinado por ela.",
  },
  {
    title: "Como os tutoriais são feitos",
    body: "Cada tutorial parte de um vídeo que mostra a rotina na tela, publicado no canal SAM Labs, no YouTube. Em seguida, o passo a passo escrito resume o que é feito no vídeo, com dicas e dúvidas frequentes. Os exemplos usam dados fictícios.",
  },
  {
    title: "O que você encontra aqui",
    body: "Tutoriais organizados por versão (Clinic All Web e Clinic All Desktop) e por assunto, como recepção, agenda, módulo médico, financeiro, faturamento e relatórios. Novos tutoriais podem ser adicionados com o tempo.",
  },
  {
    title: "O que esta plataforma não oferece",
    body: "Não há atendimento técnico, abertura de chamados nem acompanhamento de problemas. Para suporte, use os canais oficiais da Focus: focusts.com.br ou telefone (71) 3343-3850.",
  },
  {
    title: "Atualizações e correções",
    body: "O sistema pode mudar, e as telas do seu ambiente podem ser diferentes das mostradas nos vídeos. Em caso de divergência, priorize sempre as instruções oficiais da Focus. Se encontrar algo desatualizado ou incorreto, avise pela página de contato.",
  },
  {
    title: "Como o site se mantém",
    body: "Para custear o projeto, o site pode exibir anúncios do Google AdSense, que só são ativados se você aceitar no banner de cookies. Os anúncios não influenciam o conteúdo dos tutoriais. Veja os detalhes nos Termos de Uso e na Política de Privacidade.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="premium-surface border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="animate-fade-up max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Info className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Conheça o projeto
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Sobre
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Uma biblioteca independente de tutoriais para quem usa o Clinic
                All no dia a dia.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="animate-fade-up rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-white/70"
              >
                <h2 className="text-lg font-bold text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Ver os tutoriais
            </Link>
            <Link
              href="/contato"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 outline-none hover:bg-slate-50 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Falar com o responsável
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o responsável por esta plataforma independente de tutoriais do Clinic All: sugestões, correções, privacidade e remoção de conteúdo.",
};

const email = "contatosam.info@gmail.com";

const sections = [
  {
    title: "Quando escrever",
    body: "Para sugerir novos tutoriais, avisar sobre algum passo ou texto desatualizado ou incorreto, e tirar dúvidas sobre os Termos de Uso ou a Política de Privacidade. Respondemos assim que possível.",
  },
  {
    title: "Pedidos de privacidade (LGPD)",
    body: "Para exercer seus direitos previstos na Lei 13.709/2018, como acesso, correção, eliminação ou revogação de consentimento, escreva para o e-mail acima. Respondemos em até 15 dias.",
  },
  {
    title: "Direitos autorais e remoção de conteúdo",
    body: "Se você é titular de direitos e deseja a remoção de algum conteúdo, escreva informando a página e o motivo do pedido.",
  },
  {
    title: "Suporte do sistema Clinic All",
    body: "Este canal não atende suporte técnico nem abre chamados. Para suporte, use os canais oficiais da Focus: focusts.com.br ou telefone (71) 3343-3850.",
  },
  {
    title: "Responsável",
    body: "Samuel J. Santos, mantenedor da plataforma disponível em help.samlabs.com.br.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="premium-surface border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="animate-fade-up max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Fale com o responsável
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Contato
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Sugestões, correções e pedidos sobre esta plataforma
                independente de tutoriais.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="animate-fade-up rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              E-mail
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-block break-all text-xl font-bold text-slate-950 underline decoration-blue-300 underline-offset-4 outline-none hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {email}
            </a>
          </div>

          <div className="mt-5 space-y-5">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
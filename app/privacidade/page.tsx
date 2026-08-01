import { Lock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const sections = [
  {
    title: "1. Quem somos",
    body: "Esta é uma plataforma independente de tutoriais, disponível em SEU_DOMINIO.COM, criada voluntariamente por um colaborador para auxiliar usuários do sistema Clinic All / Focus. Não somos um canal oficial da empresa."
  },
  {
    title: "2. Dados que coletamos",
    body: "Esta plataforma não realiza cadastro, login ou coleta ativa de dados pessoais. As únicas informações armazenadas são preferências de navegação salvas localmente via localStorage no seu próprio navegador: a escolha entre Clinic All Web ou Desktop e a confirmação de leitura do aviso inicial. Esses dados nunca são enviados a nenhum servidor."
  },
  {
    title: "3. Infraestrutura e dados técnicos",
    body: "A plataforma é hospedada na Vercel e utiliza a rede Cloudflare para distribuição e segurança. Esses serviços podem registrar dados técnicos como endereço IP, tipo de navegador, páginas acessadas e tempo de acesso para fins operacionais, de segurança e diagnóstico. Esses registros são gerenciados conforme as políticas de privacidade da Vercel (vercel.com/legal/privacy-policy) e da Cloudflare (cloudflare.com/privacypolicy)."
  },
  {
    title: "4. Google AdSense e cookies de publicidade",
    body: "Esta plataforma utiliza o Google AdSense para exibição de anúncios. O Google e seus parceiros podem utilizar cookies, identificadores de dispositivo, endereço IP e dados de navegação para exibir anúncios personalizados com base nos seus interesses. Você pode gerenciar suas preferências de personalização em adssettings.google.com ou desativar cookies de publicidade nas configurações do seu navegador."
  },
  {
    title: "5. Vídeos incorporados (YouTube)",
    body: "Alguns conteúdos desta plataforma incluem vídeos incorporados do YouTube (Google LLC). Ao reproduzir um vídeo, o YouTube pode coletar dados como endereço IP, cookies e interações, conforme sua política de privacidade disponível em policies.google.com/privacy. A incorporação utiliza o modo de privacidade aprimorada (youtube-nocookie.com) sempre que possível."
  },
  {
    title: "6. Cookies de terceiros",
    body: "Esta plataforma não cria cookies próprios. Cookies podem ser definidos por serviços externos como Google AdSense e YouTube. O usuário pode bloquear, limitar ou excluir cookies a qualquer momento nas configurações do navegador. A desativação pode afetar a exibição de anúncios, mas não impacta o acesso ao conteúdo da plataforma."
  },
  {
    title: "7. Compartilhamento de dados",
    body: "Não coletamos, armazenamos nem compartilhamos dados pessoais dos usuários. Qualquer tratamento de dados é realizado exclusivamente por terceiros (Vercel, Cloudflare, Google) conforme suas próprias políticas."
  },
  {
    title: "8. Seus direitos (LGPD)",
    body: "Nos termos da Lei 13.709/2018 (LGPD), você tem direito de acessar, corrigir ou solicitar a exclusão de dados pessoais tratados em seu nome. Como não coletamos dados diretamente, eventuais solicitações relacionadas a dados tratados por terceiros devem ser direcionadas aos respectivos provedores. Para dúvidas sobre esta política, entre em contato pelo e-mail: SEU_EMAIL@DOMINIO.COM"
  },
  {
    title: "9. Alterações desta política",
    body: "Esta política pode ser atualizada caso novos recursos, integrações ou formas de tratamento de dados sejam adicionados. Alterações relevantes serão sinalizadas na plataforma. O uso continuado após qualquer atualização implica concordância com a nova versão."
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="premium-surface border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="animate-fade-up max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Lock className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Seus dados e sua privacidade
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Política de Privacidade
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Entenda como esta plataforma trata (ou não trata) seus dados.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-500">
                Última atualização: 30/07/2026
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
                <h2 className="text-lg font-bold text-slate-950">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
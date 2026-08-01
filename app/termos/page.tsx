import { ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const sections = [
  {
    title: "1. Natureza independente",
    body: "Este site é uma plataforma independente de apoio, criada para organizar tutoriais e materiais informativos. Ele não é um site oficial da Focus, do Clinic All ou de qualquer canal oficial de suporte."
  },
  {
    title: "2. Ausência de suporte pela plataforma",
    body: "A plataforma não oferece atendimento técnico, abertura de chamados, garantia de resposta, suporte operacional ou acompanhamento de problemas. Em caso de dúvidas ou falhas, o usuário deve procurar os canais oficiais de suporte."
  },
  {
    title: "3. Finalidade voluntária",
    body: "O conteúdo foi desenvolvido por um colaborador com finalidade voluntária e não remunerada, apenas para auxiliar clientes com materiais de consulta. As informações podem ser alteradas, removidas ou ficar desatualizadas sem aviso prévio."
  },
  {
    title: "4. Uso das informações",
    body: "Os tutoriais têm finalidade educativa e de apoio. O usuário é responsável por conferir se as orientações fazem sentido para sua rotina e deve priorizar instruções oficiais sempre que houver divergência."
  },
  {
    title: "5. Restrições de uso do conteúdo",
    body: "Os materiais disponibilizados nesta plataforma não podem ser baixados, copiados, reproduzidos ou comercializados sem autorização. O conteúdo é disponibilizado exclusivamente para consulta online e pode ser adicionado, modificado ou removido sem aviso prévio."
  },
  {
    title: "6. Privacidade e LGPD",
    body: "Este site não possui login, cadastro, coleta de CPF, dados financeiros ou informações sensíveis. A única preferência salva localmente é a escolha entre Clinic All Web e Clinic All Desktop, além da confirmação de leitura do aviso inicial — armazenadas via localStorage no próprio navegador. Serviços incorporados de terceiros (como vídeos e anúncios) podem utilizar cookies próprios, conforme suas políticas."
  },
  {
    title: "7. Anúncios e terceiros",
    body: "A plataforma reserva espaços para anúncios, que podem não estar ativos em todos os momentos. Quando ativados, inclusive por serviços como Google AdSense, terceiros poderão utilizar cookies, endereço IP, dados do navegador e localização aproximada para exibição e mensuração de publicidade, conforme suas próprias políticas de privacidade."
  },
  {
    title: "8. Controle do usuário sobre cookies",
    body: "Como este site não possui login nem cadastro, não há criação de perfil interno de usuário pela plataforma. Ainda assim, provedores externos de anúncios podem tratar dados técnicos para exibição, medição e personalização de publicidade. O usuário pode gerenciar cookies, permissões e preferências de privacidade diretamente no navegador ou nas ferramentas oferecidas pelos provedores."
  },
  {
    title: "9. Responsabilidade sobre serviços de terceiros",
    body: "Links, vídeos incorporados (YouTube) e anúncios envolvem serviços externos que possuem suas próprias políticas de privacidade. Esta plataforma não controla as práticas desses terceiros e recomenda que o usuário consulte as políticas oficiais de cada serviço."
  },
  {
    title: "10. Limitações",
    body: "Não há garantia de disponibilidade contínua, atualização permanente, correção integral das informações ou compatibilidade com todas as versões do sistema. O uso do conteúdo é feito por conta e responsabilidade do usuário."
  },
  {
    title: "11. Alterações destes termos",
    body: "Estes termos podem ser atualizados conforme a plataforma evoluir. Alterações relevantes — especialmente aquelas que envolvam coleta ou tratamento de dados — serão sinalizadas na própria plataforma. O uso continuado após qualquer atualização implica concordância com os novos termos."
  },
  {
    title: "12. Contato",
    body: "Em caso de dúvidas sobre estes termos ou sobre privacidade, entre em contato pelo e-mail: contatosam.info@gmail.com"
  }
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="premium-surface border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="animate-fade-up max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Transparência e uso responsável
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Termos de Uso
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Leia as condições básicas de uso desta plataforma independente de tutoriais.
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
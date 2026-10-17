import { ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const sections = [
  {
    title: "1. Natureza independente",
    body: "Este site é uma plataforma independente de apoio, mantida por Samuel J. Santos, que organiza tutoriais e materiais informativos sobre o sistema Clinic All. O mantenedor é colaborador da Focus Tecnologia em Sistema e criou os tutoriais com autorização da empresa, mas o site não é oficial, não é patrocinado pela Focus e não substitui seus canais de suporte.",
  },
  {
    title: "2. Marcas e sistemas de terceiros",
    body: "Clinic All, Focus e demais nomes, logotipos e telas do sistema pertencem à Focus Tecnologia em Sistema (CNPJ 02.459.271/0001-35, Salvador/BA, focusts.com.br) e são citados apenas para identificar o software a que os tutoriais se referem. Os exemplos exibidos nos vídeos utilizam dados fictícios.",
  },
  {
    title: "3. Suporte oficial",
    body: "Esta plataforma não oferece atendimento técnico, abertura de chamados, garantia de resposta, suporte operacional ou acompanhamento de problemas. Para suporte, use os canais oficiais da Focus: focusts.com.br ou telefone (71) 3343-3850.",
  },
  {
    title: "4. Natureza do conteúdo, anúncios e monetização",
    body: "O conteúdo tem finalidade educativa e de apoio e pode ser alterado, removido ou ficar desatualizado sem aviso prévio. Este site é mantido sem patrocínio, remuneração ou apoio financeiro da Focus. Para custear o projeto, o mantenedor pode exibir anúncios (Google AdSense) e monetizar os vídeos no YouTube, quando elegível. Os anúncios não indicam recomendação nem vínculo com os anunciantes.",
  },
  {
    title: "5. Uso das informações",
    body: "O usuário é responsável por conferir se as orientações fazem sentido para a sua rotina e deve priorizar as instruções oficiais da Focus sempre que houver divergência.",
  },
  {
    title: "6. Restrições de uso do conteúdo",
    body: "Os tutoriais produzidos nesta plataforma são protegidos por direitos autorais e não podem ser baixados, copiados, reproduzidos ou comercializados sem autorização. São disponibilizados exclusivamente para consulta online. Marcas e telas de terceiros permanecem de propriedade de seus titulares.",
  },
  {
    title: "7. Remoção de conteúdo",
    body: "Se a Focus ou qualquer titular de direitos solicitar a remoção de um conteúdo, ele será removido, sem necessidade de aviso prévio aos usuários.",
  },
  {
    title: "8. Privacidade e LGPD",
    body: "Este site não possui login, cadastro nem coleta de CPF, dados financeiros ou informações sensíveis. Armazenamos localmente no seu navegador (localStorage) apenas suas preferências: a escolha entre Clinic All Web ou Desktop, a confirmação de leitura do aviso inicial e a sua escolha sobre cookies. O tratamento de dados está detalhado na Política de Privacidade.",
  },
  {
    title: "9. Anúncios, cookies e consentimento",
    body: 'Os anúncios (Google AdSense) e seus cookies e identificadores só são ativados se você aceitar no banner de cookies. Antes da sua escolha, e se você recusar, nenhum script de publicidade é carregado. Você pode alterar a decisão a qualquer momento em "Preferências de cookies", no rodapé. Quando ativos, terceiros podem tratar endereço IP, dados do navegador e localização aproximada para exibir e medir publicidade, conforme as políticas deles.',
  },
  {
    title: "10. Serviços de terceiros e limitações",
    body: "Links, vídeos incorporados (YouTube) e anúncios envolvem serviços externos com políticas próprias, que esta plataforma não controla. Não há garantia de disponibilidade contínua, atualização permanente, correção integral das informações ou compatibilidade com todas as versões do sistema. O uso do conteúdo é por conta e responsabilidade do usuário.",
  },
  {
    title: "11. Legislação",
    body: "Estes termos são regidos pela legislação brasileira.",
  },
  {
    title: "12. Alterações destes termos",
    body: "Estes termos podem ser atualizados conforme a plataforma evoluir, e a nova versão vale a partir da publicação. O uso continuado após a atualização indica concordância com os Termos. Mudanças que envolvam cookies ou anúncios dependem de nova escolha sua no banner.",
  },
  {
    title: "13. Contato",
    body: "Dúvidas sobre estes termos ou sobre privacidade: contatosam.info@gmail.com",
  },
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
                Leia as condições básicas de uso desta plataforma independente
                de tutoriais.
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-500">
                Última atualização: 16/10/2026
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
        </section>
      </main>
      <Footer />
    </>
  );
}

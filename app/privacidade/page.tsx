import { Lock } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const sections = [
  {
    title: "1. Quem somos (controlador)",
    body: "Esta plataforma, disponível em help.samlabs.com.br, é mantida por Samuel J. Santos, pessoa física, que atua como controlador dos dados descritos nesta política. O mantenedor é colaborador da Focus Tecnologia em Sistema (Focus), titular do sistema Clinic All, e criou os tutoriais com autorização da empresa. O site é independente: não é canal oficial da Focus, que não o patrocina. Contato: contatosam.info@gmail.com.",
  },
  {
    title: "2. Dados que tratamos",
    body: "A plataforma não tem cadastro, login nem formulários. Tratamos apenas: (a) armazenamento local (localStorage), que fica somente no seu navegador e não é enviado a nenhum servidor: sua escolha entre Clinic All Web ou Desktop, a confirmação de leitura do aviso inicial e o registro da sua escolha sobre cookies (opção, data e versão); e (b) dados técnicos de acesso (endereço IP, navegador, páginas acessadas, data e hora), registrados pela infraestrutura de hospedagem descrita abaixo.",
  },
  {
    title: "3. Infraestrutura",
    body: "A hospedagem é da Vercel (vercel.com/legal/privacy-policy), que pode registrar dados técnicos de acesso para operação, segurança e diagnóstico (base legal: legítimo interesse, art. 7º, IX, da LGPD). O Cloudflare (cloudflare.com/privacypolicy) é usado apenas como serviço de DNS, isto é, para resolver o endereço do site.",
  },
  {
    title: "4. Anúncios e cookies (Google AdSense)",
    body: 'Exibimos anúncios pelo Google AdSense. Isso envolve cookies e identificadores que o Google e seus parceiros podem usar para exibir e medir anúncios, inclusive personalizados, com base em endereço IP, dados do dispositivo e navegação. Esses recursos só são ativados se você aceitar no banner de cookies (base legal: consentimento, art. 7º, I, da LGPD). Antes da sua escolha, e se você recusar, nenhum script de publicidade é carregado. Você pode mudar de ideia a qualquer momento em "Preferências de cookies", no rodapé. Ao revogar, a página recarrega sem anúncios e removemos os cookies que o site consegue apagar. Para gerenciar a personalização no Google, acesse adssettings.google.com.',
  },
  {
    title: "5. Vídeos incorporados (YouTube)",
    body: "Os vídeos são incorporados em modo de privacidade aprimorada (youtube-nocookie.com). Ao carregar ou reproduzir um vídeo, o YouTube (Google LLC) pode receber seu endereço IP e dados do dispositivo e, na reprodução, definir cookies e registrar interações, conforme a política disponível em policies.google.com/privacy.",
  },
  {
    title: "6. Cookies de terceiros",
    body: "Esta plataforma não cria cookies próprios. Cookies podem ser definidos por serviços externos como Google AdSense (somente após o seu aceite) e YouTube. Você também pode bloquear, limitar ou excluir cookies nas configurações do navegador. A recusa de cookies de publicidade não impede o acesso ao conteúdo da plataforma.",
  },
  {
    title: "7. Compartilhamento e transferência internacional",
    body: "Não vendemos nem repassamos dados a terceiros por iniciativa própria. Os dados técnicos chegam à Vercel, ao Cloudflare e ao Google em razão do uso dos serviços deles, que os tratam conforme suas próprias políticas. Esses prestadores podem processar dados fora do Brasil, com base em suas cláusulas e políticas de proteção de dados (art. 33 da LGPD).",
  },
  {
    title: "8. Por quanto tempo",
    body: "O que fica no seu navegador permanece até você limpar os dados do site. Sua escolha sobre cookies é solicitada novamente após 12 meses ou quando esta política mudar de forma relevante. Esta plataforma não mantém banco de dados.",
  },
  {
    title: "9. Seus direitos (LGPD)",
    body: "Nos termos da Lei 13.709/2018 (art. 18), você pode pedir confirmação do tratamento, acesso, correção, anonimização, eliminação, portabilidade, informação sobre compartilhamento e revogação do consentimento. Escreva para contatosam.info@gmail.com; respondemos em até 15 dias. Para dados mantidos por Vercel, Cloudflare ou Google, o pedido também deve ser feito diretamente a eles. Você pode ainda apresentar reclamação à ANPD (gov.br/anpd).",
  },
  {
    title: "10. Encarregado (DPO)",
    body: "Por ser um projeto individual de pequeno porte, o e-mail contatosam.info@gmail.com é o canal de comunicação do titular de dados.",
  },
  {
    title: "11. Alterações desta política",
    body: "Se houver mudança relevante, atualizaremos a data de revisão e, quando a mudança afetar cookies ou anúncios, pediremos a sua escolha novamente no banner.",
  },
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

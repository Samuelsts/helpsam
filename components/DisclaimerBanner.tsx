import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export function DisclaimerBanner() {
  return (
    <section className="animate-fade-up rounded-2xl border border-yellow-100 bg-yellow-50/90 px-4 py-3 text-sm leading-6 text-yellow-700 shadow-sm">
      <div className="flex gap-3">
        <ShieldAlert
          className="mt-0.5 h-5 w-5 flex-none text-yellow-600"
          aria-hidden="true"
        />
        <p>
          Esta plataforma é independente e não oficial. O conteúdo é apenas
          auxiliar. Para suporte técnico, utilize os canais oficiais da Focus.
          Consulte os{" "}
          <Link href="/termos" className="font-semibold underline">
            Termos de Uso
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

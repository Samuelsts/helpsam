'use client';

import Link from 'next/link';
import { ShieldAlert, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const storageKey = 'focusIndependentNoticeAccepted';

export function OfficialNoticePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem(storageKey);
    setIsVisible(accepted !== 'true');
  }, []);

  function acceptNotice() {
    window.localStorage.setItem(storageKey, 'true');
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed
    inset-0
    z-50
    overflow-y-auto
    bg-slate-950/55
    backdrop-blur-sm
    p-4
    sm:flex
    sm:items-center
    sm:justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="official-notice-title"
    >
      <div className="flex min-h-full items-center justify-center py-6">
        <section className="animate-scale-in w-full max-w-2xl rounded-3xl border border-white/70 bg-white p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <ShieldAlert className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                  Aviso importante
                </p>
                <h2
                  id="official-notice-title"
                  className="mt-2 text-2xl font-bold text-slate-950"
                >
                  Este site não pertence a Focus/Clinic All
                </h2>
              </div>
            </div>

            <button
              type="button"
              onClick={acceptNotice}
              className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-slate-500 outline-none hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Fechar aviso"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
            <p>
              Esta plataforma é um material <strong>independente</strong>,
              criado voluntariamente por um colaborador com fins exclusivamente
              informativos e de apoio na utilização do sistema. Não representa
              canal oficial da Focus/Clinic All e <strong>não oferece</strong>{' '}
              suporte técnico, abertura de chamados, atendimento individualizado
              ou resolução de problemas.
            </p>

            <p>
              Para qualquer demanda oficial, utilize os{' '}
              <strong>canais oficiais de atendimento</strong> da Focus/Clinic
              All.
            </p>

            <ul className="list-disc space-y-1 pl-5">
              <li>
                Os materiais <strong>não podem</strong> ser baixados, copiados
                ou comercializados.
              </li>
              <li>
                O conteúdo pode ser adicionado, modificado ou removido{' '}
                <strong>sem aviso prévio</strong>.
              </li>
            </ul>

            <p>
              Ao acessar esta plataforma, você declara estar ciente do seu
              caráter independente e concorda com os{' '}
              <strong>Termos e Condições de Uso</strong>.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/termos"
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 outline-none hover:bg-slate-50 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Ler termos de uso
            </Link>

            <button
              type="button"
              onClick={acceptNotice}
              className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 py-2 text-sm font-bold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Entendi e desejo continuar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { readConsent, saveConsent } from "@/lib/consent";

const ADS_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const LEGAL_PATHS = ["/termos", "/privacidade"];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function setAdsConsent(granted: boolean) {
  const v = granted ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
  });
}

function loadAdsScript() {
  if (!ADS_CLIENT || document.getElementById("adsense-js")) return;
  const s = document.createElement("script");
  s.id = "adsense-js";
  s.async = true;
  s.crossOrigin = "anonymous";
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`;
  document.head.appendChild(s);
}

function clearAdCookies() {
  const names = ["__gads", "__gpi", "__eoi"];
  const root = "." + location.hostname.split(".").slice(-3).join(".");
  for (const n of names) {
    for (const d of [location.hostname, root]) {
      document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${d}`;
    }
    document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

const choiceClass =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-2xl border-2 border-slate-950 bg-white px-5 py-2 text-sm font-bold text-slate-950 outline-none hover:bg-slate-950 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500";

export default function ConsentBanner() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (!c) setOpen(true);
    else if (c.ads) {
      setAdsConsent(true);
      loadAdsScript();
    }
    const reopen = () => {
      setReopened(true);
      setOpen(true);
    };
    window.addEventListener("open-consent", reopen);
    return () => window.removeEventListener("open-consent", reopen);
  }, []);

  function choose(ads: boolean) {
    saveConsent(ads);
    setOpen(false);
    setReopened(false);
    setAdsConsent(ads);
    if (ads) {
      loadAdsScript();
    } else {
      clearAdCookies();
      if (document.getElementById("adsense-js")) location.reload();
    }
  }

  function close() {
    setOpen(false);
    setReopened(false);
  }

  const isLegalPage = LEGAL_PATHS.some((p) => pathname?.startsWith(p));
  if (!open || (isLegalPage && !reopened)) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
    >
      <div className="flex min-h-full items-center justify-center py-6">
        <section className="animate-scale-in w-full max-w-2xl rounded-3xl border border-white/70 bg-white p-6 shadow-2xl shadow-slate-950/20 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                {reopened ? "Privacidade" : "Aviso importante"}
              </p>
              <h2
                id="consent-title"
                className="mt-2 text-2xl font-bold text-slate-950"
              >
                {reopened
                  ? "Preferências de cookies"
                  : "Este site não pertence à Focus/Clinic All"}
              </h2>
            </div>
          </div>

          {!reopened && (
            <div className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
              <p>
                Esta plataforma é um material <strong>independente</strong>,
                mantido por Samuel J. Santos, colaborador da Focus, com fins
                informativos e de apoio na utilização do sistema. Não é canal
                oficial da Focus/Clinic All e <strong>não oferece</strong>{" "}
                suporte técnico, abertura de chamados ou atendimento
                individualizado. Para demandas oficiais, utilize os{" "}
                <strong>canais oficiais de atendimento</strong> da Focus.
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Os materiais <strong>não podem</strong> ser baixados, copiados
                  ou comercializados.
                </li>
                <li>
                  O conteúdo pode ser adicionado, modificado ou removido{" "}
                  <strong>sem aviso prévio</strong>.
                </li>
              </ul>
              <p>
                Ao usar esta plataforma, você declara estar ciente do seu
                caráter independente e dos{" "}
                <Link href="/termos" className="font-bold underline">
                  Termos de Uso
                </Link>
                .
              </p>
            </div>
          )}

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            <p className="font-bold text-slate-950">Anúncios e cookies</p>
            <p className="mt-1">
              Para custear o site, usamos o Google AdSense, que utiliza cookies
              e identificadores. Só ativamos se você aceitar, e você pode mudar
              de ideia a qualquer momento em &quot;Preferências de
              cookies&quot;, no rodapé. Veja a{" "}
              <Link href="/privacidade" className="font-bold underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => choose(false)}
              className={choiceClass}
            >
              Recusar anúncios
            </button>
            <button
              type="button"
              onClick={() => choose(true)}
              className={choiceClass}
            >
              Aceitar anúncios
            </button>
          </div>

          {reopened && (
            <button
              type="button"
              onClick={close}
              className="mt-3 w-full text-center text-sm font-semibold text-slate-500 underline outline-none hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Fechar sem alterar
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

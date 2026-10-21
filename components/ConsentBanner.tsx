"use client";

import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { readConsent, saveConsent } from "@/lib/consent";

const ADS_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const NOTICE_KEY = "focusIndependentNoticeAccepted";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function hasNotice(): boolean {
  try {
    return localStorage.getItem(NOTICE_KEY) === "true";
  } catch {
    return false;
  }
}

function saveNotice(): void {
  try {
    localStorage.setItem(NOTICE_KEY, "true");
  } catch {}
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

// Os dois botões usam exatamente a mesma classe: recusar não pode ser
// visualmente mais difícil do que aceitar (Guia de Cookies da ANPD).
const choiceClass =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-2xl border-2 border-slate-950 bg-white px-5 py-2 text-sm font-bold text-slate-950 outline-none hover:bg-slate-950 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 sm:flex-none";

export default function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (!ADS_CLIENT) {
      // Anúncios desligados: só o aviso de independência.
      if (!hasNotice()) setOpen(true);
      return;
    }

    const consent = readConsent();
    if (!consent) setOpen(true);
    else if (consent.ads) {
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

  function acceptNoticeOnly() {
    saveNotice();
    setOpen(false);
  }

  function choose(ads: boolean) {
    saveConsent(ads);
    setOpen(false);
    setReopened(false);
    setAdsConsent(ads);
    if (ads) {
      loadAdsScript();
    } else {
      clearAdCookies();
      // um script já carregado não pode ser "descarregado": recarrega a página
      if (document.getElementById("adsense-js")) location.reload();
    }
  }

  function close() {
    setOpen(false);
    setReopened(false);
  }

  if (!open) return null;

  const adsMode = Boolean(ADS_CLIENT);

  return (
    <section
      role="region"
      aria-labelledby="consent-title"
      className="animate-fade-up fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-start gap-3">
          <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:flex">
            <ShieldAlert className="h-5 w-5" aria-hidden="true" />
          </span>

          <div className="text-sm leading-6 text-slate-600">
            <p id="consent-title" className="font-bold text-slate-950">
              {reopened
                ? "Preferências de cookies"
                : "Esta plataforma é independente"}
            </p>

            {adsMode ? (
              <p className="mt-1">
                {!reopened && (
                  <>
                    Não é canal oficial da Focus/Clinic All e não oferece
                    suporte técnico.{" "}
                  </>
                )}
                Para custear o site, usamos o Google AdSense, que utiliza
                cookies e identificadores. Só ativamos se você aceitar, e você
                pode mudar de ideia em &quot;Preferências de cookies&quot;, no
                rodapé. Veja os{" "}
                <Link href="/termos" className="font-bold underline">
                  Termos de Uso
                </Link>{" "}
                e a{" "}
                <Link href="/privacidade" className="font-bold underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            ) : (
              <p className="mt-1">
                Não é canal oficial da Focus/Clinic All e não oferece suporte
                técnico. Este site não usa cookies de publicidade nem de
                medição. Veja os{" "}
                <Link href="/termos" className="font-bold underline">
                  Termos de Uso
                </Link>{" "}
                e a{" "}
                <Link href="/privacidade" className="font-bold underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-none flex-col gap-2">
          {adsMode ? (
            <>
              <div className="flex gap-2">
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
                  className="text-center text-sm font-semibold text-slate-500 underline outline-none hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Fechar sem alterar
                </button>
              )}
            </>
          ) : (
            <button
              type="button"
              onClick={acceptNoticeOnly}
              className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-slate-950 px-5 py-2 text-sm font-bold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Entendi e desejo continuar
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

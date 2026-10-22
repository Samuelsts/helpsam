export const CONSENT_KEY = 'sam_consent';
export const CONSENT_VERSION = 1;
const NOTICE_KEY = 'focusIndependentNoticeAccepted';
const VISIT_KEY = 'sam_visit_counted';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;

// Quando alguém recusa, só perguntamos de novo se AS DUAS condições forem
// verdadeiras: visitas suficientes E tempo suficiente desde a recusa.
export const REASK_MIN_VISITS = 10;
export const REASK_MIN_DAYS = 30;

export type Consent = {
  v: number;
  ads: boolean;
  ts: number;
  visits?: number; // visitas (sessões) desde a recusa
  lastAsk?: number; // última vez que perguntamos de novo
};

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (c.v !== CONSENT_VERSION || Date.now() - c.ts > MAX_AGE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

export function saveConsent(ads: boolean): void {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ v: CONSENT_VERSION, ads, ts: Date.now() }),
    );
    localStorage.setItem(NOTICE_KEY, 'true');
  } catch {}
}

// Conta no máximo uma visita por sessão (aba), e só para quem recusou.
export function countVisit(c: Consent): Consent {
  try {
    if (c.ads || sessionStorage.getItem(VISIT_KEY)) return c;
    sessionStorage.setItem(VISIT_KEY, '1');
    const next: Consent = { ...c, visits: (c.visits ?? 0) + 1 };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    return next;
  } catch {
    return c;
  }
}

export function shouldReconsider(c: Consent): boolean {
  if (c.ads) return false;
  const since = Math.max(c.ts, c.lastAsk ?? 0);
  return (
    (c.visits ?? 0) >= REASK_MIN_VISITS &&
    Date.now() - since >= REASK_MIN_DAYS * DAY_MS
  );
}

// Ao mostrar o aviso, zera o contador: a recusa continua valendo e só
// voltamos a perguntar depois de novas visitas e de mais tempo.
export function snoozeReconsider(c: Consent): void {
  try {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ ...c, visits: 0, lastAsk: Date.now() }),
    );
  } catch {}
}
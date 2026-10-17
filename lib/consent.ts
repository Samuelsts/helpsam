export const CONSENT_KEY = "sam_consent";
export const CONSENT_VERSION = 1;
const NOTICE_KEY = "focusIndependentNoticeAccepted";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type Consent = { v: number; ads: boolean; ts: number };

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
    localStorage.setItem(NOTICE_KEY, "true");
  } catch {}
}

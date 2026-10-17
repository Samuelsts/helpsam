'use client';

export default function CookiePreferencesLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event('open-consent'))}
    >
      Preferências de cookies
    </button>
  );
}
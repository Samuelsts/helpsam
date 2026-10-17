import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ConsentBanner from "@/components/ConsentBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutoriais Clinic All | Guias em vídeo",
  description:
    "Página independente com tutoriais práticos em vídeo e imagem para usuários do Clinic All Web e Clinic All Desktop.",
  openGraph: {
    title: "Tutoriais Clinic All | Guias em vídeo",
    description:
      "Página independente com tutoriais práticos em vídeo e imagem para usuários do Clinic All Web e Clinic All Desktop.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent','default',{
            ad_storage:'denied', ad_user_data:'denied',
            ad_personalization:'denied', analytics_storage:'denied',
            wait_for_update:500
          });
        `}</Script>
      </head>
      <body className={inter.className}>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}

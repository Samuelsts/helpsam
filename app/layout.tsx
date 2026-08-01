import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { OfficialNoticePopup } from "@/components/OfficialNoticePopup";
import "./globals.css";

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
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <OfficialNoticePopup />
      </body>
    </html>
  );
}

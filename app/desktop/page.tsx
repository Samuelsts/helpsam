import type { Metadata } from "next";
import { TutorialList } from "@/components/TutorialList";
import { appInfo } from "@/src/data/tutorials";

export const metadata: Metadata = {
  title: "Clinic All Desktop",
  description: appInfo.desktop.description,
};

export default function DesktopPage() {
  return <TutorialList app="desktop" />;
}

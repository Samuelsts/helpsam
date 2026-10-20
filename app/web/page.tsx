import type { Metadata } from "next";
import { TutorialList } from "@/components/TutorialList";
import { appInfo } from "@/src/data/tutorials";

export const metadata: Metadata = {
  title: "Clinic All Web",
  description: appInfo.web.description,
};

export default function WebPage() {
  return <TutorialList app="web" />;
}

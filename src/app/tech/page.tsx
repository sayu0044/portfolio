import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillsSection from "@/components/sections/SkillsSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollRestoration from "@/components/ui/ScrollRestoration";

export const metadata: Metadata = {
  title: "Tech",
  description: "Technology and development capabilities used by Sayu.",
};

export default function TechPage() {
  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <main className="bg-[#050505] pt-15 md:pt-18">
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}

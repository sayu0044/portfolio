import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollRestoration from "@/components/ui/ScrollRestoration";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Sayu and the web development work behind the portfolio.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <main className="bg-[#050505] pt-15 md:pt-18">
        <AboutSection showJourney />
      </main>
      <Footer />
    </>
  );
}

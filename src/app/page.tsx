import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollRestoration from "@/components/ui/ScrollRestoration";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "Protofolio - Sayu",
  description: "Sayu portfolio landing page clone.",
};

export default function HomePage() {
  return (
    <>
      <ScrollRestoration />
      <ScrollProgress />
      <Header />
      <main>
        <Preloader />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

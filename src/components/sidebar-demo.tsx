import React from "react";
import { Sidebar, SidebarBody } from "@/components/ui/sidebar";

export default function SidebarDemo() {
  return (
    <Sidebar animate={false}>
      <SidebarBody className="md:rounded-[16px] md:h-[420px] md:w-[300px] md:ml-30 md:mt-10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md text-neutral-900 dark:text-white shadow-lg border border-black/5 dark:border-white/10">
        <nav className="flex w-full flex-col gap-4 p-5">
          <a href="#about" className="uppercase tracking-wide font-semibold text-sm py-2 text-neutral-900 dark:text-white">About</a>
          <a href="#services" className="uppercase tracking-wide font-semibold text-sm py-2 text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white">Services</a>
          <a href="#portfolio" className="uppercase tracking-wide font-semibold text-sm py-2 text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white">Portfolio</a>
          <a href="#testimonial" className="uppercase tracking-wide font-semibold text-sm py-2 text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white">Testimonial</a>
          <a href="#funfact" className="uppercase tracking-wide font-semibold text-sm py-2 text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white">Funfact</a>
          <a href="#blog" className="uppercase tracking-wide font-semibold text-sm py-2 text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white">Blog</a>
          <a href="#contact" className="uppercase tracking-wide font-semibold text-sm py-2 text-neutral-700 hover:text-neutral-900 dark:text-white/80 dark:hover:text-white">Contact</a>
        </nav>
      </SidebarBody>
    </Sidebar>
  );
}



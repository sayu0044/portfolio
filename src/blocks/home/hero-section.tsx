"use client"; 

import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full px-4 sm:px-8 md:pl-[320px] py-8 sm:py-12">
      <div className="max-w-3xl mx-auto rounded-3xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 sm:p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[340px,1fr] items-center">
          <div className="flex items-center justify-center">
            <GlareCard>
              <Image
                src="/images/hero/1.png"
                alt="Hero"
                width={320}
                height={320}
                className="h-full w-full object-contain rounded-full"
                priority
              />
            </GlareCard>
          </div>

          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Hello I&#39;m Sayu Damar Yunan</p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
              A Junior UI/UX Designer
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-neutral-700 dark:text-neutral-300">
              Hi, I&#39;m a Junior Developer
            Creating intuitive and visually appealing digital experiences and turning ideas into limitless applications that meet user expectations.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm"
              >
                My Projects
              </Link>
              <Link
                href="/cv"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-black/20 text-neutral-900 hover:bg-black/[0.03] dark:border-white/30 dark:text-white dark:hover:bg-white/10"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}



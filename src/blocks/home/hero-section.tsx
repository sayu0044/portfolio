"use client"; 

import Image from "next/image";
import { GlareCard } from "@/components/ui/glare-card";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full px-4 sm:px-8 md:pl-[320px] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-8 sm:p-12 shadow-sm">
        <div className="grid gap-10 md:grid-cols-[340px,1fr] items-center">
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

          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-wider text-neutral-600 dark:text-neutral-300">Hello I&#39;m Jenny Wilson</p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
              A Professional UI/UX Designer
            </h1>
            <p className="mt-5 max-w-2xl text-neutral-700 dark:text-neutral-300 md:pr-8">
              I am a creative Designer. I use animation as a third dimension by which to
              simplify experiences and guiding through each and every interaction. I&#39;m not adding
              motion just to spruce things up, but doing it in ways that matter.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full border-4 border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white text-lg font-semibold">75%</div>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">Website Design</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full border-4 border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white text-lg font-semibold">60%</div>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">App Design</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full border-4 border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white text-lg font-semibold">50%</div>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">Dashboard Design</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full border-4 border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white text-lg font-semibold">75%</div>
                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">Graphic Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



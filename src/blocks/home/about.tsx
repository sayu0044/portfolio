"use client";

import Link from "next/link";

export default function AboutBlock() {
  return (
    <section className="w-full px-4 sm:px-8 md:pl-[320px] py-8 sm:py-12">
      <div className="max-w-3xl mx-auto rounded-3xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 sm:p-8 shadow-sm">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">About Me</h2>
        </div>

        <div className="mt-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          <p>
          Hi! My name is Sayu Dmar Yunan. Currently, I am studying for a D4 degree in Information Technology at Airlangga University.
          Since I started college, I have always been interested in technology and design—two fields that seem different but actually complement each other. During my studies in Computer Science, I have learned and developed various technical skills
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-neutral-800/50">Laravel</span>
          <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-neutral-800/50">Flutter</span>
          <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-neutral-800/50">Golang</span>
          <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-neutral-800/50">PostgreSQL</span>
          <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-neutral-800/50">MySQL</span>
          <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-neutral-800/50">Figma</span>
          <span className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-neutral-800/50">Next.js</span>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}



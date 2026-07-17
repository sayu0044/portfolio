import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import { stackGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "A Laravel-first stack: PHP on the server, JavaScript in the browser, MySQL underneath.",
};

export default function TechStackPage() {
  return (
    <>
      <header className="mx-auto max-w-[1200px] px-6 pt-20 pb-6 md:px-10 md:pt-24">
        <Reveal>
          <div className="eyebrow">[ Tech stack ]</div>
          <h1 className="mt-5 font-display text-[clamp(48px,6vw,80px)] leading-[1.05] font-medium text-pretty">
            The tools behind the work.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.7] text-muted">
            A Laravel-first stack: PHP on the server, JavaScript in the
            browser, MySQL underneath, and the tooling that keeps it all
            versioned and tested.
          </p>
        </Reveal>
      </header>

      <main className="mx-auto flex max-w-[1200px] flex-col gap-18 px-6 py-12 pb-28 md:px-10">
        {stackGroups.map((g) => (
          <section key={g.name}>
            <Reveal className="flex flex-wrap items-baseline gap-4.5 border-b border-cream/10 pb-4">
              <h2 className="font-display text-[30px] font-medium">
                {g.name}
              </h2>
              <span className="text-sm text-faint">{g.blurb}</span>
            </Reveal>
            <Reveal stagger className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {g.items.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col gap-3.5 rounded-[20px] border border-cream/10 p-6.5 transition-colors duration-300 hover:border-accent/45"
                >
                  <Image
                    src={s.icon}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                  />
                  <div>
                    <div className="text-[16.5px] font-medium">{s.name}</div>
                    <div className="mt-1 text-[13.5px] leading-[1.5] text-dim">
                      {s.role}
                    </div>
                  </div>
                </div>
              ))}
            </Reveal>
          </section>
        ))}
      </main>

      <section className="relative">
        <div className="relative mx-auto max-w-[800px] px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(36px,4.4vw,56px)] leading-[1.1] font-medium">
              See it put to work<span className="text-accent">.</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Magnetic>
                <Link href="/projects" className="btn btn-primary">
                  View projects
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/" className="btn btn-ghost">
                  Back home
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

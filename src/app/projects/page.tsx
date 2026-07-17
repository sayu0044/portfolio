import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import GhostLabel from "@/components/GhostLabel";
import Magnetic from "@/components/Magnetic";
import Reveal from "@/components/Reveal";
import { projects, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Three projects, each built end to end: database design, backend logic and the interface on top.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="mx-auto max-w-[1200px] px-6 pt-20 pb-18 md:px-10 md:pt-24">
        <Reveal>
          <div className="eyebrow">[ Projects ]</div>
          <h1 className="mt-5 font-display text-[clamp(48px,6vw,80px)] leading-[1.05] font-medium text-pretty">
            Everything I have shipped so far.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.7] text-muted">
            Three projects, each built end to end: database design, backend
            logic and the interface on top.
          </p>
        </Reveal>
      </header>

      <main className="mx-auto flex max-w-[1200px] flex-col px-6 pb-10 md:px-10">
        {projects.map((p, i) => (
          <section key={p.slug} className="relative">
            <GhostLabel
              text={`0${i + 1}`}
              align={i % 2 === 1 ? "right" : "left"}
            />
            <Reveal className="relative grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-18">
            <div
              className={`relative h-[260px] overflow-hidden rounded-[20px] border border-cream/10 sm:h-[340px] ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.16em] text-faint">
                {p.meta}
              </div>
              <h2 className="mt-4 font-display text-[clamp(32px,3.6vw,46px)] font-medium">
                {p.name}
              </h2>
              <p className="mt-4 max-w-[52ch] text-base leading-[1.75] text-soft">
                {p.long}
              </p>
              <div className="mt-5.5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-accent/40 pb-1 text-[15px] text-accent transition-colors duration-300 hover:border-accent-soft hover:text-accent-soft"
                >
                  <GithubLogoIcon size={16} />
                  View code
                </a>
              </div>
            </div>
            </Reveal>
          </section>
        ))}
      </main>

      <section className="relative">
        <div className="relative mx-auto max-w-[800px] px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(36px,4.4vw,56px)] leading-[1.1] font-medium">
              Like what you see<span className="text-accent">?</span>
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              <Magnetic>
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  Get in touch
                </a>
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

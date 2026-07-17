"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";
import { heroPhoto, site } from "@/lib/data";
import { onLoaderDone } from "@/lib/loader-state";

gsap.registerPlugin(ScrollTrigger);

export default function HeroHome() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    // Entrance holds until the first-load curtain starts splitting, so
    // the choreography plays under the reveal instead of behind it.
    let mm: gsap.MatchMedia | undefined;
    const off = onLoaderDone(() => {
      mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // Entrance: masked headline lines rise, supporting copy fades in sequence.
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });
        tl.from(
          ".hero-line-inner",
          { yPercent: 112, duration: 1.05, stagger: 0.14 },
          0.15,
        )
          .from(
            ".hero-fade",
            { autoAlpha: 0, y: 22, duration: 0.8, stagger: 0.12 },
            0.4,
          )
          .from(
            ".hero-photo",
            { autoAlpha: 0, y: 44, duration: 1.1 },
            0.5,
          );

        // Slow parallax drift on the portrait as the hero scrolls away.
        gsap.to(".hero-photo-img", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        }, el);
        return () => ctx.revert();
      });
    });
    return () => {
      off();
      mm?.revert();
    };
  }, []);

  return (
    <div
      ref={root}
      className="grid min-h-[calc(88dvh-72px)] items-center gap-12 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-18"
    >
      <div>
        <div className="hero-fade eyebrow">{site.role}</div>
        <h1 className="mt-5 font-display text-[clamp(52px,7vw,92px)] leading-[1.02] font-medium">
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block">Sayu Damar</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block text-dim">Yunan</span>
          </span>
        </h1>
        <p className="hero-fade mt-6 max-w-[44ch] text-lg leading-relaxed text-pretty text-soft">
          {site.tagline}
        </p>
        <div className="hero-fade mt-9 flex flex-wrap gap-3.5">
          <Magnetic>
            <Link href="/projects" className="btn btn-primary">
              View projects
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/#contact" className="btn btn-ghost">
              Get in touch
            </Link>
          </Magnetic>
        </div>
      </div>
      <div className="hero-photo">
        <div className="relative h-[420px] overflow-hidden rounded-[20px] rounded-t-[190px] border border-cream/10 md:h-[520px]">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="hero-photo-img scale-110 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

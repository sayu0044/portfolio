"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { JourneyStep } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Timeline column: the vertical rule draws itself with scroll while each
// milestone and its dot pop in as they enter the viewport.
export default function Journey({ items }: { items: JourneyStep[] }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".journey-rule", {
          scaleY: 0,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 65%",
            scrub: true,
          },
        });
        gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0,
            y: 34,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%", once: true },
          });
          gsap.from(item.querySelector(".journey-dot"), {
            scale: 0,
            duration: 0.5,
            ease: "back.out(2.2)",
            scrollTrigger: { trigger: item, start: "top 85%", once: true },
          });
        });
      }, el);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="relative py-2 pl-10">
      <div className="journey-rule absolute top-0 bottom-0 left-0 w-px bg-accent/25" />
      <div className="flex flex-col gap-16">
        {items.map((j) => (
          <div key={j.title} className="journey-item relative">
            <div className="journey-dot absolute top-[5px] -left-[45.5px] h-[11px] w-[11px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(240,165,131,0.15)]" />
            <div className="font-mono text-xs tracking-[0.14em] text-accent">
              {j.meta}
            </div>
            <div className="mt-1.5 font-mono text-[11px] tracking-[0.14em] text-faint">
              {j.sub}
            </div>
            <h4 className="mt-3.5 font-display text-[28px] font-medium">
              {j.title}
            </h4>
            <p className="mt-3 max-w-[52ch] text-[15.5px] leading-[1.7] text-muted">
              {j.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

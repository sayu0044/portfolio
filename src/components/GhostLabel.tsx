"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  Oversized outline-only word sitting behind a section's content,
  drifting slower than the scroll so the single background reads as
  layered instead of flat. Host section must be `relative`; content
  siblings need `relative` so they paint above.
*/
export default function GhostLabel({
  text,
  align = "right",
}: {
  text: string;
  align?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.fromTo(
        el.firstElementChild,
        { y: 90 },
        {
          y: -90,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span
        className={`ghost-label absolute top-6 select-none ${
          align === "right" ? "-right-4 md:right-2" : "-left-4 md:left-2"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

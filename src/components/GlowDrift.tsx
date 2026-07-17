"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
  One very soft peach radial glow, fixed behind all content, drifting
  across the viewport as the page scrolls. It gives the single shared
  background slow life without banding the sections. Static under
  prefers-reduced-motion.
*/
export default function GlowDrift() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.fromTo(
        el.firstElementChild,
        { xPercent: -18, yPercent: -22 },
        {
          xPercent: 55,
          yPercent: 45,
          ease: "none",
          scrollTrigger: {
            start: "top top",
            end: "max",
            scrub: 1.2,
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
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/4 h-[70vmax] w-[70vmax] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(240,165,131,0.08) 0%, rgba(240,165,131,0.03) 38%, transparent 65%)",
        }}
      />
    </div>
  );
}

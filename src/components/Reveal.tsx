"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onLoaderDone } from "@/lib/loader-state";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animate direct children with a stagger instead of the wrapper itself. */
  stagger?: boolean;
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  className,
  stagger = false,
  delay = 0,
  y = 28,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Hold until the first-load curtain starts splitting, so reveals in
    // the initial viewport play under it instead of finishing hidden.
    let mm: gsap.MatchMedia | undefined;
    const off = onLoaderDone(() => {
      mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger ? Array.from(el.children) : el;
        const tween = gsap.from(targets, {
          autoAlpha: 0,
          y,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    });
    return () => {
      off();
      mm?.revert();
    };
  }, [stagger, delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

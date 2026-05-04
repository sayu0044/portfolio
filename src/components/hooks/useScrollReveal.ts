"use client";

import { useEffect, useRef, RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
): RefObject<T | null> {
  const { threshold = 0.15, rootMargin = "0px 0px -40px 0px", once = true } =
    options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const container: T = root;

    const targets = container.classList.contains("reveal")
      ? [container]
      : Array.from(
          container.querySelectorAll<HTMLElement>(".reveal, .reveal-left")
        );

    if (targets.length === 0) return;

    const revealImmediately = () => {
      targets.forEach((target) => target.classList.add("visible"));
    };

    const setupIntersectionFallback = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              if (once) observer.unobserve(entry.target);
            } else if (!once) {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold, rootMargin }
      );

      targets.forEach((target) => observer.observe(target));
      return () => observer.disconnect();
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealImmediately();
      return;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    async function setupGsapMotion() {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);

        const hasFinePointer = window.matchMedia(
          "(hover: hover) and (pointer: fine)"
        ).matches;
        const motionTargets = Array.from(
          container.querySelectorAll<HTMLElement>("[data-motion]")
        );

        const context = gsap.context(() => {
          gsap.set(container, { perspective: hasFinePointer ? 1100 : 800 });

          targets.forEach((target, index) => {
            const fromLeft = target.classList.contains("reveal-left");

            gsap.fromTo(
              target,
              {
                autoAlpha: 0,
                x: fromLeft ? -28 : 0,
                y: fromLeft ? 0 : hasFinePointer ? 18 : 12,
                scale: hasFinePointer ? 0.992 : 0.996,
                rotateX: fromLeft ? 0 : hasFinePointer ? 1.4 : 0,
                transformOrigin: "50% 80%",
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotateX: 0,
                duration: hasFinePointer ? 0.42 : 0.34,
                ease: "power3.out",
                delay: Math.min(index * 0.018, 0.07),
                onStart: () => target.classList.add("visible"),
                scrollTrigger: {
                  trigger: target,
                  start: "top 94%",
                  end: "bottom 18%",
                  toggleActions: once
                    ? "play none none none"
                    : "play reverse play reverse",
                  once,
                },
              }
            );
          });

          motionTargets.forEach((target) => {
            const motion = target.dataset.motion;
            const scrub = hasFinePointer ? 0.36 : 0.22;

            if (motion === "parallax") {
              gsap.fromTo(
                target,
                { y: hasFinePointer ? 10 : 5 },
                {
                  y: hasFinePointer ? -12 : -5,
                  ease: "none",
                  scrollTrigger: {
                    trigger: target,
                    start: "top bottom",
                    end: "bottom top",
                    scrub,
                  },
                }
              );
            }

            if (motion === "scale") {
              gsap.fromTo(
                target,
                { scale: hasFinePointer ? 0.996 : 0.998 },
                {
                  scale: hasFinePointer ? 1.012 : 1.006,
                  ease: "none",
                  scrollTrigger: {
                    trigger: target,
                    start: "top 92%",
                    end: "bottom top",
                    scrub,
                  },
                }
              );
            }
          });
        }, container);

        ScrollTrigger.refresh();
        cleanup = () => context.revert();
      } catch {
        cleanup = setupIntersectionFallback();
      }
    }

    setupGsapMotion();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [threshold, rootMargin, once]);

  return ref;
}

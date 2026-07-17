"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
import { site } from "@/lib/data";
import { getLenis } from "@/components/SmoothScroll";

/*
  Route-change cover: the quick sibling of the first-load Loader,
  speaking the same column language. Internal link clicks are
  intercepted (capture phase runs before next/link's handler), five
  seamed ink columns rise from the bottom in a stagger, the route swaps
  and scroll resets underneath, a short beat lets the wordmark read,
  then the columns continue upward and out. Hash-only jumps and
  re-clicks on the current page stay native; a failsafe timeout
  guarantees the cover can never trap anyone on a stalled route.
*/
const COVER_MS = 600;
const MIN_TOTAL_MS = 1000;
const FAILSAFE_MS = 4000;
const STRIPS = [0, 1, 2, 3, 4];

function findInternalHref(event: MouseEvent): string | null {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return null;
  }
  const anchor = (event.target as Element | null)?.closest("a");
  if (!anchor) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;
  if (anchor.dataset.noTransition !== undefined) return null;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname) return null;
  return url.pathname + url.search + url.hash;
}

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const [covering, setCovering] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const coveredAtRef = useRef(0);
  const awaitingPathRef = useRef<string | null>(null);
  const awaitingHashRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const revealingRef = useRef(false);

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  const reveal = useCallback(() => {
    if (revealingRef.current) return;
    revealingRef.current = true;
    awaitingPathRef.current = null;
    clearTimers();

    const el = root.current;
    const done = () => {
      revealingRef.current = false;
      setCovering(false);
    };
    if (!el) {
      done();
      return;
    }
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      gsap.to(el, { autoAlpha: 0, duration: 0.2, onComplete: done });
      return;
    }
    gsap
      .timeline({ onComplete: done })
      .to(el.querySelector(".pt-mark"), { autoAlpha: 0, y: -18, duration: 0.2 }, 0)
      .to(
        gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".pt-strip")),
        { yPercent: -100, duration: 0.55, ease: "power4.inOut", stagger: 0.05 },
        0.05,
      );
  }, []);

  // Cover animation runs as soon as the overlay mounts: columns rise
  // from the bottom, continuing the loader's upward direction.
  useLayoutEffect(() => {
    if (!covering) return;
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.15 });
      return;
    }
    gsap
      .timeline()
      .fromTo(
        gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".pt-strip")),
        { yPercent: 100 },
        { yPercent: 0, duration: 0.4, ease: "power4.inOut", stagger: 0.05 },
        0,
      )
      .fromTo(
        el.querySelector(".pt-mark"),
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.25 },
        0.35,
      );
  }, [covering]);

  // Intercept internal link clicks before next/link handles them.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const href = findInternalHref(event);
      if (!href || awaitingPathRef.current) return;
      event.preventDefault();

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      awaitingPathRef.current = href.split(/[?#]/)[0];
      awaitingHashRef.current = href.includes("#");
      coveredAtRef.current = performance.now();
      setCovering(true);

      timersRef.current.push(
        window.setTimeout(() => router.push(href), reduce ? 150 : COVER_MS),
        window.setTimeout(reveal, FAILSAFE_MS),
      );
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router, reveal]);

  // The route swapped under the cover: reset scroll while hidden
  // (unless the link targets a hash), then reveal after the minimum beat.
  useEffect(() => {
    if (!awaitingPathRef.current || pathname !== awaitingPathRef.current) return;

    if (!awaitingHashRef.current) {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    }

    const elapsed = performance.now() - coveredAtRef.current;
    timersRef.current.push(
      window.setTimeout(reveal, Math.max(MIN_TOTAL_MS - elapsed, 0)),
    );
  }, [pathname, reveal]);

  useEffect(() => clearTimers, []);

  if (!covering) return null;

  return (
    <div
      ref={root}
      role="status"
      aria-label="Changing page"
      className="fixed inset-0 z-95 overflow-hidden"
    >
      {/* Same seamed columns as the Loader so the motion reads as one system */}
      <div aria-hidden className="absolute inset-0 flex">
        {STRIPS.map((i) => (
          <div
            key={i}
            className={`pt-strip h-full flex-1 bg-ink ${
              i > 0 ? "border-l border-cream/5" : ""
            }`}
          />
        ))}
      </div>

      <div className="pt-mark absolute inset-0 grid place-items-center px-6 opacity-0">
        <span className="font-display text-[clamp(22px,3vw,32px)] font-medium text-cream">
          {site.name}
          <span className="text-accent">.</span>
        </span>
      </div>
      <span className="sr-only">Changing page</span>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { heroPhoto, site } from "@/lib/data";
import { markLoaderDone } from "@/lib/loader-state";

/*
  First-load screen in the site's own editorial language: a full ink
  cover divided into five hairline-seamed columns, the serif wordmark
  rising through a mask (the same move the hero makes), a peach rule
  drawing underneath as progress, and a mono percent counter in the
  corner. It gates on the hero portrait and fonts plus a minimum beat,
  capped by a hard timeout so it can never trap anyone. The exit lifts
  the columns upward in a stagger while entrances play underneath
  (released via markLoaderDone). Client-side navigation never replays
  it - the module flag lives until the next full reload.
*/
const CRITICAL_ASSETS = [heroPhoto.src];
const MIN_DISPLAY_MS = 1800;
const MAX_WAIT_MS = 5000;
const STRIPS = [0, 1, 2, 3, 4];

let shownThisPageLoad = false;

export default function Loader() {
  const [state, setState] = useState<"loading" | "done" | "skipped">(() =>
    shownThisPageLoad ? "skipped" : "loading",
  );
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state === "skipped") {
      markLoaderDone();
      return;
    }
    if (state !== "loading") return;
    shownThisPageLoad = true;

    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const counter = { value: 0 };
    const countEl = el.querySelector(".loader-count");
    const renderCount = () => {
      if (countEl) {
        countEl.textContent = String(Math.round(counter.value)).padStart(2, "0");
      }
    };

    const intro = gsap.context(() => {
      if (reduce) return;
      gsap.from(".loader-word", {
        yPercent: 112,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".loader-label", { autoAlpha: 0, duration: 0.6, delay: 0.5 });
      // Progress reads to 93 over the minimum beat; the exit snaps it
      // to 100 so it never sits "finished" while still waiting.
      gsap.to(counter, {
        value: 93,
        duration: MIN_DISPLAY_MS / 1000,
        ease: "power2.out",
        onUpdate: renderCount,
      });
      gsap.fromTo(
        ".loader-rule",
        { scaleX: 0 },
        {
          scaleX: 0.93,
          duration: MIN_DISPLAY_MS / 1000,
          ease: "power2.out",
        },
      );
    }, el);

    const startedAt = performance.now();
    let finished = false;
    let holdTimer: number | undefined;

    const exit = () => {
      markLoaderDone();
      intro.revert();
      counter.value = 100;
      renderCount();
      const done = () => setState("done");
      if (reduce) {
        gsap.to(el, { autoAlpha: 0, duration: 0.25, onComplete: done });
        return;
      }
      gsap
        .timeline({ onComplete: done })
        .set(".loader-rule", { scaleX: 1 })
        .to(
          [".loader-center", ".loader-count", ".loader-label"],
          { autoAlpha: 0, y: -26, duration: 0.3, ease: "power2.in" },
          0,
        )
        .to(
          gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".loader-strip")),
          { yPercent: -100, duration: 0.8, ease: "power4.inOut", stagger: 0.07 },
          0.12,
        );
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      const elapsed = performance.now() - startedAt;
      holdTimer = window.setTimeout(exit, Math.max(MIN_DISPLAY_MS - elapsed, 0));
    };

    const timeout = window.setTimeout(finish, MAX_WAIT_MS);

    let loaded = 0;
    const gates = CRITICAL_ASSETS.length + 1; // assets + fonts
    const step = () => {
      loaded += 1;
      if (loaded >= gates) finish();
    };
    CRITICAL_ASSETS.forEach((src) => {
      const img = new window.Image();
      img.onload = step;
      img.onerror = step; // a failed asset must never block the site
      img.src = src;
    });
    document.fonts.ready.then(step, step);

    return () => {
      window.clearTimeout(timeout);
      if (holdTimer !== undefined) window.clearTimeout(holdTimer);
    };
  }, [state]);

  if (state !== "loading") return null;

  return (
    <div
      ref={root}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-100 overflow-hidden"
    >
      {/* Five seamed columns; the exit lifts them in a left-to-right stagger */}
      <div aria-hidden className="absolute inset-0 flex">
        {STRIPS.map((i) => (
          <div
            key={i}
            className={`loader-strip h-full flex-1 bg-ink ${
              i > 0 ? "border-l border-cream/5" : ""
            }`}
          />
        ))}
      </div>

      <div className="loader-center absolute inset-0 grid place-items-center px-6">
        <div>
          <div className="overflow-hidden pb-1">
            <span className="loader-word block font-display text-[clamp(26px,4.4vw,46px)] font-medium text-cream">
              {site.name}
              <span className="text-accent">.</span>
            </span>
          </div>
          <div className="loader-rule mt-4 h-px origin-left bg-accent/50" />
        </div>
      </div>

      <div className="loader-label absolute bottom-7 left-6 font-mono text-[11px] tracking-[0.28em] text-faint uppercase md:left-10">
        Portfolio / {new Date().getFullYear()}
      </div>
      <div className="loader-count absolute right-6 bottom-6 font-mono text-2xl text-accent md:right-10">
        00
      </div>
      <span className="sr-only">Loading</span>
    </div>
  );
}

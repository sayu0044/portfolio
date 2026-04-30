"use client";

import { useState, useRef, useCallback } from "react";
import { testimonials } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function TestimonialsSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [activeIdx, setActiveIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) {
        if (dx < 0) {
          setActiveIdx((i) => Math.min(i + 1, testimonials.length - 1));
        } else {
          setActiveIdx((i) => Math.max(i - 1, 0));
        }
      }
      touchStartX.current = null;
    },
    []
  );

  return (
    <section
      id="testimonials"
      className="bg-[#f2f2f2] relative overflow-hidden"
      aria-label="Client testimonials"
    >
      <div
        ref={sectionRef}
        className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36"
      >
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="reveal mb-6 justify-center">
            <span className="suptitle text-black/40 justify-center">
              Client voices
            </span>
          </div>
          <h2
            className="reveal text-[clamp(1.8rem,6vw,3.2rem)] font-light leading-[1.15] tracking-tight text-black"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            What Clients
            <br />
            <span className="font-semibold">Say About Working With Me</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="reveal max-w-2xl mx-auto">
          {/* Quote mark */}
          <div className="flex justify-center mb-8" aria-hidden="true">
            <svg viewBox="0 0 48 48" className="w-10 h-10 text-black/10 fill-current">
              <path d="M13.5 10A8.5 8.5 0 0 0 13.5 27a8.5 8.5 0 0 0 4.791-1.48C17.422 29.223 15.878 31.803 14.357 33.59 12.068 36.279 9.943 37.107 9.943 37.107a1.5 1.5 0 1 0 1.113 2.785c0 0 2.875-1.172 5.586-4.357C19.354 32.35 22 27.073 22 19a1.5 1.5 0 0 0-1.016-1.219A8.5 8.5 0 0 0 13.5 10zm21 0A8.5 8.5 0 0 0 34.5 27a8.5 8.5 0 0 0 4.791-1.48C38.422 29.223 36.878 31.803 35.357 33.59 33.068 36.279 30.943 37.107 30.943 37.107a1.5 1.5 0 1 0 1.113 2.785c0 0 2.875-1.172 5.586-4.357C40.354 32.35 43 27.073 43 19a1.5 1.5 0 0 0-1.016-1.219A8.5 8.5 0 0 0 34.5 10z" />
            </svg>
          </div>

          {/* Testimonial slider */}
          <div
            className="testimonial-slider select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-live="polite"
            aria-label="Testimonial slider — swipe to navigate"
          >
            <div
              ref={trackRef}
              className="testimonial-track"
              style={{ transform: `translateX(-${activeIdx * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="testimonial-slide px-2"
                  aria-hidden={i !== activeIdx}
                >
                  <blockquote className="text-center">
                    <p className="text-black/70 text-lg md:text-xl leading-relaxed font-light mb-8 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <footer>
                      <cite className="not-italic">
                        <span className="text-black font-semibold text-sm block">
                          {t.name}
                        </span>
                        <span className="text-black/40 text-xs tracking-wide mt-1 block uppercase">
                          {t.role}
                        </span>
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots + arrows */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setActiveIdx((i) => Math.max(i - 1, 0))}
              disabled={activeIdx === 0}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 disabled:opacity-30 transition-all touch-manipulation"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIdx}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setActiveIdx(i)}
                  className={`
                    rounded-full transition-all duration-300 touch-manipulation
                    ${i === activeIdx
                      ? "w-6 h-2 bg-accent"
                      : "w-2 h-2 bg-black/20 hover:bg-black/40"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveIdx((i) => Math.min(i + 1, testimonials.length - 1))
              }
              disabled={activeIdx === testimonials.length - 1}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 disabled:opacity-30 transition-all touch-manipulation"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

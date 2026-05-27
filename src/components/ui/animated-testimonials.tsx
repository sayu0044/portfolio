"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
};

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [autoplay, testimonials.length]);

  if (!current) {
    return null;
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative mx-auto w-full max-w-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.name}-${active}`}
            initial={{ opacity: 0, y: 18, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -18, rotate: 2 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/4 shadow-2xl shadow-black/30"
          >
            <Image
              src={current.src}
              alt={current.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 320px"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <p className="text-sm font-medium text-white">{current.name}</p>
              <p className="mt-0.5 text-xs text-white/42">
                {current.designation}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/38">
                  {current.quote}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  variant = "default",
  className,
  textClassName,
  wordsClassName,
}: {
  text: string;
  words: string[];
  duration?: number;
  variant?: "default" | "hero";
  className?: string;
  textClassName?: string;
  wordsClassName?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationCycle, setAnimationCycle] = useState(0);
  const isHero = variant === "hero";
  const safeWords = words.length > 0 ? words : [""];
  const heroTextClass =
    "text-[clamp(2.55rem,14vw,7rem)] font-bold leading-none tracking-normal drop-shadow-lg [font-family:var(--font-anton)]";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % safeWords.length);
      setAnimationCycle((cycle) => cycle + 1);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, safeWords.length]);

  return (
    <span
      className={cn(
        isHero ? "flex w-full flex-col items-center text-center" : "inline-flex items-center gap-2",
        className,
      )}
    >
      <motion.span
        layoutId="subtext"
        className={cn(
          isHero
            ? cn("block text-white", heroTextClass)
            : "text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl",
          textClassName,
        )}
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className={cn(
          isHero
            ? cn("relative mt-1 block w-full overflow-hidden text-accent md:mt-2", heroTextClass)
            : "relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10",
          wordsClassName,
        )}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`${currentIndex}-${animationCycle}`}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn(
              "inline-block",
              isHero ? "max-w-full whitespace-normal break-words" : "whitespace-nowrap",
            )}
          >
            {safeWords[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
};

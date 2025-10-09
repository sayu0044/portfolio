"use client";
import { useState } from "react";
import { Timeline, type TimelineItem } from "@/components/ui/timeline";
import { IconChevronLeft, IconChevronRight, IconQuote, IconCalendar, IconMapPin, IconSchool } from "@tabler/icons-react";

export default function JourneySection() {
  const items: TimelineItem[] = [
    { id: "now", title: "Airlangga University Osjur Committee - Equipment Division ", period: "2023 - 2024", description: "Responsible for the equipment needs of activities,Manages the distribution and logistical readiness of events." },
    { id: "intern", title: "Unair Open Badminton Committee - Linesman 2023", period: "2023", description: "Serving as a linesman in official matches, Maintaining order and ensuring the smooth running of matches." },
    { id: "start", title: "Expert Staff - Badminton Sports Division 2024", period: "2024 - Now", description: "Assisting in the planning and implementation of badminton sports activities, Providing technical and administrative support for sports programs." },
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const current = items[index];
  const isCurrent = /now|present|sekarang/i.test(current.period ?? "");
  return (
    <section id="journey" className="w-full px-4 sm:px-8 md:pl-[320px] py-8 sm:py-12">
      <div className="max-w-3xl mx-auto rounded-3xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 sm:p-8 shadow-sm">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">Journey</h2>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">Summary of my learning journey timeline during college.</p>
        </div>
        <div className="relative mt-4">
          <button aria-label="Previous" onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-md border border-black/10 dark:border-white/15 bg-white/70 dark:bg-neutral-900/70 backdrop-blur text-neutral-900 dark:text-white grid place-items-center">
            <IconChevronLeft size={18} />
          </button>
          <button aria-label="Next" onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-md border border-black/10 dark:border-white/15 bg-white/70 dark:bg-neutral-900/70 backdrop-blur text-neutral-900 dark:text-white grid place-items-center">
            <IconChevronRight size={18} />
          </button>

          <div className="mx-6 sm:mx-10 rounded-2xl border border-black/10 dark:border-white/15 p-5 sm:p-6 bg-white/70 dark:bg-neutral-900/70">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white dark:bg-neutral-800 border border-black/10 dark:border-white/10">
                  <IconSchool className="text-neutral-700 dark:text-neutral-300" size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">{current.title}</h3>
                </div>
              </div>
              <IconQuote className="text-neutral-400 dark:text-neutral-500" />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                <IconCalendar size={16} /> {current.period}
              </span>
              {isCurrent && (
                <span className="rounded-full px-3 py-1 text-xs font-semibold bg-neutral-200/60 dark:bg-neutral-700/60 text-neutral-800 dark:text-white">Current</span>
              )}
              <span className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                <IconMapPin size={16} /> Surabaya, Indonesia
              </span>
            </div>

            <p className="mt-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">{current.description}</p>


          </div>
        </div>
      </div>
    </section>
  );
}


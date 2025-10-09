import * as React from "react";

export type TimelineItem = {
  id: string;
  title: string;
  period?: string;
  description?: string;
};

export function Timeline({ items, variant = "card" }: { items: TimelineItem[]; variant?: "line" | "card" }) {
  if (variant === "line") {
    return (
      <ol className="relative ml-3 pl-5 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-black/10 dark:before:bg-white/15">
        {items.map((item) => (
          <li key={item.id} className="relative pb-5 last:pb-0">
            <span className="absolute -left-[9px] mt-1 h-2.5 w-2.5 rounded-full bg-neutral-400 ring-4 ring-white dark:ring-neutral-900" />
            <div className="flex items-baseline gap-2">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
              {item.period && (
                <span className="text-[11px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{item.period}</span>
              )}
            </div>
            {item.description && (
              <p className="mt-1 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{item.description}</p>
            )}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-neutral-900/70 p-4">
          <div className="flex items-baseline justify-between gap-3">
            <h4 className="text-base font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
            {item.period && (
              <span className="text-[11px] px-2 py-0.5 rounded-full border border-black/10 dark:border-white/20 text-neutral-600 dark:text-neutral-300">{item.period}</span>
            )}
          </div>
          {item.description && (
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}



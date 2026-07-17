/*
  Slow scrolling statement band used as a section-divider moment.
  Pure CSS animation (paused by the global reduced-motion rules);
  decorative only, so it is hidden from assistive tech.
*/
export default function Marquee({ items }: { items: string[] }) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span className="ghost-label-solid font-display text-[clamp(44px,6vw,84px)] font-medium italic">
            {item}
          </span>
          <span className="mx-6 text-[clamp(20px,2.6vw,34px)] text-accent md:mx-10">
            &#9679;
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden className="overflow-hidden py-14 select-none md:py-20">
      <div className="marquee-track flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

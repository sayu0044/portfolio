"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export default function BlogSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section
      id="blog"
      className="relative bg-[#080808] overflow-hidden"
      aria-label="Blog — Latest articles"
    >
      {/* Subtle accent glow — bottom right */}
      <div
        className="absolute -bottom-40 -right-40 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(250,235,215,0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Section index */}
      <div
        className="absolute top-10 right-6 lg:right-12 text-[9px] text-white/10 tracking-[0.3em] uppercase select-none"
        style={{ fontFamily: "monospace" }}
        aria-hidden="true"
      >
        06 — Blog
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-300 mx-auto px-4 sm:px-5 md:px-7 lg:px-10 pt-14 md:pt-22 lg:pt-28 pb-14 md:pb-20"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-9 md:mb-14 pb-7 md:pb-10 border-b border-white/5">
          <div>
            <span className="reveal suptitle text-white/25 block mb-6">
              Thinking out loud
            </span>
            <h2
              className="reveal text-[clamp(1.9rem,9vw,3.8rem)] font-light leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Popular
              <br />
              <span className="font-semibold">
                Publications<span className="text-accent">.</span>
              </span>
            </h2>
          </div>
          <Link
            href="#blog"
            className="reveal shrink-0 group inline-flex items-center gap-2 text-xs text-white/30 hover:text-accent transition-colors tracking-widest uppercase"
          >
            View all articles
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            >
              <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
              aria-label={`Article: ${post.title}`}
            >
              {/* Cover image */}
              <div
                data-motion="scale"
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-white/3 border border-white/6 mb-5"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge — overlaid on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/25 rounded-full px-3 py-1 text-accent text-[10px] tracking-widest uppercase font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Meta row */}
              <div className="flex items-center gap-3 mb-3">
                <time
                  className="text-white/30 text-xs tracking-wide"
                  dateTime={post.date}
                >
                  {post.date}
                </time>
                <span className="text-white/10 text-xs" aria-hidden="true">
                  ·
                </span>
                <span className="text-white/30 text-xs tracking-wide">
                  {post.readTime} read
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white/80 text-lg md:text-xl font-medium leading-snug mb-3 group-hover:text-white transition-colors tracking-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-white/30 text-sm leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read link */}
              <Link
                href={`#blog/${post.id}`}
                className="inline-flex items-center gap-2 text-xs text-white/25 hover:text-accent transition-colors tracking-widest uppercase group/link"
                aria-label={`Read more about ${post.title}`}
              >
                <span>Read more</span>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-3 h-3 group-hover/link:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M3 8a.5.5 0 0 1 .5-.5h7.793L8.146 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L11.293 8.5H3.5A.5.5 0 0 1 3 8z" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

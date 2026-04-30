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
      className="bg-white relative"
      aria-label="Blog — Latest articles"
    >
      <div
        ref={sectionRef}
        className="max-w-[1320px] mx-auto px-5 md:px-8 lg:px-12 py-20 md:py-28"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <div className="reveal mb-6">
              <span className="suptitle text-black/40">Thinking out loud</span>
            </div>
            <h2
              className="reveal text-[clamp(1.8rem,5vw,3rem)] font-light leading-[1.15] tracking-tight text-black"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Popular <span className="font-semibold">Publications</span>
            </h2>
          </div>
          <Link
            href="#blog"
            className="reveal shrink-0 text-sm text-black/45 hover:text-accent transition-colors flex items-center gap-2 group"
          >
            View all articles
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {blogPosts.map((post, i) => (
            <article
              key={post.id}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
              aria-label={`Article: ${post.title}`}
            >
              {/* Cover image */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-soft-bg mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-accent text-xs font-medium uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-black/20 text-xs">·</span>
                <time className="text-black/35 text-xs" dateTime={post.date}>
                  {post.date}
                </time>
                <span className="text-black/20 text-xs">·</span>
                <span className="text-black/35 text-xs">{post.readTime} read</span>
              </div>

              {/* Title */}
              <h3 className="text-black text-lg md:text-xl font-medium leading-snug mb-3 group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-black/50 text-sm leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read link */}
              <Link
                href={`#blog/${post.id}`}
                className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-accent transition-colors group/link"
                aria-label={`Read more about ${post.title}`}
              >
                <span>Read more</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

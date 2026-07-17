"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DownloadSimpleIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/tech-stack", label: "Tech Stack" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-cream/8 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-lg font-semibold text-cream md:text-[21px]"
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-5 text-[13.5px] sm:gap-8 sm:text-[14.5px]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "text-cream"
                  : "text-muted transition-colors duration-300 hover:text-accent"
              }
            >
              {label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
            className="flex text-muted transition-colors duration-300 hover:text-accent"
          >
            <GithubLogoIcon size={19} weight="regular" />
          </a>
          <a
            href={site.cv}
            download="Sayu-Damar-Yunan-CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-accent/45 px-4 py-2 text-[13px] font-medium text-accent transition-colors duration-300 hover:border-accent hover:text-accent-soft"
          >
            <DownloadSimpleIcon size={15} weight="bold" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

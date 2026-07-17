import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-cream/8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-8 md:px-10">
        <div className="font-mono text-xs text-faint">
          &copy; {new Date().getFullYear()} {site.name}
        </div>
        <div className="flex gap-6 text-[13.5px]">
          <Link
            href="/projects"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            Projects
          </Link>
          <Link
            href="/tech-stack"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            Tech Stack
          </Link>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors duration-300 hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

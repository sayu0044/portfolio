"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/60 backdrop-blur-sm transition-colors hover:bg-card ${className ?? ""}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="pointer-events-none absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}



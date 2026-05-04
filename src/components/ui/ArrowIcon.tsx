interface ArrowIconProps {
  className?: string;
  direction?: "right" | "down" | "up-right";
}

export default function ArrowIcon({
  className = "",
  direction = "right",
}: ArrowIconProps) {
  const rotate =
    direction === "down"
      ? "rotate-90"
      : direction === "up-right"
        ? "-rotate-45"
        : "";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${rotate} ${className}`}
      aria-hidden="true"
    >
      <path d="M14 5.34a1 1 0 0 0-1.41 1.41L16.17 10H4a1 1 0 1 0 0 2h12.17l-3.58 3.59a1 1 0 0 0 1.41 1.41l5.66-5.66a1 1 0 0 0 0-1.41L14 5.34z" />
    </svg>
  );
}

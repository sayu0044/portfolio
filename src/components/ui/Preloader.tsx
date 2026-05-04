"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`mil-preloader ${hidden ? "mil-preloader-hidden" : ""}`}
      aria-hidden={hidden}
    >
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1">
          <p className="mil-h3 mil-muted mil-thin">{personal.name}</p>
          <p className="mil-h3 mil-muted">·</p>
          <p className="mil-h3 mil-muted mil-thin">{personal.role}</p>
        </div>
        <div className="mil-pos-abs mil-animation-2">
          <div className="mil-reveal-frame">
            <p className="mil-reveal-box" />
            <p className="mil-h3 mil-muted mil-thin">Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

const SKIP_PRELOADER_KEY = "skip-home-preloader";

function shouldSkipPreloader() {
  if (typeof window === "undefined") {
    return false;
  }

  const shouldSkip = window.sessionStorage.getItem(SKIP_PRELOADER_KEY) === "true";

  if (shouldSkip) {
    window.sessionStorage.removeItem(SKIP_PRELOADER_KEY);
  }

  return shouldSkip;
}

export default function Preloader() {
  const skipPreloader = shouldSkipPreloader();
  const [shouldRender] = useState(!skipPreloader);
  const [hidden, setHidden] = useState(skipPreloader);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    const timer = window.setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`mil-preloader ${hidden ? "mil-preloader-hidden" : ""}`}
      aria-hidden={hidden}
    >
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs mil-animation-1">
          {/* <p className="mil-h3 mil-muted mil-thin">{personal.name}</p> */}
          <p className="mil-h3 mil-muted">·</p>
          <p className="mil-h3 mil-muted mil-thin">{personal.tagline}</p>
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


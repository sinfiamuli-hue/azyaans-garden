import { useState } from "react";
import "./PlantImage.css";

// Wraps plant photos with a graceful fallback if an image is
// missing or fails to load — keeps the layout intact instead of
// showing a broken image icon.
export default function PlantImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`plant-image plant-image--fallback ${className}`} role="img" aria-label={alt}>
        <svg width="40%" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path
            d="M20 34C20 34 8 28.5 8 17.5C8 11 13 6 20 6C27 6 32 11 32 17.5C32 28.5 20 34 20 34Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M20 34V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`plant-image ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

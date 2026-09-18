import { Link } from "react-router-dom";
import siteConfig from "../config/site.js";
import "./Logo.css";

// Simple text-based logo with a small botanical mark. Swap the
// <svg> mark below for an image/logo file later without touching
// any layout that uses <Logo />.
export default function Logo({ variant = "dark" }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label="Azyaan's Garden — home">
      <svg
        className="logo__mark"
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 34C20 34 8 28.5 8 17.5C8 11 13 6 20 6C27 6 32 11 32 17.5C32 28.5 20 34 20 34Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M20 34V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M20 20C20 20 16 18.5 16 14.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 25C20 25 25 23.5 25 18.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{siteConfig.shortName}</span>
        <span className="logo__tagline">{siteConfig.tagline}</span>
      </span>
    </Link>
  );
}

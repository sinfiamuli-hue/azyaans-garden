import { useEffect } from "react";
import siteConfig from "../config/site.js";

// Lightweight SEO helper — sets document title + meta description
// + canonical URL without pulling in a extra dependency.
export function useSeo({ title, description, path = "" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.siteName}`
      : siteConfig.seoTitle;
    document.title = fullTitle;

    setMeta("description", description || siteConfig.seoDescription);
    setMeta("og:title", fullTitle, "property");
    setMeta(
      "og:description",
      description || siteConfig.seoDescription,
      "property"
    );
    setMeta("og:type", "website", "property");
    setMeta(
      "og:url",
      `${siteConfig.productionUrl}${path}`,
      "property"
    );
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description || siteConfig.seoDescription);

    setCanonical(`${siteConfig.productionUrl}${path}`);
  }, [title, description, path]);
}

function setMeta(name, content, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

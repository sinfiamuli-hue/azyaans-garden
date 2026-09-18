import { Link } from "react-router-dom";
import siteConfig from "../config/site.js";
import { useSeo } from "../utils/useSeo.js";
import "./OurStory.css";

export default function OurStory() {
  useSeo({
    title: "Our Story",
    description: "The story behind Azyaan's Garden — a small family plant project in the Maldives.",
    path: "/our-story",
  });

  return (
    <div className="story-page">
      <div className="container story-page__head">
        <span className="eyebrow">Our story</span>
        <h1>{siteConfig.story.heading}</h1>
      </div>

      <div className="container story-page__body">
        <p className="story-page__lede">{siteConfig.story.body}</p>

        <div className="story-page__block">
          <h2>{siteConfig.story.futureHeading}</h2>
          <p>{siteConfig.story.futureBody}</p>
        </div>

        <div className="story-page__block story-page__block--note">
          <h2>A family-run garden</h2>
          <p>
            Azyaan's Garden is managed day to day by the family — every
            enquiry, order and delivery is handled personally, over
            WhatsApp, so you always know you're talking to someone who
            genuinely cares about where your plant is going.
          </p>
        </div>

        <div className="story-page__cta">
          <Link to="/plants" className="btn btn-primary">
            Explore Plants
          </Link>
        </div>
      </div>
    </div>
  );
}

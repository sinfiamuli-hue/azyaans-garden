import { Link } from "react-router-dom";
import plants from "../data/plants.js";
import categories from "../data/categories.js";
import siteConfig from "../config/site.js";
import PlantCard from "../components/PlantCard.jsx";
import { useSeo } from "../utils/useSeo.js";
import "./Home.css";

const steps = [
  {
    title: "Choose your plants",
    body: "Browse the garden and add your favourite plants to your basket.",
  },
  {
    title: "Send your request",
    body: "Review your selection and send the details directly to us on WhatsApp.",
  },
  {
    title: "Arrange collection or delivery",
    body: "We'll contact you to confirm availability and arrange collection or local island delivery.",
  },
];

const whyPoints = [
  {
    title: "Cared for personally",
    body: "Every plant is grown and checked by hand before it goes to a new home.",
  },
  {
    title: "No guessing on ordering",
    body: "See what's in stock, pick your plants, and send it straight through WhatsApp.",
  },
  {
    title: "Honest about availability",
    body: "If something's sold out or delivery needs confirming, we say so — no surprises.",
  },
];

export default function Home() {
  useSeo({});
  const featured = plants.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">Welcome to Azyaan's Garden 🌱</p>
            <h1>Small plants. Big dreams.</h1>
            <p className="hero__lede">
              Started from a love of cactus, gardening and growing things,
              Azyaan's Garden is a small family garden where every plant is
              cared for with love.
            </p>
            <div className="hero__actions">
              <Link to="/plants" className="btn btn-primary">
                Explore Plants
              </Link>
              <Link to="/our-story" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">A few from the garden</h2>
          </div>
          <div className="plant-grid">
            {featured.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          <div className="home-browse-all">
            <Link to="/plants" className="btn btn-secondary">
              Browse all plants
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Azyaan's Garden</span>
            <h2 className="section-title">A small garden, grown with care</h2>
          </div>
          <div className="why-grid">
            {whyPoints.map((point) => (
              <div className="why-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Categories</span>
            <h2 className="section-title">Find your kind of plant</h2>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link to={`/plants?category=${cat.slug}`} key={cat.slug} className="category-chip">
                <span>{cat.name}</span>
                <p>{cat.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How ordering works</span>
            <h2 className="section-title">Three simple steps</h2>
          </div>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.title} className="steps__item">
                <span className="steps__number">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container story-teaser">
          <div className="story-teaser__copy">
            <span className="eyebrow">The story behind the garden</span>
            <h2 className="section-title">{siteConfig.story.futureHeading}</h2>
            <p>{siteConfig.story.body}</p>
            <Link to="/our-story" className="btn btn-secondary">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band__inner">
          <h2>Ready to find your next plant?</h2>
          <Link to="/plants" className="btn btn-primary">
            Explore Plants
          </Link>
        </div>
      </section>
    </>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 360 360" width="100%" height="100%" fill="none">
      <circle cx="180" cy="180" r="170" fill="var(--color-forest-pale)" />
      <path
        d="M180 300C180 300 100 260 100 175C100 125 135 90 180 90C225 90 260 125 260 175C260 260 180 300 180 300Z"
        fill="var(--color-forest)"
        opacity="0.12"
      />
      <g stroke="var(--color-forest)" strokeWidth="3" strokeLinecap="round">
        <path d="M180 280V140" />
        <path d="M180 190C180 190 140 175 140 130" />
        <path d="M180 230C180 230 220 215 220 170" />
        <path d="M180 155C180 155 155 145 155 110" />
      </g>
      <circle cx="118" cy="240" r="34" fill="var(--color-blossom)" opacity="0.85" />
      <circle cx="252" cy="120" r="22" fill="var(--color-gold)" opacity="0.85" />
      <circle cx="255" cy="255" r="16" fill="var(--color-forest)" opacity="0.5" />
    </svg>
  );
}

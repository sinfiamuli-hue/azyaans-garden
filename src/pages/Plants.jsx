import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import plants from "../data/plants.js";
import categories from "../data/categories.js";
import PlantCard from "../components/PlantCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import { useSeo } from "../utils/useSeo.js";
import "./Plants.css";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name: A–Z" },
];

export default function Plants() {
  useSeo({
    title: "Plants",
    description: "Browse all plants, cactus and succulents available at Azyaan's Garden.",
    path: "/plants",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const [availableOnly, setAvailableOnly] = useState(false);

  function setCategory(slug) {
    if (slug === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", slug);
    }
    setSearchParams(searchParams, { replace: true });
  }

  const filtered = useMemo(() => {
    let list = plants.filter((plant) => {
      if (activeCategory !== "all" && plant.category !== activeCategory) return false;
      if (availableOnly && (!plant.available || plant.stock === 0)) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        const haystack = `${plant.name} ${plant.id} ${plant.category}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [activeCategory, availableOnly, query, sort]);

  return (
    <div className="plants-page">
      <div className="container plants-page__head">
        <span className="eyebrow">The catalogue</span>
        <h1>All plants</h1>
        <p className="section-lede">
          Browse what's growing right now. Tap a plant to see details, or add
          it straight to your basket.
        </p>
      </div>

      <div className="container">
        <div className="plants-toolbar">
          <label className="plants-search" htmlFor="plant-search">
            <span className="visually-hidden">Search plants</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              id="plant-search"
              type="search"
              placeholder="Search by name or plant ID…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          <div className="plants-toolbar__controls">
            <select
              aria-label="Sort plants"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="plants-select"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <label className="plants-checkbox">
              <input
                type="checkbox"
                checked={availableOnly}
                onChange={(e) => setAvailableOnly(e.target.checked)}
              />
              In stock only
            </label>
          </div>
        </div>

        <div className="category-tabs" role="tablist" aria-label="Filter by category">
          <button
            type="button"
            className={activeCategory === "all" ? "category-tab is-active" : "category-tab"}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              className={activeCategory === cat.slug ? "category-tab is-active" : "category-tab"}
              onClick={() => setCategory(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            title="No plants found."
            body="Looks like this little corner of the garden is empty. Try another search."
          />
        ) : (
          <div className="plant-grid plants-page__grid">
            {filtered.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

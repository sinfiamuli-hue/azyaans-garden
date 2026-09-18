import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import plants from "../data/plants.js";
import categories from "../data/categories.js";
import PlantImage from "../components/PlantImage.jsx";
import Badge from "../components/Badge.jsx";
import QuantityStepper from "../components/QuantityStepper.jsx";
import EmptyState from "../components/EmptyState.jsx";
import PlantCard from "../components/PlantCard.jsx";
import { formatPrice } from "../utils/currency.js";
import { useBasket } from "../context/BasketContext.jsx";
import { createSinglePlantMessage, getWhatsAppUrl } from "../utils/whatsapp.js";
import { useSeo } from "../utils/useSeo.js";
import "./PlantDetail.css";

export default function PlantDetail() {
  const { slug } = useParams();
  const plant = plants.find((p) => p.slug === slug);

  useSeo({
    title: plant ? plant.name : "Plant not found",
    description: plant ? plant.description : "This plant could not be found.",
    path: `/plants/${slug}`,
  });

  if (!plant) {
    return (
      <div className="container">
        <EmptyState
          title="We couldn't find that plant."
          body="It may have been renamed, or the link might be out of date."
          actionLabel="Browse all plants"
          actionTo="/plants"
        />
      </div>
    );
  }

  return <PlantDetailContent plant={plant} />;
}

function PlantDetailContent({ plant }) {
  const { addItem } = useBasket();
  const [quantity, setQuantity] = useState(1);
  const [fallbackUrl, setFallbackUrl] = useState(null);

  const outOfStock = !plant.available || plant.stock === 0;
  const lowStock = plant.available && plant.stock > 0 && plant.stock <= 2;
  const category = categories.find((c) => c.slug === plant.category);
  const related = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 4);

  function handleWhatsAppOrder() {
    const message = createSinglePlantMessage(plant, quantity);
    const url = getWhatsAppUrl(message);
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) setFallbackUrl(url);
  }

  return (
    <div className="plant-detail container">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/plants">Plants</Link>
        <span aria-hidden="true">/</span>
        {category && (
          <>
            <Link to={`/plants?category=${category.slug}`}>{category.name}</Link>
            <span aria-hidden="true">/</span>
          </>
        )}
        <span aria-current="page">{plant.name}</span>
      </nav>

      <div className="plant-detail__layout">
        <div className="plant-detail__media">
          <PlantImage src={plant.image} alt={plant.name} className="plant-detail__image" />
        </div>

        <div className="plant-detail__info">
          <div className="plant-detail__badges">
            {plant.isNew && <Badge tone="new">New</Badge>}
            {outOfStock ? (
              <Badge tone="out">Out of Stock</Badge>
            ) : lowStock ? (
              <Badge tone="low">Low Stock</Badge>
            ) : (
              <Badge tone="available">Available</Badge>
            )}
          </div>

          <h1>{plant.name}</h1>
          <p className="plant-detail__id">Plant ID: {plant.id}</p>
          <p className="plant-detail__price">{formatPrice(plant.price)}</p>
          <p className="plant-detail__description">{plant.description}</p>

          <dl className="plant-detail__specs">
            <div>
              <dt>Category</dt>
              <dd>{category ? category.name : plant.category}</dd>
            </div>
            <div>
              <dt>Difficulty</dt>
              <dd>{plant.difficulty}</dd>
            </div>
            <div>
              <dt>Light</dt>
              <dd>{plant.light}</dd>
            </div>
            <div>
              <dt>Watering</dt>
              <dd>{plant.watering}</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>{plant.size}</dd>
            </div>
          </dl>

          {outOfStock ? (
            <div className="plant-detail__unavailable">
              <p>Currently unavailable.</p>
              <a
                href={getWhatsAppUrl(createSinglePlantMessage(plant, 1))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            <div className="plant-detail__actions">
              <QuantityStepper
                quantity={quantity}
                onChange={setQuantity}
                max={plant.stock}
                label={`Quantity for ${plant.name}`}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => addItem(plant, quantity)}
              >
                Add to Basket
              </button>
              <button type="button" className="btn btn-whatsapp" onClick={handleWhatsAppOrder}>
                Order on WhatsApp
              </button>
            </div>
          )}

          {fallbackUrl && (
            <p className="plant-detail__fallback" role="alert">
              WhatsApp could not be opened. Please{" "}
              <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
                tap here
              </a>{" "}
              or contact us directly on WhatsApp.
            </p>
          )}

          {plant.fact && (
            <div className="plant-detail__fact">
              <strong>Interesting fact</strong>
              <p>{plant.fact}</p>
            </div>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="plant-detail__related">
          <h2 className="section-title">More {category ? category.name.toLowerCase() : ""}</h2>
          <div className="plant-grid">
            {related.map((p) => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

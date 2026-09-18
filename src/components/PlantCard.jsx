import { Link } from "react-router-dom";
import PlantImage from "./PlantImage.jsx";
import Badge from "./Badge.jsx";
import { formatPrice } from "../utils/currency.js";
import { useBasket } from "../context/BasketContext.jsx";
import "./PlantCard.css";

export default function PlantCard({ plant }) {
  const { addItem } = useBasket();

  const outOfStock = !plant.available || plant.stock === 0;
  const lowStock = plant.available && plant.stock > 0 && plant.stock <= 2;

  return (
    <article className="plant-card">
      <Link to={`/plants/${plant.slug}`} className="plant-card__media">
        <PlantImage src={plant.image} alt={plant.name} className="plant-card__image" />
        <div className="plant-card__badges">
          {plant.isNew && <Badge tone="new">New</Badge>}
          {outOfStock && <Badge tone="out">Out of Stock</Badge>}
          {!outOfStock && lowStock && <Badge tone="low">Low Stock</Badge>}
        </div>
      </Link>

      <div className="plant-card__body">
        <Link to={`/plants/${plant.slug}`} className="plant-card__name">
          {plant.name}
        </Link>
        <p className="plant-card__category">{formatCategory(plant.category)}</p>

        <div className="plant-card__footer">
          <span className="plant-card__price">{formatPrice(plant.price)}</span>
          <button
            type="button"
            className="btn btn-secondary plant-card__add"
            onClick={() => addItem(plant, 1)}
            disabled={outOfStock}
          >
            {outOfStock ? "Unavailable" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}

function formatCategory(slug) {
  return slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

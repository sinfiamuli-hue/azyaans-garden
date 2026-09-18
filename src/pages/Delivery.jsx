import { Link } from "react-router-dom";
import siteConfig from "../config/site.js";
import { formatPrice } from "../utils/currency.js";
import { useSeo } from "../utils/useSeo.js";
import "./Delivery.css";

export default function Delivery() {
  useSeo({
    title: "Collection & Delivery",
    description: "How collection and delivery work at Azyaan's Garden.",
    path: "/delivery",
  });

  const { delivery } = siteConfig;

  return (
    <div className="container delivery-page">
      <div className="delivery-page__head">
        <span className="eyebrow">Getting your plants</span>
        <h1>Collection &amp; delivery</h1>
      </div>

      <div className="delivery-grid">
        <div className="delivery-card">
          <h2>Collection</h2>
          <p>
            Customers can collect plants directly from Azyaan's Garden.
            {delivery.collectionAvailable ? "" : " Currently unavailable — please ask on WhatsApp."}
          </p>
        </div>

        <div className="delivery-card">
          <h2>Local delivery</h2>
          <p>Delivery can be arranged anywhere on the island.</p>
          <p className="delivery-card__fee">
            Delivery fee:{" "}
            {delivery.fee ? formatPrice(delivery.fee) : "Confirm on WhatsApp"}
          </p>
          <p>
            Delivery availability and any delivery fee will be confirmed
            with you personally through WhatsApp.
          </p>
        </div>

        <div className="delivery-card">
          <h2>Outside the island</h2>
          <p>{delivery.outsideIslandNote}</p>
        </div>
      </div>

      <div className="delivery-page__note">
        <p>
          The total shown in your basket is an estimated order total until
          we confirm availability and final price on WhatsApp.
        </p>
        <Link to="/plants" className="btn btn-primary">
          Explore Plants
        </Link>
      </div>
    </div>
  );
}

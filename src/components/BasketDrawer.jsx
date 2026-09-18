import { useEffect, useRef, useState } from "react";
import { useBasket } from "../context/BasketContext.jsx";
import { formatPrice } from "../utils/currency.js";
import { createBasketOrderMessage, getWhatsAppUrl } from "../utils/whatsapp.js";
import PlantImage from "./PlantImage.jsx";
import QuantityStepper from "./QuantityStepper.jsx";
import EmptyState from "./EmptyState.jsx";
import siteConfig from "../config/site.js";
import "./BasketDrawer.css";

const deliveryOptions = [
  { value: "collect", label: "Collect from Azyaan's Garden" },
  { value: "local-delivery", label: "Local island delivery" },
  { value: "outside-island", label: "Outside-island / customer-arranged transport" },
];

export default function BasketDrawer() {
  const { items, updateQuantity, removeItem, total, isOpen, setIsOpen, clearBasket } =
    useBasket();

  const [step, setStep] = useState("cart"); // "cart" | "details"
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preference, setPreference] = useState(deliveryOptions[0].value);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});
  const [fallbackUrl, setFallbackUrl] = useState(null);
  const panelRef = useRef(null);
  const [wasOpen, setWasOpen] = useState(isOpen);

  // Reset to the cart step whenever the drawer transitions closed,
  // derived during render instead of in an effect.
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (!isOpen) {
      setStep("cart");
      setFallbackUrl(null);
    }
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!phone.trim()) next.phone = "Please enter a phone number.";
    else if (!/^[0-9+\s-]{6,}$/.test(phone.trim()))
      next.phone = "Please enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSend(e) {
    e.preventDefault();
    if (!validate()) return;

    const preferenceLabel =
      deliveryOptions.find((o) => o.value === preference)?.label || preference;

    const message = createBasketOrderMessage({
      items,
      customerName: name.trim(),
      customerPhone: phone.trim(),
      deliveryPreference: preferenceLabel,
      note,
    });

    const url = getWhatsAppUrl(message);
    const win = window.open(url, "_blank", "noopener,noreferrer");

    if (!win) {
      setFallbackUrl(url);
      return;
    }

    clearBasket();
    setName("");
    setPhone("");
    setNote("");
    setIsOpen(false);
  }

  return (
    <div className="basket-overlay" onMouseDown={(e) => e.target === e.currentTarget && setIsOpen(false)}>
      <div
        className="basket-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Your basket"
        ref={panelRef}
      >
        <div className="basket-panel__header">
          <h2>{step === "cart" ? "Your basket" : "Your details"}</h2>
          <button
            type="button"
            className="basket-panel__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close basket"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <EmptyState
            icon="basket"
            title="Your basket is still growing 🌱"
            body="Find a plant you'd love to take home."
            actionLabel="Explore Plants"
            actionTo="/plants"
          />
        ) : step === "cart" ? (
          <>
            <ul className="basket-list">
              {items.map((item) => (
                <li key={item.id} className="basket-list__item">
                  <PlantImage src={item.image} alt={item.name} className="basket-list__image" />
                  <div className="basket-list__info">
                    <span className="basket-list__name">{item.name}</span>
                    <span className="basket-list__price">{formatPrice(item.price)}</span>
                    <div className="basket-list__controls">
                      <QuantityStepper
                        quantity={item.quantity}
                        onChange={(q) => updateQuantity(item.id, q)}
                        label={`Quantity for ${item.name}`}
                      />
                      <button
                        type="button"
                        className="basket-list__remove"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="basket-list__subtotal">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="basket-panel__footer">
              <div className="basket-total">
                <span>Estimated total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <p className="basket-panel__note">
                This is an estimated order total until we confirm availability and final price.
              </p>
              <button type="button" className="btn btn-primary btn-block" onClick={() => setStep("details")}>
                Continue
              </button>
            </div>
          </>
        ) : (
          <form className="basket-form" onSubmit={handleSend} noValidate>
            <div className="basket-form__field">
              <label htmlFor="customer-name">Name</label>
              <input
                id="customer-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <span className="basket-form__error" id="name-error">{errors.name}</span>}
            </div>

            <div className="basket-form__field">
              <label htmlFor="customer-phone">Phone number</label>
              <input
                id="customer-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && <span className="basket-form__error" id="phone-error">{errors.phone}</span>}
            </div>

            <fieldset className="basket-form__field">
              <legend>Collection or delivery</legend>
              {deliveryOptions.map((option) => (
                <label key={option.value} className="basket-form__radio">
                  <input
                    type="radio"
                    name="preference"
                    value={option.value}
                    checked={preference === option.value}
                    onChange={() => setPreference(option.value)}
                  />
                  {option.label}
                </label>
              ))}
              {preference === "outside-island" && (
                <p className="basket-form__hint">{siteConfig.delivery.outsideIslandNote}</p>
              )}
              {preference === "local-delivery" && (
                <p className="basket-form__hint">
                  Delivery fee: {siteConfig.delivery.fee ? formatPrice(siteConfig.delivery.fee) : "Confirm on WhatsApp"}
                </p>
              )}
            </fieldset>

            <div className="basket-form__field">
              <label htmlFor="customer-note">Note (optional)</label>
              <textarea
                id="customer-note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            {fallbackUrl && (
              <p className="basket-form__error" role="alert">
                WhatsApp could not be opened automatically. Please{" "}
                <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
                  tap here to send your request
                </a>
                , or contact us directly at {siteConfig.whatsappDisplayNumber}.
              </p>
            )}

            <div className="basket-panel__footer basket-panel__footer--form">
              <button type="button" className="btn btn-ghost" onClick={() => setStep("cart")}>
                Back to basket
              </button>
              <button type="submit" className="btn btn-whatsapp btn-block">
                Send Request on WhatsApp
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

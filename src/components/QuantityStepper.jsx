import "./QuantityStepper.css";

export default function QuantityStepper({ quantity, onChange, max, label }) {
  const atMax = typeof max === "number" && quantity >= max;

  return (
    <div className="qty-stepper" role="group" aria-label={label || "Quantity"}>
      <button
        type="button"
        onClick={() => onChange(Math.max(1, quantity - 1))}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span aria-live="polite">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(quantity + 1)}
        disabled={atMax}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

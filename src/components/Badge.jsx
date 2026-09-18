import "./Badge.css";

// tone: "available" | "low" | "out" | "new" | "featured"
export default function Badge({ tone = "available", children }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}

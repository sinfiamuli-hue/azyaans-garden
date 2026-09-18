import { useSeo } from "../utils/useSeo.js";
import EmptyState from "../components/EmptyState.jsx";

export default function NotFound() {
  useSeo({ title: "Page Not Found" });

  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <EmptyState
        title="This page has wandered off."
        body="The page you're looking for doesn't exist. Let's get you back to the garden."
        actionLabel="Back to Home"
        actionTo="/"
      />
    </div>
  );
}

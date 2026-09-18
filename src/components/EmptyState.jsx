import { Link } from "react-router-dom";
import "./EmptyState.css";

export default function EmptyState({ title, body, actionLabel, actionTo, icon = "leaf" }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        {icon === "basket" ? (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M6 8h12l-1 12H7L6 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21C12 21 4 16.5 4 9.5C4 5.9 6.9 3 10.5 3C12 3 12 4.5 12 4.5C12 4.5 12 3 13.5 3C17.1 3 20 5.9 20 9.5C20 16.5 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        )}
      </div>
      <h3>{title}</h3>
      {body && <p>{body}</p>}
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn btn-primary">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

import { getGeneralEnquiryUrl } from "../utils/whatsapp.js";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getGeneralEnquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Message us on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Z"
          fill="currentColor"
        />
        <path
          d="M8.4 7.4c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.1.1.3 0 .5-.1.2-.2.3-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.4.3.1.2.1.9-.2 1.4-.3.5-1.4 1.1-2 1.1-.5 0-1.2 0-3.8-1.6-2.6-1.6-4.1-4-4.3-4.3-.2-.3-1.3-1.8-1.3-3.3 0-1.5.8-2.3 1.1-2.6Z"
          fill="var(--color-forest)"
        />
      </svg>
    </a>
  );
}

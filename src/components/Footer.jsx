import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import siteConfig from "../config/site.js";
import { getGeneralEnquiryUrl } from "../utils/whatsapp.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Logo variant="light" />
          <p>
            A small family garden growing cactus, succulents and plants —
            orders arranged personally over WhatsApp.
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Footer navigation">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/plants">Browse Plants</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/delivery">Collection &amp; Delivery</Link></li>
            <li>
              <a href={getGeneralEnquiryUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-footer__col">
          <h3>Contact</h3>
          <ul>
            <li>WhatsApp: {siteConfig.whatsappDisplayNumber}</li>
            <li>{siteConfig.island}, Maldives</li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__policy">
        <p>Plants are subject to availability. Orders are confirmed manually through WhatsApp.</p>
        <p>Local island delivery may be available. Please confirm arrangements and any delivery fee with us.</p>
        <p>{siteConfig.delivery.outsideIslandNote}</p>
      </div>

      <div className="container site-footer__bottom">
        <p>© {siteConfig.copyrightYear} {siteConfig.siteName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

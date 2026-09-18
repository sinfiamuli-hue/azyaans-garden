import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { useBasket } from "../context/BasketContext.jsx";
import "./Header.css";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/plants", label: "Plants" },
  { to: "/our-story", label: "Our Story" },
  { to: "/delivery", label: "Collection & Delivery" },
];

export default function Header() {
  const { itemCount, setIsOpen } = useBasket();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [lastPath, setLastPath] = useState(location.pathname);

  // Close the mobile menu whenever the route changes (derived
  // during render rather than in an effect).
  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    if (menuOpen) setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Logo />

        <nav
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "site-nav__link is-active" : "site-nav__link"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="basket-toggle"
            onClick={() => setIsOpen(true)}
            aria-label={`Open basket, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 8h12l-1 12H7L6 8Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 8V6a3 3 0 0 1 6 0v2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            {itemCount > 0 && (
              <span className="basket-toggle__count">{itemCount}</span>
            )}
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

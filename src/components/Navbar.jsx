import React, { useState, useEffect } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Ankit</span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link"
                onClick={() => {
                  setMenuOpen(false);
                  document.body.classList.remove("menu-open");
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => {
              const next = !menuOpen;
              setMenuOpen(next);
              document.body.classList.toggle("menu-open", next);
            }}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

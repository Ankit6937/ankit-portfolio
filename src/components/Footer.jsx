import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div className="footer-logo">
            <span className="logo-text">Ankit</span>
            <span className="logo-dot" style={{ color: "#22d3ee" }}>.</span>
          </div>
          <p className="footer-tagline">
            Full Stack Developer · Problem Solver · Tech Enthusiast
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {["home","about","experience","projects","skills","certifications","contact"].map((s) => (
              <li key={s}>
                <a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul className="footer-links">
            <li><a href="https://github.com/Ankit6937" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/ankit6937" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:ankitprajapati6937@gmail.com">Email</a></li>
            <li><a href="tel:+918448337424">+91 8448337424</a></li>
          </ul>
          <p className="footer-education">LPU — B.Tech CSE</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Ankit. All rights reserved.</p>
        <p className="footer-note">Built with React.js ⚛️ | Designed with 💜</p>
      </div>
    </footer>
  );
}

export default Footer;

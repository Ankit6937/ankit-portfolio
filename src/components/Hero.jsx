import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-redesign" ref={heroRef}>
      <div className="hero-container-new">
        {/* Left Content */}
        <div className={`hero-content-left ${isVisible ? "fade-in" : ""}`}>
          <div className="hero-label">
            <span className="label-dot"></span>
            Available for Opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="gradient-text">Ankit</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I'm a</span>
            <span className="role-text gradient-text" id="typed-text">
              Full Stack Developer
            </span>
          </div>

          <p className="hero-bio">
            Passionate Full Stack Developer specializing in React, Node.js, and
            modern web technologies. I build scalable applications with clean
            code and great user experience.
          </p>

          <div className="hero-metrics">
            <div className="metric-box">
              <span className="metric-value">2+</span>
              <span className="metric-label">Projects</span>
            </div>
            <div className="metric-separator"></div>
            <div className="metric-box">
              <span className="metric-value">4+</span>
              <span className="metric-label">Certs</span>
            </div>
            <div className="metric-separator"></div>
            <div className="metric-box">
              <span className="metric-value">50+</span>
              <span className="metric-label">LeetCode</span>
            </div>
            <div className="metric-separator"></div>
            <div className="metric-box">
              <span className="metric-value">4★</span>
              <span className="metric-label">HackerRank</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="https://linkedin.com/in/ankit6937" target="_blank" rel="noopener noreferrer" className="hero-btn primary-hero-btn">
              LinkedIn
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a href="https://github.com/Ankit6937" target="_blank" rel="noopener noreferrer" className="hero-btn secondary-hero-btn">
              GitHub
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="hero-btn secondary-hero-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-tech-stack">
            <span className="tech-badge">
              <span>⚛️</span> React.js
            </span>
            <span className="tech-badge">
              <span>🟢</span> Node.js
            </span>
            <span className="tech-badge">
              <span>🍃</span> MongoDB
            </span>
            <span className="tech-badge">
              <span>🎯</span> C++
            </span>
          </div>
        </div>

        {/* Right — Avatar */}
        <div className={`hero-image-right ${isVisible ? "slide-right" : ""}`}>
          <div className="image-wrapper">
            <div className="image-border"></div>
            <div className="orbit-ring ring-1">
              <div className="orbit-dot"></div>
            </div>
            <div className="orbit-ring ring-2">
              <div className="orbit-dot"></div>
            </div>
            <img
              src={require("../assets/avatar.jpg")}
              alt="Ankit"
              className="hero-avatar"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.querySelector(".avatar-fallback").style.display = "flex";
              }}
            />
            <div className="avatar-fallback" style={{ display: "none" }}>
              <span style={{ fontSize: "5rem" }}>👨‍💻</span>
            </div>
            <div className="floating-tech-bubbles">
              <div className="tech-bubble bubble-1">C++</div>
              <div className="tech-bubble bubble-2">React</div>
              <div className="tech-bubble bubble-3">Node.js</div>
              <div className="tech-bubble bubble-4">MongoDB</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;

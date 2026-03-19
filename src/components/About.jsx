import React, { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const avatarImage = require("../assets/avatar.jpg");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  return (
    <section id="about" className="about-new" ref={sectionRef}>
      <div className="about-container-new">
        <div className={`about-header ${isVisible ? "fade-in" : ""}`}>
          <span className="about-subtitle">Who I Am?</span>
          <h2 className="about-title">
            Turning Ideas Into <span className="gradient-text">Reality</span>
          </h2>
        </div>

        <div className="about-grid-new">
          {/* Left - Main Content */}
          <div className={`about-main ${isVisible ? "slide-left" : ""}`}>
            <div className="about-avatar-card">
              <div className="about-avatar-glow" />
              <img src={avatarImage} alt="Ankit" className="about-avatar-img"
                onError={(e) => { e.target.style.display = "none"; }} />
              <div className="about-avatar-info">
                <span className="about-avatar-name">Ankit</span>
                <span className="about-avatar-role">
                  Full Stack Developer · Problem Solver
                </span>
                <div className="about-avatar-status">
                  <span className="status-dot-about" />
                  Open to opportunities
                </div>
              </div>
            </div>

            <p className="about-lead">
              Full Stack Developer with a passion for building real-time,
              scalable web applications.
            </p>

            <p className="about-desc">
              Currently pursuing B.Tech in Computer Science and Engineering at
              Lovely Professional University, Phagwara with a CGPA of 6.38. I
              specialize in building modern web applications using React.js,
              Node.js, and MongoDB with clean, maintainable code.
            </p>

            <p className="about-desc">
              My expertise spans from real-time WebSocket-based platforms with
              JWT authentication to travel planning web applications with PHP
              and MySQL backends. I focus on elegant solutions that balance
              performance and user experience.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>50+ LeetCode problems solved with strong algorithmic consistency</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Fast Learner</h4>
                  <p>Quickly adapting to new technologies and frameworks</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Team Player</h4>
                  <p>Strong collaboration skills and adaptability in team environments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats & Education */}
          <div className={`about-sidebar ${isVisible ? "slide-right" : ""}`}>
            <div className="stats-grid-new">
              <div className="stat-item-new">
                <div className="stat-icon">💼</div>
                <div className="stat-content">
                  <span className="stat-num">2+</span>
                  <span className="stat-text">Projects</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <span className="stat-num">4+</span>
                  <span className="stat-text">Certs</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">⚙️</div>
                <div className="stat-content">
                  <span className="stat-num">8+</span>
                  <span className="stat-text">Tech</span>
                </div>
              </div>
              <div className="stat-item-new">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <span className="stat-num">4★</span>
                  <span className="stat-text">HackerRank</span>
                </div>
              </div>
            </div>

            <div className="education-box-new">
              <div className="edu-icon">🎓</div>
              <div className="edu-content">
                <h3>Education</h3>
                <h4>Lovely Professional University</h4>
                <p>B.Tech CSE (Computer Science & Engineering)</p>
                <span className="edu-year">Aug '23 – Present</span>
                <div className="edu-gpa">
                  <span>CGPA</span>
                  <strong>6.38/10</strong>
                </div>
              </div>
            </div>

            <div className="objective-box-new">
              <div className="obj-icon">🎯</div>
              <div className="obj-content">
                <h3>Career Objective</h3>
                <p>
                  Seeking opportunities to leverage my full-stack development
                  skills and problem-solving abilities to build impactful,
                  production-grade software systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

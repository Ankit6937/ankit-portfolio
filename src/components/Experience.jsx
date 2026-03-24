import React, { useEffect, useRef } from "react";
import "./Experience.css";

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      role: "C++ Programming: Mastering Data Structures & Algorithms",
      company: "Lovely Professional University",
      type: "Training",
      period: "Jul 2025",
      status: "completed",
      icon: "🎓",
      color: "#a78bfa",
      highlights: [
        "Mastered foundational Data Structures and Algorithms through rigorous hands-on coding in C++.",
        "Formulated solutions for algorithmic challenges involving arrays, linked lists, stacks, queues, recursion, and searching.",
        "Designed a Hostel Automation System utilizing OOP and file handling for efficient data management.",
      ],
      tech: ["C++", "OOP", "File Handling", "DSA"],
    },
  ];

  return (
    <section id="experience" className="experience-new" ref={sectionRef}>
      <div className="experience-container-new">
        <div className="experience-header animate-on-scroll">
          <span className="experience-subtitle">My Journey</span>
          <h2 className="experience-title">
            Training &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="experience-desc">
            Hands-on training and project-based learning to build
            industry-ready full-stack development skills.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`experience-card-new animate-on-scroll card-left`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div
                className="timeline-dot"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 20px ${exp.color}60`,
                }}
              >
                <span>{exp.icon}</span>
              </div>

              <div className="exp-card-inner">
                <div className="exp-card-top">
                  <span className={`exp-status-badge ${exp.status}`}>
                    {exp.status === "current" ? (
                      <>
                        <span className="live-dot"></span> Current
                      </>
                    ) : (
                      "Completed"
                    )}
                  </span>
                  <span className="exp-type-tag">{exp.type}</span>
                </div>

                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-company-row">
                  <span className="exp-company" style={{ color: exp.color }}>
                    {exp.company}
                  </span>
                  <span className="exp-period">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    {exp.period}
                  </span>
                </div>

                <div
                  className="exp-divider"
                  style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                ></div>

                <ul className="exp-highlights">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="exp-highlight-item">
                      <span className="exp-bullet" style={{ color: exp.color }}>▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-tech-row">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-cta animate-on-scroll">
          <div className="cta-inner">
            <span className="cta-icon">🚀</span>
            <div>
              <h4>Open to Full-Time &amp; Internship Opportunities</h4>
              <p>Actively seeking roles in Full-Stack Development</p>
            </div>
            <a href="#contact" className="exp-cta-btn">
              <span>Let's Connect</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

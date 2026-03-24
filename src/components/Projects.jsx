import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  const projects = [
    {
      icon: "🎯",
      title: "Target – Online Quiz Competition",
      period: "Dec 2025",
      description:
        "A real-time online quiz system enabling live question streaming, synchronized scoring, and countdown-driven sessions for multiple concurrent participants.",
      highlights: [
        "Engineered real-time quiz with synchronized scoring and countdown sessions for multiple concurrent users.",
        "Architected a secure authentication framework using JWT and protected REST APIs for role-based access control.",
        "Orchestrated WebSocket-based communication for instant response processing and dynamic leaderboard updates.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      color: "#a78bfa",
      githubLink: "https://github.com/Ankit6937",
      liveLink: null,
    },
    {
      icon: "✈️",
      title: "Art Vibe – Travel Planning Web Application",
      period: "May 2025",
      description:
        "A personalized travel planning application generating dynamic itineraries based on structured user preferences and stored datasets.",
      highlights: [
        "Constructed a personalized travel planner generating dynamic itineraries based on user preferences.",
        "Integrated backend logic with PHP and MySQL to manage user submissions and handle database transactions.",
        "Optimized system efficiency by refining SQL queries, session management, and input validation mechanisms.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
      color: "#22d3ee",
      githubLink: "https://github.com/Ankit6937",
      liveLink: "https://shimmer-portfolio-hub.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects-new" ref={sectionRef}>
      <div className="projects-container-new">
        <div className={`projects-header ${isVisible ? "fade-in" : ""}`}>
          <span className="projects-subtitle">My Work</span>
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-desc">
            Real-world applications built with modern technologies, focusing on
            performance, scalability, and great user experience.
          </p>
        </div>

        <div className="projects-grid-new">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card-new ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-icon-new">{project.icon}</div>

              <div className="project-header-new">
                <h3 className="project-title-new">{project.title}</h3>
                <span className="project-period-new" style={{ color: project.color }}>
                  {project.period}
                </span>
              </div>

              <p className="project-description-new">{project.description}</p>

              <div className="project-highlights-new">
                {project.highlights.map((h, i) => (
                  <div key={i} className="highlight-badge" style={{ borderLeftColor: project.color }}>
                    <span style={{ color: project.color }}>▹</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="project-tech-new">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge-new">{t}</span>
                ))}
              </div>

              <div className="project-links-new">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-new"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-new"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
                      <path d="M5 5h6V3H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6h-2v6H5V5z" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

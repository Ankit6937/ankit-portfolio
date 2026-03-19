import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => { if (node) observer.unobserve(node); };
  }, []);

  const skillCategories = [
    {
      icon: "💻",
      title: "Languages",
      color: "#a78bfa",
      skills: [
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 75 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      icon: "⚛️",
      title: "Frameworks & Libraries",
      color: "#22d3ee",
      skills: [
        { name: "React.js", level: 82 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      icon: "🛠️",
      title: "Tools & Platforms",
      color: "#ec4899",
      skills: [
        { name: "MongoDB", level: 78 },
        { name: "MySQL", level: 75 },
        { name: "Git", level: 80 },
        { name: "XAMPP", level: 70 },
      ],
    },
    {
      icon: "🧠",
      title: "Core Concepts",
      color: "#f59e0b",
      skills: [
        { name: "Data Structures & Algorithms", level: 82 },
        { name: "OOP", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "Authentication (JWT)", level: 78 },
      ],
    },
  ];

  const competencies = [
    { icon: "🎯", title: "Problem Solving", desc: "50+ LeetCode problems with strong algorithmic consistency" },
    { icon: "🤝", title: "Team Collaboration", desc: "Adaptable team player with strong communication skills" },
    { icon: "🚀", title: "Full Stack Dev", desc: "End-to-end web application development from frontend to backend" },
    { icon: "⚡", title: "Real-Time Systems", desc: "WebSocket-based real-time communication and live data platforms" },
  ];

  return (
    <section id="skills" className="skills-new" ref={sectionRef}>
      <div className="skills-container-new">
        <div className={`skills-header ${isVisible ? "fade-in" : ""}`}>
          <span className="skills-subtitle">My Arsenal</span>
          <h2 className="skills-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="skills-grid-new">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`skill-category-new ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="category-header-new">
                <span className="category-icon-new">{cat.icon}</span>
                <h3 className="category-title-new" style={{ color: cat.color }}>{cat.title}</h3>
              </div>
              <div className="skills-list-new">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-item-new">
                    <div className="skill-header-new">
                      <span className="skill-name-new">{skill.name}</span>
                      <span className="skill-percentage-new" style={{ color: cat.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar-new">
                      <div
                        className="skill-progress-new"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          background: `linear-gradient(90deg, ${cat.color}, #22d3ee)`,
                          transition: `width 1s ease ${i * 0.15}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`competencies-section-new ${isVisible ? "fade-in" : ""}`}>
          <h3 className="competencies-title-new">Core Competencies</h3>
          <div className="competencies-grid-new">
            {competencies.map((c, i) => (
              <div key={i} className="competency-card-new">
                <div className="competency-icon-new">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

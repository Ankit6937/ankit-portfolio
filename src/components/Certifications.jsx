import React, { useEffect, useRef, useState } from "react";
import "./Certifications.css";

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const certifications = [
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Infosys",
      date: "Aug 2025",
      icon: "🤖",
      color: "#a78bfa",
      description: "Hands-on experience building generative AI applications using no-code platforms and tools.",
      certificateLink: null,
    },
    {
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Infosys",
      date: "Aug 2025",
      icon: "💬",
      color: "#22d3ee",
      description: "Advanced prompt engineering techniques for ChatGPT-4 and large language models.",
      certificateLink: null,
    },
    {
      title: "Computational Theory: Language Principles & Finite Automata Theory",
      issuer: "Infosys",
      date: "Aug 2025",
      icon: "⚙️",
      color: "#ec4899",
      description: "Formal language theory, automata, and computational complexity fundamentals.",
      certificateLink: null,
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "Coursera",
      date: "Sep 2024",
      icon: "🖥️",
      color: "#f59e0b",
      description: "Comprehensive introduction to computer hardware components and operating system concepts.",
      certificateLink: null,
    },
  ];

  const achievements = [
    { icon: "🏆", text: "4-Star HackerRank rating in Problem Solving" },
    { icon: "💡", text: "Solved 50+ LeetCode problems with strong algorithmic consistency" },
    { icon: "🤖", text: "Leveraged Generative AI tools like ChatGPT to create AI-assisted solutions" },
    { icon: "🚀", text: "Built real-time WebSocket-based quiz platform for concurrent users" },
  ];

  const handleCertificateClick = (link) => {
    if (!link) return;
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section id="certifications" className="certifications-new" ref={sectionRef}>
      <div className="certifications-container-new">
        <div className={`certifications-header ${isVisible ? "fade-in" : ""}`}>
          <span className="certifications-subtitle">Credentials</span>
          <h2 className="certifications-title">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
        </div>

        <div className="certifications-grid-new">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card-new ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-badge-new" style={{ background: cert.color }}>
                <span className="cert-icon-new">{cert.icon}</span>
              </div>

              <div className="cert-content-new">
                <div className="cert-meta-new">
                  <span className="cert-issuer-new">{cert.issuer}</span>
                  <span className="cert-date-new" style={{ color: cert.color }}>{cert.date}</span>
                </div>
                <h3 className="cert-title-new">{cert.title}</h3>
                <p className="cert-description-new">{cert.description}</p>
                {cert.certificateLink && (
                  <div
                    className="cert-view-btn-new"
                    style={{ borderColor: cert.color }}
                    onClick={() => handleCertificateClick(cert.certificateLink)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => { if (e.key === "Enter") handleCertificateClick(cert.certificateLink); }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3h6v6M14 10l7-7M10 3H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>View Certificate</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`strengths-section-new ${isVisible ? "fade-in" : ""}`}>
          <h3 className="strengths-title-new">Key Achievements</h3>
          <div className="strengths-grid-new">
            {achievements.map((a, i) => (
              <div key={i} className="strength-item-new">
                <span className="strength-icon-new">{a.icon}</span>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;

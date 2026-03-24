import React, { useEffect, useState } from "react";
import "./Intro.css";

function Intro({ onComplete }) {
  const [phase, setPhase] = useState("show"); // show → fadeout → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fadeout"), 2200);
    const t2 = setTimeout(() => onComplete(), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div className={`intro-overlay ${phase === "fadeout" ? "intro-fadeout" : ""}`}>
      <div className="intro-content">
        <div className="intro-logo">
          <span className="intro-name gradient-text">Ankit</span>
          <span className="intro-dot">.</span>
        </div>
        <div className="intro-bar">
          <div className="intro-bar-fill"></div>
        </div>
        <p className="intro-tagline">Full Stack Developer</p>
      </div>
    </div>
  );
}

export default Intro;

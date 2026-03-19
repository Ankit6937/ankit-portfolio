import React, { useEffect, useRef } from "react";
import "./Animations.css";

function Animations() {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
      if (ring) {
        setTimeout(() => {
          ring.style.left = `${e.clientX}px`;
          ring.style.top = `${e.clientY}px`;
        }, 80);
      }
    };

    const handleMouseDown = () => {
      cursor?.classList.add("cursor-click");
      ring?.classList.add("ring-click");
    };

    const handleMouseUp = () => {
      cursor?.classList.remove("cursor-click");
      ring?.classList.remove("ring-click");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>
    </>
  );
}

export default Animations;

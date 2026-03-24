import React, { useEffect, useRef } from "react";
import "./Animations.css";

function Animations() {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorRing2Ref = useRef(null);
  const cursorRing3Ref = useRef(null);
  const cursorTentacle1Ref = useRef(null);
  const cursorTentacle2Ref = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    const ring2 = cursorRing2Ref.current;
    const ring3 = cursorRing3Ref.current;
    const tentacle1 = cursorTentacle1Ref.current;
    const tentacle2 = cursorTentacle2Ref.current;

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
      if (ring) {
        setTimeout(() => {
          ring.style.left = `${x}px`;
          ring.style.top = `${y}px`;
        }, 80);
      }
      if (ring2) {
        setTimeout(() => {
          ring2.style.left = `${x}px`;
          ring2.style.top = `${y}px`;
        }, 160);
      }
      if (ring3) {
        setTimeout(() => {
          ring3.style.left = `${x}px`;
          ring3.style.top = `${y}px`;
        }, 240);
      }
      if (tentacle1) {
        setTimeout(() => {
          tentacle1.style.left = `${x}px`;
          tentacle1.style.top = `${y + 20}px`;
        }, 120);
      }
      if (tentacle2) {
        setTimeout(() => {
          tentacle2.style.left = `${x}px`;
          tentacle2.style.top = `${y + 40}px`;
        }, 200);
      }
    };

    const handleMouseDown = () => {
      cursor?.classList.add("cursor-click");
      ring?.classList.add("ring-click");
      ring2?.classList.add("ring-click");
      ring3?.classList.add("ring-click");
    };

    const handleMouseUp = () => {
      cursor?.classList.remove("cursor-click");
      ring?.classList.remove("ring-click");
      ring2?.classList.remove("ring-click");
      ring3?.classList.remove("ring-click");
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
      <div className="cursor-ring2" ref={cursorRing2Ref}></div>
      <div className="cursor-ring3" ref={cursorRing3Ref}></div>
      <div className="cursor-tentacle1" ref={cursorTentacle1Ref}></div>
      <div className="cursor-tentacle2" ref={cursorTentacle2Ref}></div>
    </>
  );
}

export default Animations;

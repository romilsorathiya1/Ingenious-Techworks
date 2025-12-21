// src/components/CustomCursor.js
"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);

    // Hover logic for elements with class 'hover-target'
    const addHoverListeners = () => {
        const targets = document.querySelectorAll(".hover-target");
        targets.forEach((el) => {
            el.addEventListener("mouseenter", () => setHovering(true));
            el.addEventListener("mouseleave", () => setHovering(false));
        });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    
    // Initial add
    addHoverListeners();
    // Re-add listeners if DOM changes (optional, usually sufficient on mount for static sites)
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Smooth follow logic for outline
  useEffect(() => {
    let animationFrameId;
    const animateOutline = () => {
      setOutlinePosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateOutline);
    };
    animateOutline();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "10px", height: "10px",
          backgroundColor: "var(--primary)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${clicking ? 1.5 : 1})`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: hovering ? "80px" : "50px",
          height: hovering ? "80px" : "50px",
          border: "2px solid var(--primary)",
          backgroundColor: hovering ? "rgba(0, 122, 255, 0.1)" : "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s, height 0.2s, background-color 0.2s, transform 0.1s",
          transform: `translate(${outlinePosition.x}px, ${outlinePosition.y}px) translate(-50%, -50%) scale(${clicking ? 0.8 : 1})`,
        }}
      />
    </>
  );
}
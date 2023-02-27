"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100,
  });
  const [isHoveringInteractiveElement, setIsHoveringInteractiveElement] =
    useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => {
      setIsHoveringInteractiveElement(true);
    };

    const mouseLeave = () => {
      setIsHoveringInteractiveElement(false);
    };

    window.addEventListener("mousemove", mouseMove);
    const interactiveElements = document.querySelectorAll(
      "a, button, input, select, textarea, .card"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    document.addEventListener("click", () => {
      setIsHoveringInteractiveElement(false);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
      document.removeEventListener("click", () => {
        setIsHoveringInteractiveElement(false);
      });
    };
  }, []);

  // Variant animation
  const variants = {
    default: {
      scale: isHoveringInteractiveElement ? 0.4 : 1,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: {
        scale: { duration: .25 },
        x: {duration: 0, delay: 0},
        y: {duration: 0, delay: 0}
      },
    },
  };

  // function for textLeave and textEnter
  return (
    <motion.div
      className="bg-primary hidden lg:block z-[100] h-10 w-10 rounded-full fixed top-0 left-0 pointer-events-none mix-blend-exclusion"
      variants={variants}
      animate="default"
    />
  );
};

export default Cursor;

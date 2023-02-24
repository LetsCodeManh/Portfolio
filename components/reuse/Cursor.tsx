"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Variant animation
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  // function for textLeave and textEnter
  return (
    <motion.div
      className="bg-primary hidden lg:block z-[100] h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none mix-blend-exclusion"
      variants={variants}
      animate="default"
    />
  );
};

export default Cursor;

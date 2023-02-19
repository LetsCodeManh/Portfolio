export const backgroundNav = () => ({
  open: {
    opacity: 1,
    scale: 100,
    transition: {
      delay: 0,
    },
  },
  close: {
    opacity: 0,
    scale: 1,
    transition: {
      delay: 0.5,
    },
  },
});

export const itemNav = (index) => ({
  open: {
    opacity: 1,
    transition: {
      duration: index * 0.4,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: index * 0.2,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    opacity: 0,
    scale: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeInOut",
    },
  },
});

export const stagger = (staggerChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
    },
  },
});

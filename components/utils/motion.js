export const backgroundNav = () => ({
  open: {
    scale: 100,
    transition: {
      delay: 0,
    },
  },
  close: {
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

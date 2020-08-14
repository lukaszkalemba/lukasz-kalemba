export const wrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const childrenVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  initial: { opacity: 0, y: 50 },
};

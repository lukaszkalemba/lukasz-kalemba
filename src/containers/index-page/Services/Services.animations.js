const wrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  initial: { opacity: 0, y: 72 },
};

export default {
  wrapperVariants,
  childrenVariants,
};

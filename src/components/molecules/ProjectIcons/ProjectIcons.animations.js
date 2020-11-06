const container = {
  variants: {
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, delay: 0.25 },
    },
    initial: { opacity: 0, x: 50 },
  },
  animate: 'animate',
  initial: 'initial',
};

export default { container };

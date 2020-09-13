const paragraph = {
  variants: {
    animate: {
      opacity: 0.5,
      x: 0,
      transition: { duration: 0.8, delay: 0.6 },
    },
    initial: { opacity: 0, x: 40 },
  },
  initial: 'initial',
  animate: 'animate',
};

const buttonWrapper = {
  variants: {
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 1.1 },
    },
    initial: { opacity: 0, x: 40 },
  },
  initial: 'initial',
  animate: 'animate',
};

export default { paragraph, buttonWrapper };

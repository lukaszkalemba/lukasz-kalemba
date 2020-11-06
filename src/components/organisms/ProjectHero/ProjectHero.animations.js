const description = {
  variants: {
    animate: {
      opacity: 0.8,
      x: 0,
      transition: { duration: 0.8, delay: 0.25 },
    },
    initial: { opacity: 0, x: -30 },
  },
  initial: 'initial',
  animate: 'animate',
};

const background = {
  variants: {
    animate: {
      opacity: 0.8,
      x: 0,
      transition: { duration: 0.8, delay: 0.25 },
    },
    initial: { opacity: 0, x: 100 },
  },
  initial: 'initial',
  animate: 'animate',
};

const scroll = {
  variants: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.25 } },
  },
  initial: 'initial',
  animate: 'animate',
};

export default { description, background, scroll };

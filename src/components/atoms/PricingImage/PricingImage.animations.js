const image = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  },
  initial: 'initial',
  animate: 'animate',
};

const imageShadow = {
  variants: {
    initial: { opacity: 0, x: -40, y: -40 },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  },
  initial: 'initial',
  animate: 'animate',
};

export default { image, imageShadow };

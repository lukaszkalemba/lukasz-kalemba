const imageVariants = {
  initial: { opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.75,
    },
  },
};

const imageShadowVariants = {
  initial: { opacity: 0, x: -40, y: -40 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default { imageVariants, imageShadowVariants };

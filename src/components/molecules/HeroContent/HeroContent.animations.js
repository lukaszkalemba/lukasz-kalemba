const getHeading = size => {
  return {
    variants: {
      initial: { opacity: 0, x: size.width > 1150 ? 80 : -80 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.75 } },
    },
  };
};

const getParagraph = size => {
  return {
    variants: {
      initial: { opacity: 0, x: size.width > 1150 ? -80 : 80 },
      animate: { opacity: 0.5, x: 0, transition: { duration: 0.75 } },
    },
  };
};

const getButtons = size => {
  return {
    variants: {
      initial: { opacity: 0, x: size.width > 1150 ? -80 : 80 },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.75,
          delay: size.width > 1150 ? 1 : 2,
        },
      },
    },
  };
};

export default {
  getHeading,
  getParagraph,
  getButtons,
};

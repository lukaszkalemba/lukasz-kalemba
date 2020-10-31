const getHeading = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? 35 : -80,
      },
      animate: { opacity: 1, x: 0, transition: { duration: 0.75 } },
    },
  };
};

const getParagraph = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? 35 : -80,
      },
      animate: {
        opacity: 0.5,
        x: 0,
        transition: { duration: 0.75, delay: isMobile ? 0.4 : 1 },
      },
    },
  };
};

const getButtons = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? 28 : -80,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.75,
          delay: isMobile ? 0.8 : 1,
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

const getHeading = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? 30 : -80,
        y: isMobile ? 20 : 0,
      },
      animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.75 } },
    },
  };
};

const getParagraph = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? 50 : -80,
      },
      animate: {
        opacity: 0.5,
        x: 0,
        transition: { duration: 0.75 },
      },
    },
  };
};

const getButtons = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? 50 : -80,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.75,
          delay: isMobile ? 2 : 1,
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

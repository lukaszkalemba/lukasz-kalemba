const getTriangle = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? -25 : 50,
        y: isMobile ? -25 : 0,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.75,
        },
      },
    },
    initial: 'initial',
    animate: 'animate',
  };
};

export default {
  getTriangle,
};

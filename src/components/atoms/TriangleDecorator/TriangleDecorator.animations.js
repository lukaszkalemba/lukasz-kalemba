const getTriangle = isMobile => {
  return {
    variants: {
      initial: {
        opacity: 0,
        x: isMobile ? 35 : 50,
        y: isMobile ? 35 : 0,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.75,
          delay: isMobile ? 1.05 : 0,
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

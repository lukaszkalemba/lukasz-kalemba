const getButton = isMobile => ({
  variants: {
    initial: {
      opacity: 0,
      x: isMobile ? -30 : -80,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.25,
      },
    },
  },
  initial: 'initial',
  animate: 'animate',
});

export default {
  getButton,
};

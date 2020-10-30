const getList = isMobile =>
  isMobile
    ? {
        variants: {
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.25,
              type: 'tween',
            },
          },
          initial: { opacity: 0, x: -30 },
        },
        animate: 'animate',
        initial: 'initial',
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : null;

const container = {
  variants: {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.25,
      },
    },
    initial: { opacity: 0, y: 20 },
  },
  animate: 'animate',
  initial: 'initial',
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default { getList, container };

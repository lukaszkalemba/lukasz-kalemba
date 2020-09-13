const getWrapper = animate => {
  return {
    initial: 'initial',
    animate,
  };
};

const service = {
  variants: {
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    initial: { opacity: 0, y: 20 },
  },
};

export default {
  getWrapper,
  service,
};

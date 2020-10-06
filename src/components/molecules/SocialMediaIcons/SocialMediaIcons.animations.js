const getWrapper = animate => {
  return {
    variants: {
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 0 },
      },
      initial: { opacity: 0, y: 20 },
    },
    animate,
    initial: 'initial',
  };
};

export default { getWrapper };

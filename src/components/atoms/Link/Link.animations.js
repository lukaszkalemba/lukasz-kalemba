const getLink = animate => {
  return {
    variants: {
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      },
      initial: { opacity: 0, x: 40 },
    },
    animate,
    initial: 'initial',
  };
};

export default { getLink };

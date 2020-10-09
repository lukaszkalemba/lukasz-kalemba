const getContentItem = animate => {
  return {
    variants: {
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      },
      initial: { opacity: 0, y: 100 },
    },
    animate,
    initial: 'initial',
  };
};

export default { getContentItem };

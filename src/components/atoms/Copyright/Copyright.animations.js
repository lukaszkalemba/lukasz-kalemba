const getCopyright = animate => {
  return {
    variants: {
      animate: {
        opacity: 0.8,
        y: 0,
        transition: { duration: 0.8 },
      },
      initial: { opacity: 0, y: 20 },
    },
    animate,
    initial: 'initial',
  };
};

export default { getCopyright };

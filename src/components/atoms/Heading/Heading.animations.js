const getHeading = (animation, animate) => {
  if (animation) {
    return {
      ...animation,
      animate,
      initial: 'initial',
    };
  }

  const variants = {
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
    initial: { opacity: 0, x: 40 },
  };

  return { variants, animate, initial: 'initial' };
};

export default { getHeading };

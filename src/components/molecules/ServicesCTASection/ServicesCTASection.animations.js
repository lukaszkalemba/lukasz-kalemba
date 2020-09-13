const getWrapper = animate => {
  return {
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
    animate,
    initial: 'initial',
  };
};

const children = {
  variants: {
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    initial: { opacity: 0, y: 50 },
  },
};

export default { getWrapper, children };

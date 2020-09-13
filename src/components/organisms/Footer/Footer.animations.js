const getFooter = animate => {
  return {
    variants: {
      animate: {
        transition: {
          staggerChildren: 0.25,
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
    initial: { opacity: 0, y: 20 },
  },
};

const socialMediaIcons = {
  variants: {
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0 },
    },
    initial: { opacity: 0, y: 20 },
  },
};

export default { getFooter, children, socialMediaIcons };

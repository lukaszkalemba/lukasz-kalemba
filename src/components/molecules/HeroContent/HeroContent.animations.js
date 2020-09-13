const heading = {
  variants: {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  },
};

const paragraph = {
  variants: {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 0.5, x: 0, transition: { duration: 0.75 } },
  },
};

const getButtons = size => {
  return {
    variants: {
      initial: { opacity: 0, x: -80 },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.75,
          delay: size.width > 1150 ? 1 : 2,
        },
      },
    },
  };
};

export default {
  heading,
  paragraph,
  getButtons,
};

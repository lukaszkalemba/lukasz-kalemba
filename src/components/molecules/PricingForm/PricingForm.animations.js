const inputsWrapper = {
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  },
  initial: 'initial',
  animate: 'animate',
};

const input = {
  variants: {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'linear',
      },
    },
  },
};

export default { inputsWrapper, input };

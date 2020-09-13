const wrapper = {
  variants: {
    animate: {
      transition: {
        staggerChildren: 0.75,
        delayChildren: 0.25,
      },
    },
  },
  initial: 'initial',
  animate: 'animate',
};

const scrollWrapper = {
  variants: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 1 } },
  },
  initial: 'initial',
  animate: 'animate',
};

export default {
  wrapper,
  scrollWrapper,
};

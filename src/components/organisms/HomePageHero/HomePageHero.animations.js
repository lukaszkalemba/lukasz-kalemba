const wrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.75,
      delayChildren: 0.25,
    },
  },
};

const scrollWrapperVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 1 } },
};

export default {
  wrapperVariants,
  scrollWrapperVariants,
};

const wrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.75,
      delayChildren: 0.25,
    },
  },
};

const headingVariants = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.75 } },
};

const paragraphVariants = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 0.5, x: 0, transition: { duration: 0.75 } },
};

const getButtonsVariants = size => ({
  initial: { opacity: 0, x: -80 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: size.width > 1150 ? 1 : 2,
    },
  },
});

const scrollWrapperVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 1 } },
};

export default {
  wrapperVariants,
  headingVariants,
  paragraphVariants,
  getButtonsVariants,
  scrollWrapperVariants,
};

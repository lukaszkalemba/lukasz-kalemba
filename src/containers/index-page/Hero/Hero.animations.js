const mq = window.matchMedia('(min-width: 1150px)');

const wrapperVariants = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
      delayChildren: 0.5,
      when: 'afterChildren',
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

const buttonsVariants = {
  initial: { opacity: 0, x: -80 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: mq.matches ? 1.25 : 2,
    },
  },
};

export default {
  wrapperVariants,
  headingVariants,
  paragraphVariants,
  buttonsVariants,
};

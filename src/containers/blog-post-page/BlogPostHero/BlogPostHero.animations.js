const paragraphVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 0.75, x: 0, transition: { duration: 0.75, delay: 0.25 } },
};

const scrollWrapperVariants = {
  initial: { opacity: 0, y: -90 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

export default { paragraphVariants, scrollWrapperVariants };

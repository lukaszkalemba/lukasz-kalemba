const footerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  initial: { opacity: 0, y: 20 },
};

const socialMediaIconsVariants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0 },
  },
  initial: { opacity: 0, y: 20 },
};

export default { footerVariants, childrenVariants, socialMediaIconsVariants };

const getHeaderVariants = isHomePage => ({
  initial: { opacity: 0, x: -80 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, delay: isHomePage ? 1.25 : 0.25 },
  },
});

export default { getHeaderVariants };

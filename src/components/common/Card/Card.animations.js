const getCardVariants = (isOffset, mq) => ({
  animate: {
    opacity: 1,
    y: isOffset && mq.matches ? 40 : 0,
    transition: { duration: 0.8 },
  },
  initial: { opacity: 0, y: 100 },
});

export default { getCardVariants };

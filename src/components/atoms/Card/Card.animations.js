const getCard = (isOffset, size, animate) => ({
  variants: {
    animate: {
      opacity: 1,
      y: isOffset && size.width > 768 ? 40 : 0,
      transition: { duration: 0.8 },
    },
    initial: { opacity: 0, y: 80 },
  },
  animate,
  initial: 'initial',
});

export default { getCard };

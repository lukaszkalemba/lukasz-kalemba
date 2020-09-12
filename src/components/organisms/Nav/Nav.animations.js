const getHeaderVariants = (isHomePage, isMobile) => {
  let delay = null;
  let x = null;

  if (isHomePage) {
    delay = isMobile ? 2 : 1;
    x = isMobile ? 50 : -30;
  } else {
    delay = isMobile ? 0.2 : 0.25;
    x = isMobile ? -30 : -80;
  }

  return {
    initial: {
      opacity: 0,
      x,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay,
      },
    },
  };
};

export default { getHeaderVariants };

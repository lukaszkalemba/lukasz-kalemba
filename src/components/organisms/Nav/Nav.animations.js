const getHeader = (isHomePage, isMobile) => {
  let delay;
  let x;

  if (isHomePage) {
    delay = isMobile ? 2 : 1;
    x = isMobile ? 50 : -80;
  } else {
    delay = isMobile ? 0.2 : 0.25;
    x = isMobile ? -30 : -80;
  }

  return {
    variants: {
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
    },
    initial: 'initial',
    animate: 'animate',
  };
};

export default { getHeader };

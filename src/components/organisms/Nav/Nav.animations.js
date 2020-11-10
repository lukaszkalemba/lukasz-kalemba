const getHeader = (isHomePage, isMobile) => {
  let delay;
  let x;
  let y;

  if (isHomePage) {
    delay = isMobile ? 1.05 : 0.65;
    x = isMobile ? -23 : -80;
    y = isMobile ? -23 : 0;
  } else {
    delay = isMobile ? 0.2 : 0.25;
    x = isMobile ? -30 : -80;
    y = 0;
  }

  return {
    variants: {
      initial: {
        opacity: 0,
        x,
        y,
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
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

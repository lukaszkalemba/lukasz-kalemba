export const setHeightOnMobile = () => {
  let constantHeight = window.innerHeight;

  document.documentElement.style.setProperty(
    '--vh',
    `${constantHeight * 0.01}px`
  );

  window.addEventListener('resize', () => {
    if (
      window.innerHeight - constantHeight > 80 ||
      constantHeight - window.innerHeight > 80
    ) {
      constantHeight = window.innerHeight;

      document.documentElement.style.setProperty(
        '--vh',
        `${constantHeight * 0.01}px`
      );
    }
  });
};

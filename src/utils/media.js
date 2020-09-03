import { css } from 'styled-components';

export const sizes = {
  phone: 576,
  tablet: 768,
  laptop: 1150,
  desktop: 1566,
  largeDesktop: 1920,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

import { css } from 'styled-components';

export const sizes = {
  phone: 576,
  tablet: 768,
  desktop: 1150,
  largeDesktop: 1600,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

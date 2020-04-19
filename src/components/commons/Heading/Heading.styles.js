import styled, { css } from 'styled-components';

const baseStyles = css`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive2};
  margin: 1em 0 1.5em 0.29em;

  ::after {
    content: '';
    position: absolute;
    top: -0.1em;
    left: -0.29em;
    width: 0;
    height: 0;
    z-index: -1;
    opacity: 0.5;
    border-width: 1.75em 2em 0 0;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${({ theme }) => theme.color.primary};
  }
`;

const H1 = styled.h1`
  ${baseStyles}

  font-size: ${({ theme }) => theme.font.size.m};

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xl};
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.xxl};
  `}
`;

const H2 = styled.h2`
  ${baseStyles}

  font-size: ${({ theme }) => theme.font.size.x};

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.l};
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.xl};
  `}
`;

const Heading = {
  H1,
  H2,
};

export default { Heading };

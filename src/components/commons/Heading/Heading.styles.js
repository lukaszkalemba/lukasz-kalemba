import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const headingBase = css`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive2};

  ::after {
    content: '';
    position: absolute;
    top: -0.1em;
    left: -0.29em;
    width: 0;
    height: 0;
    z-index: -1;
    opacity: 0.5;
    border-width: 1.8em 2em 0 0;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${({ theme }) => theme.color.primary};
  }
`;

const H1 = styled(motion.h1)`
  ${headingBase}
  font-size: ${({ theme }) => theme.font.size.m};

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xl};
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.xxl};
    margin: 0.20em 0;
    margin-left: calc(3vw);
  `}
`;

const H2 = styled.h2`
  ${headingBase}
  font-size: ${({ theme }) => theme.font.size.x};
  margin-left: 0.29em;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.l};
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.xl};
  `}
`;

const Heading = {
  H1,
  H2,
};

export default { Heading };

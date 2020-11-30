import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const headingBase = css`
  font-size: ${({ theme }) => theme.font.size.heading.xs};
  z-index: ${({ theme }) => theme.zindex.level2};
  position: relative;
  margin-left: 15px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.heading.m};
    margin-left: 0;
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.heading.l};
  `}

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
`;

const H2 = styled(motion.h2)`
  ${headingBase}
`;

export default { H1, H2 };

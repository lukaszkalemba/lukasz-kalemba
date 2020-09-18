import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const headingBase = css`
  font-size: ${({ theme }) => theme.font.size.s};
  z-index: ${({ theme }) => theme.zindex.positive2};
  position: relative;
  max-width: 85%;
  margin-left: 15px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.l};
    margin-left: 0;
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.xl};
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

const homePageHeading = css`
  font-size: ${({ theme }) => theme.font.size.m};
  margin-left: -5px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xl};
    margin-left: 0;
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.xxl};
    margin: 0.20em 0;
    margin-left: calc(3vw);
  `}
`;

const H1 = styled(motion.h1)`
  ${headingBase}
  ${({ homePage }) => homePage && homePageHeading}
`;

const H2 = styled(motion.h2)`
  ${headingBase}
`;

const Heading = {
  H1,
  H2,
};

export default { Heading };

import styled from 'styled-components';
import { motion } from 'framer-motion';
import BackgroundImage from 'gatsby-background-image';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  margin-top: 12px;
`;

const HeadingWrapper = styled.div`
  grid-column: 1 / 6;
  grid-row: 1 / 2;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};

  ${({ theme }) => theme.media.laptop`
    grid-column: 1 / 5;
  `}

  ${({ theme }) => theme.media.desktop`
    grid-column: 1 / 4;
  `}
`;

const BackgroundWrapper = styled(motion.div)`
  position: relative;
  grid-column: 3 / 6;
  grid-row: 1 / 2;
  height: 650px;
`;

const Background = styled(BackgroundImage)`
  position: relative;
  grid-column: 3 / 6;
  grid-row: 1 / 2;
  height: 650px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.color.dark};
`;

export default {
  Wrapper,
  HeadingWrapper,
  BackgroundWrapper,
  Background,
  Overlay,
};

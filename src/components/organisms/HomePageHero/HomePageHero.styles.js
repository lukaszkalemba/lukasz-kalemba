import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 87vh;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 200px 200px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.color.primary};

    ${({ theme }) => theme.media.tablet`
      border-width: 0 0 400px 400px;
      bottom: 50px;
      right: 50px;
    `}

    ${({ theme }) => theme.media.laptop`
      bottom: 50px;
      right: 0;
      border-width: 0 0 500px 500px;
    `}

    ${({ theme }) => theme.media.desktop`
      border-width: 0 0 850px 1000px;
    `}

    ${({ theme }) => theme.media.largeDesktop`
      bottom: 45px;
      border-width: 0 0 900px 1150px;
    `}
  }
`;

const ScrollWrapper = styled(motion.div)`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.level1};
  right: 25px;
  bottom: 45px;

  ${({ theme }) => theme.media.tablet`
    bottom: 90px;
    right: 60px;
  `}

  ${({ theme }) => theme.media.laptop`
    bottom: 100px;
    right: 50px;
  `}

  ${({ theme }) => theme.media.desktop`
    bottom: 120px;
    right: 70px;
  `}
`;

export default { Wrapper, ScrollWrapper };

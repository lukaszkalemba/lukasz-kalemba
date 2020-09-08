import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const rotate = keyframes`
  from {
    opacity:0;
    transform: translate(50px, 50px);
  }

  to {
    opacity: 0.7;
    transform: translate(0, 0);
  }
`;

const Wrapper = styled(motion.div)`
  height: 90vh;
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
    opacity: 0;
    animation: ${rotate} 0.7s ease-out forwards;

    ${({ theme }) => theme.media.tablet`
      border-width: 0 0 500px 500px;
      bottom: 50px;
      right: 50px;
      opacity: 0;
    `}

    ${({ theme }) => theme.media.laptop`
      bottom: 0;
      right: 0;
      border-width: 0 0 600px 600px;
    `}

    ${({ theme }) => theme.media.desktop`
      border-width: 0 0 850px 1000px;
    `}

    ${({ theme }) => theme.media.largeDesktop`
      border-width: 0 0 900px 1150px;
    `}
  }
`;

const ScrollWrapper = styled(motion.div)`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.positive1};
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

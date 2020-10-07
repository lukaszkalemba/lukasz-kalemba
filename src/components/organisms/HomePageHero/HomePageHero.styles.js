import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 90vh;
  height: calc(var(--vh, 1vh) * 100 - 10vh);
  position: relative;
`;

const TriangleDecorator = styled(motion.div)`
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
    height: 87vh;
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
`;

export default { Wrapper, TriangleDecorator };

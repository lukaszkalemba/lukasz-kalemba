import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  height: 90vh;
  height: calc(var(--vh, 1vh) * 100 - 10vh);
  position: relative;

  ${({ theme }) => theme.media.desktop`
    height: 88vh;
  `}
`;

export default { Wrapper };

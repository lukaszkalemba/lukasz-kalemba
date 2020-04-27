import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  ${({ theme }) => theme.media.laptop`
    display: flex;
    justify-content: space-between;
  `}
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default { Wrapper, TopBar };

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Header = styled(motion.header)`
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive3};

  ${({ theme }) => theme.media.laptop`
    opacity: 0;
  `}
`;

const Wrapper = styled.div`
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

export default { Header, Wrapper, TopBar };

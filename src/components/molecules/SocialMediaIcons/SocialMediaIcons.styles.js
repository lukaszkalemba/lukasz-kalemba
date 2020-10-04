import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${({ theme }) => theme.media.laptop`
    position: static;
    transform: none;
    padding: 0;
  `}
`;

const A = styled.a`
  opacity: 0.7;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  padding: 8px 0;

  :hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

export default { Wrapper, A };

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme }) => theme.media.laptop`
    justify-content: center;
  `}
`;

const Link = styled.a`
  font-size: ${({ theme }) => theme.font.size.body.s};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: opacity 400ms ease-in-out;
  padding: 13px 0;
  opacity: 0.8;

  ${({ theme }) => theme.media.laptop`
    padding: 12px 0;
  `}
    :hover {
    opacity: 1;
  }
`;

export default { Wrapper, Link };

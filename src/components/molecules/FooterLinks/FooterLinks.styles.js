import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
  `}
`;

const Link = styled(GatsbyLink)`
  font-size: ${({ theme }) => theme.font.size.body.s};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 12px 0;
  opacity: 0.8;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;

  ${({ theme }) => theme.media.laptop`
    padding: 0;
    margin-left: 80px;
    font-size: ${theme.font.size.body.xs};
  `}
    :hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

export default { Wrapper, Link };

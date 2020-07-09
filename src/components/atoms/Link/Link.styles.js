import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
`;

const Link = styled(GatsbyLink)`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  padding: 10px 0;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  :hover {
    > div {
      transform: translateX(4px);
    }
  }
`;

const Arrow = styled.div`
  width: 40px;
  margin-top: 4px;
  margin-left: 9px;
  transition: transform 250ms ease-in-out;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper, Link, Arrow };

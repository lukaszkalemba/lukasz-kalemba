import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  display: grid;

  ${({ theme }) => theme.media.laptop`
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh;
  `}
`;

const Header = styled.div`
  padding: 40px 0;
  background-color: ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.media.laptop`
    padding: 0;
    display: flex;
    align-items: center;
  `}
`;

export default { Section, Header };

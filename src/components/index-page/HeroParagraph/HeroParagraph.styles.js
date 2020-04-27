import styled from 'styled-components';
import { motion } from 'framer-motion';

const Paragraph = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.xs};
  z-index: ${({ theme }) => theme.zindex.positive1};
  opacity: 0.5;
  margin: 5px 0;

  ${({ theme }) => theme.media.phone`
    font-size: ${theme.font.size.xs};
  `}

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.s};
    max-width: 80%;
  `}

  ${({ theme }) => theme.media.laptop`
    margin-left: calc(26vw);
    width: auto;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-left: calc(30vw);
  `}

  ${({ theme }) => theme.media.largeDesktop`
    margin-left: calc(38vw);
  `}
`;

export default { Paragraph };

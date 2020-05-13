import styled from 'styled-components';
import { motion } from 'framer-motion';

const Paragraph = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.xs};
  z-index: ${({ theme }) => theme.zindex.positive1};
  opacity: 0.5;
  margin: 5px 0;
  line-height: 21px;

  ${({ theme }) => theme.media.phone`
    font-size: ${theme.font.size.xs};
  `}

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.s};
    max-width: 80%;
  `}

  ${({ theme }) => theme.media.laptop`
    margin-left: 26vw;
    width: auto;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-left: 33vw;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    margin-left: 38vw;
  `}
`;

export default { Paragraph };

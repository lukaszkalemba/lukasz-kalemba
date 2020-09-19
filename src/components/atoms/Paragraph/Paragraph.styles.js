import styled from 'styled-components';
import { motion } from 'framer-motion';

const Paragraph = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.xs};
  z-index: ${({ theme }) => theme.zindex.positive1};
  opacity: 0.5;
  margin: 5px 0;
  line-height: 22px;

  ${({ theme }) => theme.media.tablet`
    font-size:  calc(${theme.font.size.s} - 2px);
    max-width: 90%;
    line-height: 30px;
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.s};
  `}
`;

export default { Paragraph };

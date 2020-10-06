import styled from 'styled-components';
import { motion } from 'framer-motion';

const Paragraph = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.body.s};
  z-index: ${({ theme }) => theme.zindex.level1};
  opacity: 0.5;
  margin: 5px 0;
  line-height: 22px;

  ${({ theme }) => theme.media.tablet`
    font-size:  ${theme.font.size.body.m};
    line-height: 30px;
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.body.l};
  `}
`;

export default { Paragraph };

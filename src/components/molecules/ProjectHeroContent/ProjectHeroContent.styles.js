import styled from 'styled-components';
import { motion } from 'framer-motion';

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.body.xs};
  opacity: 0.8;
  line-height: 1.75em;
  margin-left: 20px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.body.s};
  `}

  ${({ theme }) => theme.media.laptop`
    margin-left: 15px;
  `}
`;

export default { Description };

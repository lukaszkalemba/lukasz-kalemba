import styled from 'styled-components';
import { motion } from 'framer-motion';

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.xxs};
  line-height: 25px;
  max-width: 450px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xs};
    margin-left: 30px;
  `}

  ${({ theme }) => theme.media.laptop`
    max-width: 600px;
  `}
`;

export default { Description };

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Copyright = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.body.xs};
  opacity: 0.8;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  span {
    margin: 2px 0;
  }

  ${({ theme }) => theme.media.phone`
    flex-direction: row;
  `}

  ${({ theme }) => theme.media.laptop`
    padding-top: 0;
  `}
`;

export default { Copyright };

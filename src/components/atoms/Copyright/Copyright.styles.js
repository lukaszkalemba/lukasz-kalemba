import styled from 'styled-components';
import { motion } from 'framer-motion';

const Copyright = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.body.xs};
  opacity: 0.8;
  margin: 50px 0 5px;
  display: flex;
  flex-direction: column;

  span {
    margin: 4px 0;
  }

  ${({ theme }) => theme.media.phone`
    flex-direction: row;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: 0;
  `}
`;

export default { Copyright };

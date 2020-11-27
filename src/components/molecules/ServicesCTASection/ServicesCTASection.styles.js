import styled from 'styled-components';
import { motion } from 'framer-motion';

const Heading = styled(motion.h2)`
  font-size: ${({ theme }) => theme.font.size.heading.xs};
  line-height: 1.75em;
  max-width: 70vw;
  margin-top: 0;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.heading.s};
  `}

  ${({ theme }) => theme.media.laptop`
    max-width: 600px;
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.heading.m};
  `}
`;

export default { Heading };

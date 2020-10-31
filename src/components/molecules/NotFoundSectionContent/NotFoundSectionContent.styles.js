import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeadingComponent from 'components/atoms/Heading';

const ButtonWrapper = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 35px;

    ${({ theme }) => theme.media.tablet`
    margin-left: 75px;
  `}

  ${({ theme }) => theme.media.laptop`
    justify-content: center;
    margin-left: -25px;
  `}

  ${({ theme }) => theme.media.desktop`
    justify-content: center;
    margin-left: 40px;
  `}
`;

const Heading = styled(HeadingComponent)`
  margin: 1.5em 0 1em;

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.heading.l};
    margin-bottom: 0.55em;
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.heading.xl};
  `}
`;

export default { ButtonWrapper, Heading };

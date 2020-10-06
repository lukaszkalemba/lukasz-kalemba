import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  h2 {
    font-size: ${({ theme }) => theme.font.size.heading.xxs};
    margin-top: 50px;
    margin-bottom: 5px;

    ${({ theme }) => theme.media.tablet`
      font-size: ${theme.font.size.heading.m};
      margin-top: 70px;
      margin-bottom: 10px;
    `}
  }

  p {
    font-size: ${({ theme }) => theme.font.size.body.s};
    max-width: 750px;
    line-height: 25px;
    opacity: 0.8;
    margin-bottom: 30px;

    ${({ theme }) => theme.media.desktop`
      max-width: 1000px;
    `}
  }
`;

export default { Wrapper };

import styled from 'styled-components';
import { motion } from 'framer-motion';
import BackgroundImage from 'gatsby-background-image';

const Background = styled(BackgroundImage)`
  position: absolute;
  top: -100px;
  width: 100vw;
  height: 102.5vh;
  z-index: 0;

  ${({ theme }) => theme.media.tablet`
    top: -120px;
  `}
`;

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  opacity: 0.97;
  padding: 140px 20px 20px;

  ${({ theme }) => theme.media.tablet`
    padding: 150px 40px 40px;
  `}

  ${({ theme }) => theme.media.laptop`
    padding: 150px 130px 130px;
  `}

  ${({ theme }) => theme.media.desktop`
    padding: 230px 100px;
  `}
`;

const Paragraph = styled(motion.p)`
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

const ScrollWrapper = styled(motion.div)`
  position: absolute;
  right: 20px;
  bottom: 40px;

  ${({ theme }) => theme.media.tablet`
    right: 60px;
    bottom: 90px;
  `}
  ${({ theme }) => theme.media.laptop`
    right: 80px;
    bottom: 100px;
  `}
`;

export default { Background, Overlay, Paragraph, ScrollWrapper };

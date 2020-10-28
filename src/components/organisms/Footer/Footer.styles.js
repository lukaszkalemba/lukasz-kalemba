import styled from 'styled-components';
import { motion } from 'framer-motion';
import slashPattern from 'assets/svgs/pattern_slash-dark.svg';

const Footer = styled(motion.footer)`
  display: ${({ isFooter }) => (isFooter ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.color.primary};
  padding: 25px 0;
  position: relative;

  ${({ theme }) => theme.media.tablet`
    margin-top: 110px;
    padding: 40px 0 30px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin-top: 0;
    padding: 0;
  `}

  ::before {
    content: '';
    position: absolute;
    background: url(${slashPattern}) no-repeat;
    height: 100%;
    width: 300px;
    opacity: 0.5;
    right: 16%;
    bottom: 0;
    background-size: 100%;
    background-position-y: bottom;

    ${({ theme }) => theme.media.tablet`
      opacity: 1;
      width: 495px;
      height: calc(100% + 75px);
    `}

    ${({ theme }) => theme.media.laptop`
      width: 470px;
    `}

    ${({ theme }) => theme.media.largeDesktop`
      width: 550px;
    `}
  }
`;

const TopBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${({ theme }) => theme.media.laptop`
    grid-template-columns: repeat(3, 1fr);
    padding: 130px 0;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    padding: 165px 0;
  `}
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
  `}
`;

export default { Footer, TopBar, BottomBar };

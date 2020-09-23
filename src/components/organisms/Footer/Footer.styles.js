import styled from 'styled-components';
import { motion } from 'framer-motion';
import slashPattern from 'assets/svgs/pattern_slash-dark.svg';

const Footer = styled(motion.footer)`
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;

  ${({ theme }) => theme.media.tablet`
    padding-bottom: 23px;
  `}

  ${({ theme }) => theme.media.laptop`
    ::before {
      content: '';
      position: absolute;
      background: url(${slashPattern}) no-repeat;
      height: 600px;
      right: 16%;
      bottom: 0;
      background-size: 100%;
      width: 450px;
      background-position-y: bottom;

    ${theme.media.largeDesktop`
      height: 800px;
      width: 550px;
      padding-bottom: 35px;
    `}
    }
`}
`;

const TopBar = styled.div`
  ${({ theme }) => theme.media.laptop`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 110px 0 75px;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    padding: 150px 0 100px;
  `}
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
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

const BottomBar = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
  `}
`;

export default { Footer, TopBar, Copyright, BottomBar };

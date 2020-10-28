import styled from 'styled-components';
import { motion } from 'framer-motion';
import slashPattern from 'assets/svgs/pattern_slash-dark.svg';

const Footer = styled(motion.footer)`
  display: ${({ isFooter }) => (isFooter ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.color.primary};

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${({ theme }) => theme.media.laptop`
    grid-template-columns: repeat(3, 1fr);
    padding: 110px 0 75px;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    padding: 150px 0 100px;
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

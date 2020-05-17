import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeadingComponent from 'components/common/Heading';

const Wrapper = styled(motion.div)`
  height: 90vh;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 200px 200px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.color.primary};
    opacity: 0.7;

    ${({ theme }) => theme.media.tablet`
      border-width: 0 0 500px 500px;
      bottom: 50px;
      right: 50px;
      opacity: 1;
    `}

    ${({ theme }) => theme.media.laptop`
      bottom: 0;
      right: 0;
      border-width: 0 0 600px 600px;
    `}

    ${({ theme }) => theme.media.desktop`
      border-width: 0 0 850px 1000px;
    `}

    ${({ theme }) => theme.media.largeDesktop`
      border-width: 0 0 900px 1150px;
    `}
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  padding: 0 30px;

  ${({ theme }) => theme.media.laptop`
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 100px;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-top: 150px;
  `}
`;

const Heading = styled(HeadingComponent)`
  ${({ theme }) => theme.media.laptop`
    margin: 0.20em 0;
    margin-left: calc(3vw);
  `}

  ${({ theme }) => theme.media.desktop`
    margin-left: calc(15vw);
  `}

  ${({ theme }) => theme.media.largeDesktop`
    font-size: ${theme.font.size.xxxl};
    margin: 0.15em 0;
    margin-left: calc(13vw);
  `}
`;

const Buttons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 30px;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};

  ${({ theme }) => theme.media.tablet`
    margin-top: 40px;
  `}

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    margin-left: 5vw;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-left: 15vw;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    margin-left: 18vw;
  `}
`;

const ScrollWrapper = styled(motion.div)`
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.positive1};
  right: 25px;
  bottom: 45px;

  ${({ theme }) => theme.media.tablet`
    bottom: 90px;
    right: 60px;
  `}

  ${({ theme }) => theme.media.laptop`
    bottom: 100px;
    right: 50px;
  `}

  ${({ theme }) => theme.media.desktop`
    bottom: 120px;
    right: 70px;
  `}
`;

export default { Wrapper, Content, Heading, Buttons, ScrollWrapper };

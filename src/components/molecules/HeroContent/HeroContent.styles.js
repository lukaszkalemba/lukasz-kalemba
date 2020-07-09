import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeadingComponent from 'components/atoms/Heading';

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

export default { Content, Heading, Buttons };

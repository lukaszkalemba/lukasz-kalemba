import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeadingComponent from 'components/atoms/Heading';
import ParagraphComponent from 'components/atoms/Paragraph';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  padding: 0 30px;

  ${({ theme }) => theme.media.laptop`
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 100px;
    margin-left: 100px;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-top: 150px;
    margin-left: 0;
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

const Paragraph = styled(ParagraphComponent)`
  display: flex;
  flex-direction: column;

  span {
    margin: 1px 0;
  }

  ${({ theme }) => theme.media.tablet`
    font-size:  calc(${theme.font.size.s} - 1px);
  `}

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    margin-left: 26vw;
    width: auto;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-left: 33vw;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    margin-left: 38vw;
  `}
`;

const Buttons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 30px;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.level1};

  ${({ theme }) => theme.media.tablet`
    margin-top: 40px;
  `}

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    margin-left: 150px;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-left: 15vw;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    margin-left: 18vw;
  `}
`;

export default { Content, Heading, Paragraph, Buttons };

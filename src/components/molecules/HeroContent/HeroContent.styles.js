import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeadingComponent from 'components/atoms/Heading';
import ParagraphComponent from 'components/atoms/Paragraph';
import ButtonComponent from 'components/atoms/Button';
import ContainerComponent from 'components/particles/Container';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 30px;

  ${({ theme }) => theme.media.laptop`
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 90px;
    align-items: flex-end;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-top: 150px;
    margin-left: 0;
  `}
`;

const Heading = styled(HeadingComponent)`
  ${({ theme }) => theme.media.laptop`
    margin: 0.20em 0;
  `}

  ${({ theme }) => theme.media.desktop`
    margin: 0.25em 0;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    font-size: ${theme.font.size.heading.xxl};
  `}
`;

const Paragraph = styled(ParagraphComponent)`
  display: flex;
  flex-direction: column;

  span {
    margin: 1px 0;
  }

  ${({ theme }) => theme.media.tablet`
    font-size:  calc(${theme.font.size.body.m});
  `}

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    margin-right: -130px;
  `}

  ${({ theme }) => theme.media.largeDesktop`
    font-size: ${theme.font.size.heading.xs};
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
    padding: 0;
    justify-content: flex-end;
    margin-right: 130px;
  `}
`;

const Button = styled(ButtonComponent)`
  ${({ theme }) => theme.media.desktop`
    margin: 0 25px;
`}
`;

const Container = styled(ContainerComponent)`
  ${({ theme }) => theme.media.laptop`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 21vw;
  `}
`;

export default { Content, Heading, Paragraph, Buttons, Button, Container };

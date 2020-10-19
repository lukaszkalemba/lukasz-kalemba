import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import ParagraphComponent from 'components/atoms/Paragraph';

const MainImage = styled(GatsbyImage)`
  margin: 40px 20px;

  ${({ theme }) => theme.media.tablet`
    margin: 60px 40px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: 80px 100px;
  `}

  ${({ theme }) => theme.media.desktop`
    margin: 80px 200px;
  `}
`;

const DoubleImageSection = styled.div`
  padding: 0 20px;
  margin: 50px 0;

  ${({ theme }) => theme.media.tablet`
    margin: 140px 0 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 50px;
    padding: 0;
    justify-content: start;
    align-items: start;
  `}

  ${({ theme }) => theme.media.laptop`
    grid-column-gap: 70px;
    margin: 140px 50px 100px;
  `}
`;

const ContentWrapper = styled.div`
  ${({ theme }) => theme.media.tablet`
    margin: 70px 15px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: 100px 20px;
  `}
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.heading.xxs};

  ${({ theme }) => theme.media.tablet`
  font-size: ${theme.font.size.heading.s};
  margin-top: 40px;
`}
`;

const Paragraph = styled(ParagraphComponent)`
  font-size: ${({ theme }) => theme.font.size.body.xs};
  margin-bottom: 3.5em;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.body.s};
    max-width: 450px;
  `}
`;

const ThirdImage = styled(GatsbyImage)`
  margin-top: 50px;

  ${({ theme }) => theme.media.tablet`
    margin-top: 0px;
  `}
`;

export default {
  MainImage,
  ContentWrapper,
  Title,
  Paragraph,
  DoubleImageSection,
  ThirdImage,
};

import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

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

const SecondImage = styled(GatsbyImage)`
  margin: 40px 0;

  ${({ theme }) => theme.media.tablet`
    margin: 0;
  `}
`;

export default {
  MainImage,
  SecondImage,
  DoubleImageSection,
};

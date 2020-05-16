import styled from 'styled-components';
import Background from 'gatsby-background-image';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
`;

const HeadingWrapper = styled.div`
  grid-column: 1 / 6;
  grid-row: 1 / 2;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};

  ${({ theme }) => theme.media.laptop`
    grid-column: 1 / 5;
  `}

  ${({ theme }) => theme.media.desktop`
    grid-column: 1 / 4;
  `}
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
  opacity: 0.8;
  line-height: 1.75em;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xs};
  `}
`;

const BackgroundImage = styled(Background)`
  position: relative;
  grid-column: 3 / 6;
  grid-row: 1 / 2;
  height: 700px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.color.dark};
`;

export default {
  Wrapper,
  HeadingWrapper,
  Description,
  BackgroundImage,
  Overlay,
};

import styled from 'styled-components';
import GatsbyBackground from 'gatsby-background-image';

const Article = styled.article`
  height: calc(100% / 3);
  border: 1px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: flex-end;
  min-height: 300px;
  position: relative;

  ${({ theme }) => theme.media.laptop`
    justify-content: flex-end;
  `}
`;

const Overlay = styled(GatsbyBackground)`
  position: absolute !important;
  height: 100%;
  width: 100%;
  opacity: 0 !important;
  transition: opacity 400ms ease-in-out;

  :hover {
    opacity: 0.1 !important;
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.m};
  margin: 0;
  padding: 50px;
  z-index: ${({ theme }) => theme.zindex.positive1};

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.m};
  `}
`;

export default { Article, Overlay, Title };

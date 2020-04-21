import styled from 'styled-components';

const Article = styled.article`
  height: calc(100% / 3);
  border: 1px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: flex-end;
  min-height: 300px;

  ${({ theme }) => theme.media.laptop`
    justify-content: flex-end;
  `}
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.m};
  margin: 0;
  padding: 50px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.m};
  `}
`;

export default { Article, Title };

import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
  opacity: 0.5;

  ${({ theme }) => theme.media.phone`
    font-size: ${theme.font.size.xs};
  `};

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.s};
  `};
`;

export default { Paragraph };

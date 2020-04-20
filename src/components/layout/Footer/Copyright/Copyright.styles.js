import styled from 'styled-components';

const Paragraph = styled.div`
  font-size: ${({ theme }) => theme.font.size.xxs};
  opacity: 0.5;
  padding-top: 15px;

  ${({ theme }) => theme.media.laptop`
    padding-top: 0;
  `}
`;

export default { Paragraph };

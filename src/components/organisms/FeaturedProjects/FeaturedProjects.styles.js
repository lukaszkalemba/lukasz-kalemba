import styled from 'styled-components';

const Section = styled.section`
  padding: 20px 0;

  ${({ theme }) => theme.media.laptop`
    padding: 20px 0 50px;
  `}

  ${({ theme }) => theme.media.desktop`
    padding: 40px 0 70px;
  `}
`;

export default { Section };

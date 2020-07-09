import styled from 'styled-components';

const Section = styled.section`
  padding: 20px 0;

  ${({ theme }) => theme.media.laptop`
    padding: 50px 0;
  `}

  ${({ theme }) => theme.media.desktop`
    padding: 70px 0;
  `}
`;

export default { Section };

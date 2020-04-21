import styled from 'styled-components';

const Section = styled.section`
  display: grid;

  ${({ theme }) => theme.media.laptop`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
`;

const Services = styled.div``;

export default { Section, Header, Services };

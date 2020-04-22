import styled from 'styled-components';

const Section = styled.section`
  display: grid;

  ${({ theme }) => theme.media.laptop`
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
  `}
`;

const Header = styled.div`
  padding: 40px 0;
  background-color: ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.media.laptop`
    padding: 0;
  `}
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.s};
  line-height: 1.75em;
  max-width: 70vw;
  margin-top: 0;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.m};
  `}

  ${({ theme }) => theme.media.laptop`
    max-width: 600px;
    margin-top: 200px;
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.l};
  `}
`;

const Services = styled.div``;

export default { Section, Header, Title, Services };

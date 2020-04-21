import styled from 'styled-components';

const Cards = styled.div`
  display: grid;
  max-width: 1360px;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  `}

  ${({ theme }) => theme.media.laptop`
    grid-gap: 50px;
  `}

  ${({ theme }) => theme.media.desktop`
    grid-gap: 60px;
  `}
`;

export default { Cards };

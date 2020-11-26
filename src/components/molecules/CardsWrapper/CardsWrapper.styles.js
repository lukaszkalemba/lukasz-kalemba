import styled from 'styled-components';

const Cards = styled.div`
  display: grid;
  max-width: 1300px;
  margin: 0 auto;
  grid-gap: 10px;
  margin-bottom: 35px;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin: 50px auto;
  `}

  ${({ theme }) => theme.media.laptop`
    grid-gap: 50px;
    margin: 65px auto;
  `}

  ${({ theme }) => theme.media.desktop`
    grid-gap: 0px;
    margin: 100px auto 60px;
  `}
`;

export default { Cards };

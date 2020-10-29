import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -40px;

  ${({ theme }) => theme.media.laptop`
    margin-top: -75px;
  `}

  div:nth-child(4n) {
    text-align: right;
    align-self: flex-end;
  }

  div:nth-child(4n - 1) {
    text-align: right;
  }
`;

export default { Content };

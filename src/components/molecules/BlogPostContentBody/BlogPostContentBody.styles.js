import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -55px;

  div:nth-child(4n) {
    text-align: right;
    align-self: flex-end;
  }

  div:nth-child(4n - 1) {
    text-align: right;
  }

  div:first-child {
    margin-top: -50px;
  }

  div:last-child {
    margin-bottom: -20px;

    ${({ theme }) => theme.media.desktop`
      margin-bottom: 30px;
    `}
  }
`;

export default { Content };

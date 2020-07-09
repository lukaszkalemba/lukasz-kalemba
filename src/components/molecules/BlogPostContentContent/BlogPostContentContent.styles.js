import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${({ theme }) => theme.font.size.s};
    margin-top: 50px;
    margin-bottom: 5px;

    ${({ theme }) => theme.media.tablet`
      font-size: ${theme.font.size.l};
      margin-top: 70px;
      margin-bottom: 10px;
    `}
  }

  p {
    font-size: ${({ theme }) => theme.font.size.xs};
    max-width: 750px;
    line-height: 25px;
    opacity: 0.8;
    margin-bottom: 30px;

    ${({ theme }) => theme.media.desktop`
      max-width: 1000px;
    `}
  }

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

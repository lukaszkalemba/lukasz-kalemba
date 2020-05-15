import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 100px;
`;

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

  p:nth-child(4n) {
    text-align: right;
    align-self: flex-end;
  }

  h2:nth-child(4n - 1) {
    text-align: right;
  }

  h2:first-child {
    margin-top: -50px;
  }

  p:last-child {
    margin-bottom: -20px;

    ${({ theme }) => theme.media.desktop`
      margin-bottom: 30px;
    `}
  }
`;

export default { Wrapper, Content };

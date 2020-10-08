import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 87vh;

  ::after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 200px 200px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.color.primary};

    ${({ theme }) => theme.media.tablet`
      border-width: 0 0 400px 400px;
      bottom: 50px;
      right: 50px;
    `}

    ${({ theme }) => theme.media.laptop`
      bottom: 35px;
      right: 0;
      border-width: 0 0 500px 500px;
    `}

    ${({ theme }) => theme.media.desktop`
      border-width: 0 0 600px 600px;
    `}

    ${({ theme }) => theme.media.largeDesktop`
      bottom: 45px;
      border-width: 0 0 700px 700px;
    `}
  }
`;

export default { Wrapper };

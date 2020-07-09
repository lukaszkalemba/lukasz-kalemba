import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 85vh;

  ::before {
    content: '404';
    display: none;
    font-size: 30vw;
    position: absolute;
    left: 10%;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    opacity: 0.02;

    ${({ theme }) => theme.media.laptop`
      display: block;
    `}
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 200px 200px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.color.primary};

    ${({ theme }) => theme.media.tablet`
      bottom: -15px;
      border-width: 0 0 400px 400px;
    `}

    ${({ theme }) => theme.media.laptop`
      bottom: 15px;
      border-width: 0 0 500px 500px;
    `}
  }
`;

export default { Wrapper };

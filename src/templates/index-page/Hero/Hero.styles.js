import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 450px 300px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.color.primary};

    ${({ theme }) => theme.media.tablet`
      border-width: 0 0 700px 700px;
    `}

    ${({ theme }) => theme.media.desktop`
      border-width: 0 0 800px 950px;
    `}
  }
`;

export default { Wrapper };

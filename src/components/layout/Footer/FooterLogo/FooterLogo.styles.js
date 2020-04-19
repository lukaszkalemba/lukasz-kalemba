import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};

  ${({ theme }) => theme.media.desktop`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
    }
  `}

  ${({ theme }) => theme.media.largeDesktop`
    width: 65%;
  `}
`;

export default { Wrapper };

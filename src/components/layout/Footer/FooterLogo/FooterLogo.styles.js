import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};

  ${({ theme }) => theme.media.tablet`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default { Wrapper };

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  height: calc(var(--vh, 1vh) * 100 - 10vh);
  position: relative;

  ${({ theme }) => theme.media.laptop`
    height: calc(var(--vh, 1vh) * 100 - 13vh);
  `}
`;

export default { Wrapper };

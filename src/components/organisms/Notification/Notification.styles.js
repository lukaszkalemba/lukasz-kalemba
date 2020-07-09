import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  /* display: flex; */
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zindex.positive3};
  background-color: ${({ theme }) => theme.color.background.light};
`;

export default { Wrapper };

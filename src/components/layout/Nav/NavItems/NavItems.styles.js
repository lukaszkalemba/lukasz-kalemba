import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: ${({ theme }) => theme.zindex.positive1};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  counter-reset: nav;
`;

export default { List };

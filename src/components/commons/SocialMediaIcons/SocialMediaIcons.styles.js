import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const A = styled.a`
  opacity: 0.5;
  transition: opacity 400ms ease-in-out;
  padding: 8px 0;

  :hover {
    opacity: 1;
  }
`;

export default { Wrapper, A };

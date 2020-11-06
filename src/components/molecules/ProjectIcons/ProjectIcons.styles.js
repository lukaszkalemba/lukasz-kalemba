import styled from 'styled-components';
import ContainerComponent from 'components/particles/Container';

const Container = styled(ContainerComponent)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zindex.level2};
  margin: 15px;

  ${({ theme }) => theme.media.laptop`
    margin: 10px;
  `}
`;

const A = styled.a`
  opacity: 0.7;
  transition: opacity 250ms ease-in-out;
  padding: 10px;

  :hover {
    opacity: 1;
  }
`;

export default { Container, A };

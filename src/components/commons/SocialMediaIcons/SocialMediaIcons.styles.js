import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;

  ${({ theme }) => theme.media.tablet`
    padding: 35px 55px;
  `}

  ${({ theme }) => theme.media.desktop`
    position: static;
    transform: none;
    padding: 0;
  `}
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

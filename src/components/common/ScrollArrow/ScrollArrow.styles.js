import styled from 'styled-components';

const Wrapper = styled.button`
  display: block;
  border: none;
  background-color: inherit;
  width: 50px;
  height: 100px;
  margin-left: auto;
  margin-top: auto;
  cursor: pointer;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
  opacity: 0.75;
  outline: none;

  :hover {
    transform: translateY(10px);
    opacity: 1;
  }

  ${({ theme }) => theme.media.laptop`
    width: 75px;
    height: 150px;
  `}
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper };

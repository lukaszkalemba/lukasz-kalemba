import styled from 'styled-components';

const Wrapper = styled.button`
  display: none;
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
    display: block;
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.p`
  position: absolute;
  width: 120px;
  transform: rotate(90deg);
  color: ${({ theme }) => theme.color.white};
  right: -17px;
  top: -25px;
`;

export default { Wrapper, Info };

import styled from 'styled-components';

const Button = styled.button`
  display: none;
  border: none;
  background-color: inherit;
  width: 50px;
  margin-left: auto;
  margin-top: auto;
  cursor: pointer;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};
  transition: transform 250ms ease-in-out;
  outline: none;

  :hover,
  :focus {
    transform: translateY(10px);
    svg {
      opacity: 1;
    }
  }

  ${({ theme }) => theme.media.laptop`
    width: 75px;
    height: 150px;
    display: block;
  `}
  svg {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    transition: opacity 250ms ease-in-out;
  }
`;

const Info = styled.p`
  position: absolute;
  width: 120px;
  transform: rotate(90deg);
  color: ${({ theme }) => theme.color.white};
  right: -17px;
  top: -25px;
  opacity: 0.7;
`;

export default { Button, Info };

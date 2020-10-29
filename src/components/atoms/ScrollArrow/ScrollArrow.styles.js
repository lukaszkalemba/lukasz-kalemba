import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: inherit;
  width: 40px;
  margin-left: auto;
  margin-top: auto;
  cursor: pointer;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.level1};
  transition: transform 250ms ease-in-out;
  outline: none;

  :hover,
  :focus {
    transform: translateY(10px);
    svg {
      opacity: 1;
    }
  }

  ${({ theme }) => theme.media.tablet`
    width: 75px;
    height: 150px;
  `}
  svg {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    transition: opacity 250ms ease-in-out;
  }
`;

const Info = styled.p`
  font-size: ${({ theme }) => theme.font.size.body.xs};
  position: absolute;
  width: 120px;
  transform: rotate(90deg);
  color: ${({ theme }) => theme.color.white};
  right: -35px;
  top: -25px;
  opacity: 0.7;

  ${({ theme }) => theme.media.tablet`
    right: -15px;
    font-size: ${theme.font.size.body.s};
  `}
`;

export default { Button, Info };

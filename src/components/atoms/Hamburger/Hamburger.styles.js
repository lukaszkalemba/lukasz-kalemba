import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive4};
  border: none;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;

  > div {
    position: relative;
    width: 17px;
    height: 1px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.white};
    transform: rotate(${({ isNavOpen }) => (isNavOpen ? '45deg' : '0')});
    transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
    transition-delay: 150ms;

    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 17px;
      height: 1px;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.color.white};
      transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
      transition-delay: 150ms;
    }

    ::before {
      left: 2px;
      bottom: 5px;
      opacity: ${({ isNavOpen }) => (isNavOpen ? '0' : '1')};
    }

    ::after {
      top: 5px;
      left: -2px;
      transform: rotate(${({ isNavOpen }) => (isNavOpen ? '90deg' : 0)})
        translate(${({ isNavOpen }) => (isNavOpen ? '-5px, -2px' : 0)});
    }
  }

  ${({ theme }) => theme.media.laptop`
    display: none;
  `}
`;

export default { Button };

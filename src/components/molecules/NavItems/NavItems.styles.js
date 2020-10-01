import styled from 'styled-components';
import slashPattern from 'assets/svgs/pattern_slash.svg';

const List = styled.ul`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.color.background.dark};
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.level3};
  top: 0;
  left: 0;
  transform: translateX(${({ isNavOpen }) => (isNavOpen ? '0' : '-150%')});
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  transition: transform 250ms ease-in-out;
  transition-delay: 250ms;

  ${({ theme }) => theme.media.laptop`
    height: auto;
    position: static;
    background-color: transparent;
    transform: translate(0);
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `}
    ::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 10%;
    opacity: 0.2;
    background: url(${slashPattern}) no-repeat;
    background-position-y: bottom;
    background-size: 100%;
    height: 75%;
    width: 75%;
    transform: translateX(${({ isNavOpen }) => (isNavOpen ? '0' : '-150%')});
    transition: transform 250ms ease-in-out;
    transition-delay: ${({ isNavOpen }) => (isNavOpen ? '300ms' : '0')};

    ${({ theme }) => theme.media.tablet`
      height: 65%;
      width: 65%;
    `}

    ${({ theme }) => theme.media.laptop`
      display: none;
    `}
  }
`;

export default { List };

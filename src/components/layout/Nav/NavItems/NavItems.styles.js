import styled from 'styled-components';
import slashPattern from 'assets/images/pattern_slash.svg';

const List = styled.ul`
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: ${({ theme }) => theme.zindex.positive1};
  top: 0;
  left: 0;
  transform: translateX(${({ isNavOpen }) => (isNavOpen ? '0' : '-100%')});
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  counter-reset: nav;
  transition: transform 250ms ease-in-out;
  transition-delay: 250ms;

  ${({ theme }) => theme.media.desktop`
    position: static;
    background-color: transparent;
    transform: translate(0);
    flex-direction: row;
    align-items: center;
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
    transform: translateX(${({ isNavOpen }) => (isNavOpen ? '0' : '-130%')});
    transition: transform 250ms ease-in-out;
    transition-delay: ${({ isNavOpen }) => (isNavOpen ? '300ms' : '0')};

    ${({ theme }) => theme.media.tablet`
      height: 65%;
      width: 65%;
    `}

    ${({ theme }) => theme.media.desktop`
      display: none;
    `}
  }
`;

export default { List };

import styled from 'styled-components';
import slashPattern from 'assets/svgs/pattern_slash.svg';
import SocialMediaIconsComponent from 'components/molecules/SocialMediaIcons';
import ContainerComponent from 'components/particles/Container';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.dark};
  position: absolute;
  z-index: ${({ theme }) => theme.zindex.level3};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform: translateX(${({ isNavOpen }) => (isNavOpen ? '0' : '-150%')});
  transition: transform 250ms ease-out;
  transition-delay: 250ms;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.laptop`
    height: auto;
    position: static;
    background-color: transparent;
    transform: translate(0);
    justify-content: flex-end;
  `}
    ::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 15%;
    opacity: 0.2;
    background: url(${slashPattern}) no-repeat;
    background-position-y: bottom;
    background-size: 100%;
    height: 75%;
    width: 75%;
    max-width: 350px;

    ${({ theme }) => theme.media.tablet`
      height: 65%;
      width: 65%;
    `}

    ${({ theme }) => theme.media.laptop`
      display: none;
    `}
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: -50px 0 0;

  ${({ theme }) => theme.media.laptop`
    margin-top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  `}
`;

const Container = styled(ContainerComponent)`
  position: absolute;
  bottom: 0;
  right: 0;

  ${({ theme }) => theme.media.laptop`
    display: none;
  `}
`;

const SocialMediaIcons = styled(SocialMediaIconsComponent)`
  opacity: 0.5;
  margin-bottom: 50px;

  a {
    padding: 10px 13px;
  }
`;

export default { Wrapper, List, Container, SocialMediaIcons };

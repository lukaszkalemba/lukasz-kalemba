import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  clip-path: circle(
    ${({ isNavOpen }) => (isNavOpen ? '100%' : '0 at calc(100% - 40px) 40px')}
  );
  transition: clip-path 500ms ease-in-out;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.laptop`
    clip-path: none;
    height: auto;
    position: static;
    background-color: transparent;
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

const List = styled(motion.ul)`
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
    padding: 11px 13px;
  }
`;

export default { Wrapper, List, Container, SocialMediaIcons };

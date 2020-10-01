import styled from 'styled-components';
import { motion } from 'framer-motion';

const Backdrop = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zindex.level3};
`;

const Wrapper = styled(motion.div)`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zindex.level3};
  background-color: ${({ theme }) => theme.color.background.light};
  padding: 30px 15px;

  ${({ theme }) => theme.media.tablet`
    width: 60vw;
    height: 60vw;
    padding: 30px 0;
  `}

  ${({ theme }) => theme.media.laptop`
    width: 40vw;
    height: 60vh;
    padding: 15px 0;
  `}

  ${({ theme }) => theme.media.desktop`
    width: 30vw;
    height: 45vh;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background: none;
  height: 50px;
  width: 50px;
  cursor: pointer;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 23px;
    height: 1px;
    top: 50%;
    left: 50%;
    display: block;

    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.media.tablet`
      width: 30px;
      height: 2px;
    `}
  }

  ::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  ::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  ${({ theme }) => theme.media.tablet`
    top: 15px;
    right: 15px;
  `}

  ${({ theme }) => theme.media.laptop`
    top: 20px;
    right: 20px;
  `}
`;

export default { Backdrop, Wrapper, CloseButton };

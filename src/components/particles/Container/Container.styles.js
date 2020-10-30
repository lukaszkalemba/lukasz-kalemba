import styled from 'styled-components';
import { motion } from 'framer-motion';

const handleAxis = (axis, doubling) => {
  switch (axis) {
    case 'x':
      return doubling === 'x' || doubling === 'both'
        ? `0 ${2 * 5.5}em`
        : `0 5.5em`;

    case 'y':
      return doubling === 'y' || doubling === 'both'
        ? `${2 * 35}px 0`
        : `35px 0`;

    case 'both':
      switch (doubling) {
        case 'x':
          return `35px ${2 * 5.5}em`;

        case 'y':
          return `${2 * 35}px 5.5em`;

        case 'both':
          return `${2 * 35}px ${2 * 5.5}em`;

        default:
          return `35px 5.5em`;
      }

    default:
      return null;
  }
};

const handleMobileDoubling = doubling => {
  let padding;

  switch (doubling) {
    case 'x':
      padding = '20px 30px';
      break;

    case 'y':
      padding = '30px 20px';
      break;

    case 'both':
      padding = '30px';
      break;

    default:
      padding = '20px';
      break;
  }

  return padding;
};

const Wrapper = styled(motion.div)`
  padding: ${({ doubling }) => handleMobileDoubling(doubling)};

  ${({ theme }) => theme.media.tablet`
    font-size: 1rem;
    padding: ${({ axis, doubling }) => handleAxis(axis, doubling)};
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: 1.55rem;
    padding: ${({ axis, doubling }) => handleAxis(axis, doubling)};
  `}
`;

export default { Wrapper };

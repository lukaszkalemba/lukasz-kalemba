import styled from 'styled-components';
import { motion } from 'framer-motion';
import GatsbyImage from 'gatsby-image';

const ImageWrapper = styled(motion.div)`
  display: none;
  position: relative;

  ::before {
    content: '';
  }

  ${({ theme }) => theme.media.laptop`
    display: block;
  `}
`;

const Image = styled(GatsbyImage)`
  margin: 0 40px 40px 0;
  z-index: ${({ theme }) => theme.zindex.level1};
`;

const ImageShadow = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  margin: 40px 0 0 40px;
  background-color: ${({ theme }) => theme.color.dark};
`;

export default {
  ImageWrapper,
  Image,
  ImageShadow,
};

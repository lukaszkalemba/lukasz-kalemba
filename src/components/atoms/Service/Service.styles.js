import styled from 'styled-components';
import { motion } from 'framer-motion';
import GatsbyBackground from 'gatsby-background-image';

const Article = styled.article`
  height: calc(100% / 3);
  border: 1px solid ${({ theme }) => theme.color.primary};
  display: flex;
  align-items: flex-end;
  min-height: 240px;
  position: relative;
  justify-content: flex-end;

  ${({ theme }) => theme.media.laptop`
    :hover {
      >div {
        opacity: 0.1 !important;
      }
    }
  `}
`;

const Overlay = styled(GatsbyBackground)`
  position: absolute !important;
  height: 100%;
  width: 100%;
  opacity: 0.1 !important;
  transition: opacity 400ms ease-in-out;

  ${({ theme }) => theme.media.laptop`
    opacity: 0 !important;
  `}
`;

const Title = styled(motion.h3)`
  font-size: ${({ theme }) => theme.font.size.heading.xxs};
  margin: 0;
  padding: 40px;
  z-index: ${({ theme }) => theme.zindex.level1};
  line-height: 30px;
  text-align: right;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.heading.s};
  `}
`;

export default { Article, Overlay, Title };

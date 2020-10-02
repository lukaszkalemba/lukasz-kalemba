import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Wrapper = styled.div`
  width: 120px;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.level4};
  pointer-events: ${({ path }) => (path === '/' ? 'none' : 'auto')};

  ${({ theme }) => theme.media.tablet`
    width: 150px;
  `}
`;

const Link = styled(GatsbyLink)`
  ${({ theme }) => theme.media.laptop`
    #logo-path-circle {
      transition: transform 400ms ease-in-out;
    }

    #logo-path-slash {
      transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
    }

    #logo-path-text {
      transition: transform 400ms ease-in-out;
    }

    :hover {
      #logo-path-circle {
        transform: translate(91%, 30%) scale(0.8);
      }

      #logo-path-slash {
        transform: translateX(63%);
        opacity: 0;
      }

      #logo-path-text {
        transform: translateX(-12%);
      }
    }
  `}
`;

export default { Wrapper, Link };

import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const Image = styled(GatsbyImage)`
  margin: 40px 0;

  ${({ theme }) => theme.media.tablet`
    margin: 60px 0;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: 80px 0;
  `}
`;

const ImagesWrapper = styled.div`
  padding: 0 20px;

  ${({ theme }) => theme.media.tablet`
    padding: 0 40px;
  `}

  ${({ theme }) => theme.media.laptop`
    padding: 0 100px;
  `}

  ${({ theme }) => theme.media.desktop`
    padding: 0 200px;
  `}
`;

export default { Image, ImagesWrapper };

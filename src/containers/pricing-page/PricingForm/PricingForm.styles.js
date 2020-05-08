import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 150px;
`;

const ImageWrapper = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 40px 0 0 40px;
    background-color: ${({ theme }) => theme.color.dark};
  }
`;

const Image = styled(GatsbyImage)`
  margin: 0 40px 40px 0;
`;

export default { Wrapper, ImageWrapper, Image };

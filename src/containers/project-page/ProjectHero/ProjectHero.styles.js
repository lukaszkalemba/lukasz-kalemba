import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70vh;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  opacity: 0.8;
  line-height: 32px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.color.dark};
`;

export default { Wrapper, Description, ImageWrapper, Overlay };

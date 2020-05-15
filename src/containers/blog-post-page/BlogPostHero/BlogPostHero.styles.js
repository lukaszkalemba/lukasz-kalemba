import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Background = styled(BackgroundImage)`
  position: absolute;
  top: -100px;
  width: 100vw;
  height: 105vh;
  z-index: -1;

  ${({ theme }) => theme.media.tablet`
    top: -120px;
  `}
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  opacity: 0.97;
  padding: 150px 20px 20px;

  ${({ theme }) => theme.media.tablet`
    padding: 150px 40px 40px;
  `}

  ${({ theme }) => theme.media.desktop`
    padding: 200px 100px 100px;
  `}
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
  line-height: 25px;
  max-width: 450px;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xs};
    margin-left: 30px;
  `}

  ${({ theme }) => theme.media.laptop`
    max-width: 600px;
  `}
`;

export default { Background, Overlay, Paragraph };

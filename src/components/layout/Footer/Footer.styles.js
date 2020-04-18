import styled from 'styled-components';
import slashPattern from 'assets/images/pattern_slash-dark.svg';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;

  ${({ theme }) => theme.media.tablet`
    ::before {
      content: '';
      position: absolute;
      background: url(${slashPattern}) no-repeat;
      right: 8%;
      bottom: 0;
      background-size: 100%;
      height: 400px;
      width: 450px;
      background-position-y: bottom;

    ${theme.media.desktop`
      height: 600px;
      right: 16%;
    `}
    }
`}
`;

const TopBar = styled.div`
  ${({ theme }) => theme.media.tablet`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 0;
  `}

  ${({ theme }) => theme.media.desktop`
    padding: 100px 0;
  `}
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${({ theme }) => theme.media.tablet`
    flex-direction: row;
  `}
`;

export default { Footer, TopBar, BottomBar };

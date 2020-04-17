import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
`;

const TopBar = styled.div`
  ${({ theme }) => theme.media.tablet`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 0;
  `};

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

import styled from 'styled-components';
import background from 'assets/images/photo_project-example.png';

const Article = styled.article`
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: center / center;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: ${({ small }) => (small ? '300px' : '450px')};
  padding: 30px;
  margin: 10px 0;
  cursor: pointer;
  opacity: 0;
  z-index: ${({ theme }) => theme.zindex.positive1};

  :hover {
    div {
      opacity: 0.9;
    }
  }

  ${({ theme }) => theme.media.tablet`
    height: ${({ small }) => (small ? '400px' : '550px')};
  `}

  ${({ theme }) => theme.media.desktop`
    height: ${({ small }) => (small ? '500px' : '750px')};
    padding: 40px 50px;
  `}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.dark};
  transition: opacity 250ms ease-in-out;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.s};
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive1};
  margin: 0;
  text-align: right;
  text-transform: capitalize;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.m};
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.l};
  `}
`;

export default { Article, Overlay, Title };

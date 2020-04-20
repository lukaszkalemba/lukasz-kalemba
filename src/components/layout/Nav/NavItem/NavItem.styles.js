import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const ListItem = styled.li`
  align-items: flex-start;
  display: flex;
  padding: 15px;

  ${({ theme }) => theme.media.tablet`
    padding: 20px 55px;
  `}

  ${({ theme }) => theme.media.laptop`
    padding: 0;
    margin-left: 130px;
  `}
`;

const Link = styled(GatsbyLink)`
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  text-decoration: none;
  font-weight: bold;
  opacity: 0.85;
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xl};
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.xxs};
    font-weight: ${theme.font.weight.regular};
    opacity: 0.75;
  `}

  ::before {
    counter-increment: nav;
    content: '0' counter(nav);
    display: block;
    height: 100%;
    opacity: 0;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.xxs};
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;

    ${({ theme }) => theme.media.laptop`
      display: none;
    `}
  }

  :hover {
    transform: translateX(15px);
    opacity: 1;

    ::before {
      opacity: 0.5;
      transform: translateX(-10px);
    }

    ${({ theme }) => theme.media.laptop`
      transform: none;
    `}
  }
`;

export default { ListItem, Link };

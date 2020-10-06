import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const ListItem = styled.li`
  align-items: flex-start;
  display: flex;
  padding: 15px 35px;

  ${({ theme }) => theme.media.tablet`
    padding: 20px 70px;
  `}

  ${({ theme }) => theme.media.laptop`
    padding: 0;
    margin-left: 130px;
  `}
`;

const Link = styled(GatsbyLink)`
  font-size: ${({ theme }) => theme.font.size.body.xl};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  text-decoration: none;
  font-weight: bold;
  opacity: 0.8;
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
  position: relative;

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.body.xxl};
  `}

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.body.xs};
    font-weight: ${theme.font.weight.regular};
    opacity: 0.75;
    padding: 5px 0;
  `}

  ::before {
    display: block;
    height: 100%;
    opacity: 0;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.body.xs};
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;

    ${({ theme }) => theme.media.laptop`
      display: none;
    `}
  }

  :hover {
    opacity: 1;

    ::before {
      opacity: 0.5;
      transform: translateX(-10px);
    }

    ${({ theme }) => theme.media.laptop`
      transform: scale(1.05);
    `}
  }
`;

export default { ListItem, Link };

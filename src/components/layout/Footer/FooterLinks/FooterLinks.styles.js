import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.media.laptop`
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`;

const Link = styled(GatsbyLink)`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 8px 0;
  opacity: 0.75;
  transition: opacity 250ms ease-in-out;

  ${({ theme }) => theme.media.laptop`
    padding: 0;
    margin-left: 80px;
    font-size: ${theme.font.size.xxs};
  `}
    :hover {
    opacity: 1;
  }
`;

export default { Wrapper, Link };

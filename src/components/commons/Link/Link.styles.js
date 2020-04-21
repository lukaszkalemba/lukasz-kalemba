import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import arrow from 'assets/images/icon_arrow.svg';

const Link = styled(GatsbyLink)`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  ::after {
    content: url(${arrow});
    display: block;
    width: 40px;
    height: 20px;

    svg {
      width: 100%;
    }
  }
`;

export default { Link };

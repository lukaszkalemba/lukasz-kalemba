import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled(GatsbyLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  opacity: 0.75;
  margin-left: 80px;
`;

export default { Wrapper, Link };

import styled from 'styled-components';
import H2 from 'components/atoms/Heading';

const Wrapper = styled.div`
  margin-bottom: 100px;

  ${({ theme }) => theme.media.laptop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 150px;
  `}
`;

const Heading = styled(H2)`
  ${({ theme }) => theme.media.laptop`
    max-width: 500px;
  `}
`;

export default { Wrapper, Heading };

import styled from 'styled-components';
import Scroll from 'react-smooth-scrollbar';

const Scrollbar = styled(Scroll)`
  width: 100vw;
  height: 100vh;
  overflow: auto;

  .scrollbar-track {
    background-color: ${({ theme }) => theme.color.primary};
  }

  .scrollbar-thumb {
    border-radius: 2px;
  }
`;

export default { Scrollbar };

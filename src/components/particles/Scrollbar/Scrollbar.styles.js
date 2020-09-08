import styled from 'styled-components';

const Scrollbar = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .scrollbar-track {
    background-color: ${({ theme }) => theme.color.primary};
  }

  .scrollbar-thumb {
    border-radius: 2px;
  }
`;

export default { Scrollbar };

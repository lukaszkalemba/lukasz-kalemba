import styled from 'styled-components';

const Scrollbar = styled.div`
  .scrollbar-track {
    background-color: ${({ theme }) => theme.color.primary};
  }

  .scrollbar-thumb {
    border-radius: 2px;
  }

  ${({ theme }) => theme.media.laptop`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `}
`;

export default { Scrollbar };

import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;

  ${({ theme }) => theme.media.laptop`
    justify-content: center;
  `}
`;

export default { ButtonWrapper };

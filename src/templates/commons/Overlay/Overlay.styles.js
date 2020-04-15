import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.color.background.light},
    ${({ theme }) => theme.color.background.dark}
  );
`;

const Logo = styled.div`
  width: 130px;
`;

export default { Wrapper, Logo };

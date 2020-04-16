import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.color.background.light},
    ${({ theme }) => theme.color.background.dark}
  );
  color: ${({ theme }) => theme.color.white};
`;

export default { Wrapper };

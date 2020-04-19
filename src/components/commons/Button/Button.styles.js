import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.font.size.xxs};
  cursor: pointer;
  display: block;
  min-width: 260px;
  color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.dark : theme.color.white};
  background-color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.white : 'transparent'};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 1em 2em;
  transform: skew(-45deg);
  border: ${({ theme }) => `2px solid ${theme.color.white}`};
  margin-left: 1.75em;

  span {
    display: block;
    transform: skew(45deg);
  }
`;

export default { Button };

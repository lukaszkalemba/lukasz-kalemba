import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ theme }) => theme.font.size.xxxs};
  cursor: pointer;
  display: block;
  width: 170px;
  color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.dark : theme.color.white};
  background-color: ${({ priority, theme }) =>
    priority === 'primary' ? theme.color.white : 'transparent'};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 1em 2em;
  border: ${({ theme }) => `2px solid ${theme.color.white}`};
  z-index: ${({ theme }) => theme.zindex.positive1};
  margin-bottom: 8px;

  ::before {
    content: '';
    display: none;
    width: 2%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.color.primary};
    transition: transform 400ms ease-in-out;
    transform-origin: 0 100%;

    ${({ theme }) => theme.media.laptop`
      display: block;
    `}
  }

  :hover {
    ${({ theme }) => theme.media.laptop`
      ::before {
        transform: translateX(calc(5000% - 5px));
      }

      span {
        transform: translateX(-5px) skew(45deg);
      }
    `};
  }

  ${({ theme }) => theme.media.tablet`
    font-size: ${theme.font.size.xxs};
    width: 230px;
    margin-bottom: 12px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: 0 15px;
    width: 260px;
    transform: skew(-45deg);
  `}

  span {
    display: block;
    transition: transform 400ms 100ms ease-in-out;

    ${({ theme }) => theme.media.laptop`
      transform: skew(45deg);
    `}
  }
`;

export default { Button };

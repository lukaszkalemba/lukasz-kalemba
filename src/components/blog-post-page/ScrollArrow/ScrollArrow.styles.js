import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50px;
  height: 100px;
  margin-left: auto;
  margin-top: auto;

  ${({ theme }) => theme.media.laptop`
    width: 75px;
    height: 150px;
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper };

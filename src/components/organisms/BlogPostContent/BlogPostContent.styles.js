import styled from 'styled-components';

const Wrapper = styled.div`
  margin: calc(-10vh + 50px) 0 50px;

  ${({ theme }) => theme.media.tablet`
    margin: calc(-13vh + 100px) 0 100px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin: calc(-13vh + 150px) 0 150px;
  `}
`;

export default { Wrapper };

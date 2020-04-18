import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;

  ${({ theme }) => theme.media.tablet`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default { Wrapper };

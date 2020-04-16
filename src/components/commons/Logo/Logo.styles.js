import styled from 'styled-components';

const Wrapper = styled.div`
  width: 120px;

  ${({ theme }) => theme.media.tablet`
    width: 150px;
  `}
`;

export default { Wrapper };

import styled from 'styled-components';
import HeadingComponent from 'components/atoms/Heading';

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.media.laptop`
    justify-content: center;
  `}
`;

const Heading = styled(HeadingComponent)`
  margin: 1.5em 0 1em;

  ${({ theme }) => theme.media.laptop`
    font-size: ${theme.font.size.xl};
    margin-bottom: 0.55em;
  `}

  ${({ theme }) => theme.media.desktop`
    font-size: ${theme.font.size.xxl};
  `}
`;

export default { ButtonWrapper, Heading };

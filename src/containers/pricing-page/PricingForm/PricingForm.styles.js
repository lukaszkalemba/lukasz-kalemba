import styled from 'styled-components';
import H2 from 'components/common/Heading';

const Wrapper = styled.div`
  margin-bottom: 125px;

  ${({ theme }) => theme.media.laptop`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 150px;
  `}
`;

const Heading = styled(H2)`
  max-width: 500px;
`;

const InputWrapper = styled.div`
  position: relative;
  margin: 45px 0;

  ${({ theme }) => theme.media.laptop`
    margin-right: 100px;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-right: 150px;
  `}
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px 0 10px 0;
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  max-width: 400px;

  ${({ theme }) => theme.media.laptop`
    max-width: 600px;
  `}
    :focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.color.primary};
  }

  :focus ~ label {
    top: -18px;
    left: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.color.primary};
  }

  :valid ~ label {
    top: -18px;
    left: 0;
    font-size: 14px;
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: rgba(255, 255, 255, 0.5);
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 3px;
  top: 10px;
  transition: 0.2s ease all;
`;

export default {
  Wrapper,
  Heading,
  InputWrapper,
  Input,
  Label,
};

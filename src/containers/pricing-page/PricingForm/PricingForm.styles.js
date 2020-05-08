import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 150px;
`;

const InputWrapper = styled.div`
  position: relative;
  margin: 45px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px 0 10px 0;
  display: block;
  width: 400px;
  border: none;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;

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
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 3px;
  top: 10px;
  transition: 0.2s ease all;
`;

const ImageWrapper = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 40px 0 0 40px;
    background-color: ${({ theme }) => theme.color.dark};
  }
`;

const Image = styled(GatsbyImage)`
  margin: 0 40px 40px 0;
`;

export default { Wrapper, InputWrapper, Input, Label, ImageWrapper, Image };

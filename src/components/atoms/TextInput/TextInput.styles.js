import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const InputWrapper = styled(motion.div)`
  :first-child {
    margin-top: 40px;
  }

  position: relative;
  margin: 30px 0;

  ${({ theme }) => theme.media.tablet`
    margin: 35px 0;
  `}

  ${({ theme }) => theme.media.laptop`
    margin-right: 100px;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-right: 150px;
  `}
`;

const Input = styled.input`
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-size: 18px;
  padding: 10px 0 8px 0;
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  transition: all 0.2s ease-in-out;
  max-width: 400px;
  border-bottom-color: ${({ isError }) =>
    isError ? 'orange' : 'rgba(255, 255, 255, 0.35)'};

  ${({ theme }) => theme.media.tablet`
    font-size: 18px;
    padding-bottom: 10px;
  `}

  ${({ theme }) => theme.media.laptop`
    max-width: 600px;
  `}
    :focus {
    outline: none;
    border-bottom-color: ${({ theme, isError }) =>
      !isError && theme.color.primary};
  }

  ${({ value }) =>
      value &&
      css`
        ~ label {
          top: -18px;
          left: 0;
          font-size: 14px;
        }
      `}
    :focus
    ~ label {
    top: -18px;
    left: 0;
    font-size: 14px;
    color: ${({ theme, isError }) => !isError && theme.color.primary};
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ isError }) => (isError ? 'orange' : 'rgba(255, 255, 255, 0.5)')};
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 3px;
  top: 10px;
  transition: 0.2s ease all;
`;

const Error = styled.div`
  font-size: ${({ theme }) => theme.font.size.xxs};
  margin-top: 7px;
  margin-left: 1px;
  color: orange;
  height: 14px;
`;

export default {
  InputWrapper,
  Input,
  Label,
  Error,
};

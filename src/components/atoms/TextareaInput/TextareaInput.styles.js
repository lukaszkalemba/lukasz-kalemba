import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const TextareaWrapper = styled(motion.div)`
  position: relative;
  margin: 30px 0 40px;

  ${({ theme }) => theme.media.tablet`
    margin-right: 100px;
    margin-top: 37px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin-right: 100px;
  `}

  ${({ theme }) => theme.media.desktop`
    margin-right: 150px;
  `}
`;

const Textarea = styled.textarea`
  font-size: 18px;
  padding: 10px 0 10px 0;
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
  resize: none;

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
`;

export default {
  TextareaWrapper,
  Textarea,
  Label,
  Error,
};

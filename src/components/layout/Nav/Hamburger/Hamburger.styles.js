import styled from 'styled-components';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: ${({ theme }) => theme.zindex.positive2};
  border: none;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;

  > div {
    position: relative;
    width: 17px;
    height: 1px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.white};

    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 17px;
      height: 1px;
      border-radius: 3px;
      background-color: ${({ theme }) => theme.color.white};
    }

    ::before {
      left: 2px;
      bottom: 5px;
    }

    ::after {
      top: 5px;
      left: -2px;
    }
  }
`;

export default { Wrapper };

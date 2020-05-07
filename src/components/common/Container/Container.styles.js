import styled from 'styled-components';

const handleAxis = (axis, medium) => {
  switch (axis) {
    case 'x':
      return medium === 'tablet' ? '0 55px' : '0 85px';

    case 'y':
      return '35px 0';

    case 'both':
      return medium === 'tablet' ? '35px 55px' : '35px 85px';

    default:
      return null;
  }
};

const Wrapper = styled.div`
  padding: 20px;

  ${({ theme }) => theme.media.tablet`
    padding: ${({ axis }) => handleAxis(axis, 'tablet')};
  `}

  ${({ theme }) => theme.media.laptop`
    padding: ${({ axis }) => handleAxis(axis, 'laptop')};
  `}
`;

export default { Wrapper };

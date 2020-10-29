import styled from 'styled-components';
import ContainerComponent from 'components/particles/Container';

const Container = styled(ContainerComponent)`
  ${({ theme, areCardsEven }) => theme.media.tablet`
    margin-bottom: ${areCardsEven ? '140px' : '10px'};
  `}
`;

export default { Container };

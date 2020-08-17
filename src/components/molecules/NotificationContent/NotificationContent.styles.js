import styled from 'styled-components';
import ButtonComponent from 'components/atoms/Button';
import ParagraphComponent from 'components/atoms/Paragraph';

const Wrapper = styled.div`
  max-width: 450px;
`;

const Button = styled(ButtonComponent)`
  margin: 0 auto;
  margin-top: 50px;
`;

const Paragraph = styled(ParagraphComponent)`
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 20px;

  ${({ theme }) => theme.media.tablet`
    margin-top: -5px;
    margin-left: 20px;
  `}

  ${({ theme }) => theme.media.laptop`
    margin-left: 30px;
  `}
`;

export default { Wrapper, Button, Paragraph };

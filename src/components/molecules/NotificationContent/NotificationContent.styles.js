import styled from 'styled-components';
import ButtonComponent from 'components/atoms/Button';
import ParagraphComponent from 'components/atoms/Paragraph';

const Button = styled(ButtonComponent)`
  margin: 0 auto;
  margin-top: 40px;
`;

const Paragraph = styled(ParagraphComponent)`
  font-size: ${({ theme }) => theme.font.size.body.s};
  line-height: 20px;
  margin-left: 25px;

  ${({ theme }) => theme.media.tablet`
    margin-top: -5px;
    margin-left: 20px;
  `}
`;

export default { Button, Paragraph };

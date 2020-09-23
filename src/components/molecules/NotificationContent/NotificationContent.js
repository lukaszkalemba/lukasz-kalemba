import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Heading from 'components/atoms/Heading';
import S from './NotificationContent.styles';
import animations from './NotificationContent.animations';

const NotificationContent = ({ submissionStatus, enableScrolling }) => {
  let textContent = {};

  switch (submissionStatus) {
    case 'success':
    default:
      textContent = {
        heading: 'Poszło!',
        paragraph: 'W ciągu 24h otrzymasz odpowiedź.',
      };
      break;

    case 'error':
      textContent = {
        heading: 'Wystąpił błąd...',
        paragraph: 'Spróbuj ponownie później.',
      };
      break;
  }

  return (
    <S.Wrapper>
      <Heading>{textContent.heading}</Heading>
      <S.Paragraph animation={animations.paragraph}>
        {textContent.paragraph}
      </S.Paragraph>
      <motion.div {...animations.buttonWrapper}>
        <S.Button
          type="link"
          path="/"
          priority="primary"
          onClick={enableScrolling}
        >
          Strona główna
        </S.Button>
      </motion.div>
    </S.Wrapper>
  );
};

NotificationContent.propTypes = {
  submissionStatus: PropTypes.oneOf(['success', 'error', null]).isRequired,
  enableScrolling: PropTypes.func.isRequired,
};

export default NotificationContent;

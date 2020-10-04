import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Heading from 'components/atoms/Heading';
import { getNotificationContent } from 'helpers/getNotificationContent';
import { enableScrolling } from 'helpers/enableScrolling';
import S from './NotificationContent.styles';
import animations from './NotificationContent.animations';

const NotificationContent = ({ submissionStatus }) => {
  const textContent = getNotificationContent(submissionStatus);

  return (
    <div>
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
    </div>
  );
};

NotificationContent.propTypes = {
  submissionStatus: PropTypes.oneOf(['success', 'error', null]).isRequired,
};

export default NotificationContent;

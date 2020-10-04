import React from 'react';
import PropTypes from 'prop-types';
import NotificationContent from 'components/molecules/NotificationContent';
import Container from 'components/particles/Container';
import S from './Notification.styles';
import animations from './Notification.animations';

const Notification = ({ submissionStatus, setSubmissionStatus }) => {
  const closeNotification = () => {
    setSubmissionStatus(null);
  };

  document.body.ontouchend = e => {
    e.preventDefault();
  };

  return (
    <S.Backdrop {...animations.backdrop}>
      <S.Wrapper>
        <Container axis="both">
          <NotificationContent submissionStatus={submissionStatus} />
          <S.CloseButton
            onClick={closeNotification}
            type="button"
            data-testid="close-notification-button"
          />
        </Container>
      </S.Wrapper>
    </S.Backdrop>
  );
};

Notification.propTypes = {
  submissionStatus: PropTypes.oneOf(['success', 'error']).isRequired,
  setSubmissionStatus: PropTypes.func.isRequired,
};

export default Notification;

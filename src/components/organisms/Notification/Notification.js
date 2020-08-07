import React from 'react';
import PropTypes from 'prop-types';
import NotificationContent from 'components/molecules/NotificationContent';
import Container from 'components/particles/Container';
import S from './Notification.styles';

const Notification = ({ submissionStatus, setSubmissionStatus }) => {
  const closeNotification = () => setSubmissionStatus(null);

  return (
    <S.Backdrop>
      <S.Wrapper>
        <Container axis="both">
          <NotificationContent submissionStatus={submissionStatus} />
          <S.CloseButton onClick={closeNotification} type="button" />
        </Container>
      </S.Wrapper>
    </S.Backdrop>
  );
};

Notification.propTypes = {
  submissionStatus: PropTypes.oneOf(['success', 'error', null]).isRequired,
  setSubmissionStatus: PropTypes.func.isRequired,
};

export default Notification;

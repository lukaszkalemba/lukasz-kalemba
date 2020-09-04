import React from 'react';
import PropTypes from 'prop-types';
import NotificationContent from 'components/molecules/NotificationContent';
import Container from 'components/particles/Container';
import S from './Notification.styles';

const Notification = ({ submissionStatus, setSubmissionStatus, offset }) => {
  const enableScrolling = () => {
    window.smoothScroll.updatePluginOptions('stopScrollbar', { open: false });
  };

  const closeNotification = () => {
    setSubmissionStatus(null);
    enableScrolling();
  };

  return (
    <S.Backdrop>
      <S.Wrapper verticalOffset={offset.y}>
        <Container axis="both">
          <NotificationContent
            submissionStatus={submissionStatus}
            enableScrolling={enableScrolling}
          />
          <S.CloseButton onClick={closeNotification} type="button" />
        </Container>
      </S.Wrapper>
    </S.Backdrop>
  );
};

Notification.propTypes = {
  submissionStatus: PropTypes.oneOf(['success', 'error', null]).isRequired,
  setSubmissionStatus: PropTypes.func.isRequired,
  offset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Notification;

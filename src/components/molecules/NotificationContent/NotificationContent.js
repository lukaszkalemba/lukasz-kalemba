import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import S from './NotificationContent.styles';

const NotificationContent = ({ submissionStatus }) => {
  let textContent = {};

  switch (submissionStatus) {
    case 'success':
      textContent = {
        heading: 'Poszło!',
        paragraph: 'Odezwiemy się do Ciebie w ciągu 24h.',
      };
      break;

    case 'error':
      textContent = {
        heading: 'Wystąpił błąd...',
        paragraph: 'Spróbuj ponownie później.',
      };
      break;

    default:
      textContent = {
        heading: '',
        paragraph: '',
      };
      break;
  }

  return (
    <>
      <Heading>{textContent.heading}</Heading>
      <S.Paragraph>{textContent.paragraph}</S.Paragraph>
      <S.Button priority="primary" path="/">
        Strona główna
      </S.Button>
    </>
  );
};

NotificationContent.propTypes = {
  submissionStatus: PropTypes.oneOf(['success', 'error', null]).isRequired,
};

export default NotificationContent;

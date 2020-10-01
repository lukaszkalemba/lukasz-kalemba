export const getNotificationContent = submissionStatus => {
  switch (submissionStatus) {
    case 'success':
      return {
        heading: 'Poszło!',
        paragraph: 'W ciągu 24h otrzymasz odpowiedź.',
      };

    case 'error':
    default:
      return {
        heading: 'Wystąpił błąd...',
        paragraph: 'Spróbuj ponownie później.',
      };
  }
};

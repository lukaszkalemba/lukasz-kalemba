import { disableBodyScroll } from 'body-scroll-lock';

export const disableScrolling = () => {
  document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  disableBodyScroll(document.body);
};

import { enableBodyScroll } from 'body-scroll-lock';

export const enableScrolling = () => {
  document.getElementsByTagName('html')[0].style = '';
  enableBodyScroll(document.body);
};

import React from 'react';
import Icon from 'components/atoms/Icon';
import logo from 'assets/svgs/logo_lukaszkalemba-white.svg';
import S from './FooterLogo.styles';

const FooterLogo = () => (
  <S.Wrapper data-testid="footer-logo">
    <Icon src={logo} />
  </S.Wrapper>
);

export default FooterLogo;

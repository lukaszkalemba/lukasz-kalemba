import React from 'react';
import Icon from 'components/commons/Icon';
import logo from 'assets/svgs/logo_codemon-white.svg';
import S from './FooterLogo.styles';

const FooterLogo = () => (
  <S.Wrapper>
    <Icon src={logo} />
  </S.Wrapper>
);

export default FooterLogo;

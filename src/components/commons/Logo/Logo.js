import React from 'react';
import Icon from 'components/commons/Icon';
import logo from 'assets/images/logo_codemon.svg';
import S from './Logo.styles';

const Logo = () => (
  <S.Wrapper>
    <S.Link to="/">
      <Icon src={logo} />
    </S.Link>
  </S.Wrapper>
);

export default Logo;

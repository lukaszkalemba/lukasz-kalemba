import React from 'react';
import { Link } from 'gatsby';
import Icon from 'components/commons/Icon';
import logo from 'assets/images/logo_codemon.svg';
import S from './Logo.styles';

const Logo = () => (
  <S.Wrapper>
    <Link to="/">
      <Icon src={logo} />
    </Link>
  </S.Wrapper>
);

export default Logo;

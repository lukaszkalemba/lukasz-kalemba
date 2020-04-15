import React from 'react';
import Icon from 'components/commons/Icon';
import logo from 'assets/images/logo_codemon.svg';
import S from './Overlay.styles';

const Overlay = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Icon src={logo} />
      </S.Logo>
    </S.Wrapper>
  );
};

export default Overlay;

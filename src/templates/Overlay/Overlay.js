import React from 'react';
import Icon from 'assets/global/Icon/Icon';
import logo from 'assets/images/logo_codemon.svg';
import Styled from './StyledOverlay';

const Overlay = () => {
  return (
    <Styled.Wrapper>
      <Styled.Logo>
        <Icon src={logo} />
      </Styled.Logo>
    </Styled.Wrapper>
  );
};

export default Overlay;

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/commons/Icon';
import logo from 'assets/images/logo_codemon.svg';
import S from './Logo.styles';

const Logo = ({ setIsNavOpen }) => (
  <S.Wrapper onClick={() => setIsNavOpen(false)}>
    <S.Link to="/">
      <Icon src={logo} />
    </S.Link>
  </S.Wrapper>
);

Logo.propTypes = {
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Logo;

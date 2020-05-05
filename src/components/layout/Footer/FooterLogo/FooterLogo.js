import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/commons/Icon';
import logo from 'assets/images/logo_codemon-white.svg';
import S from './FooterLogo.styles';

const FooterLogo = ({ className }) => (
  <S.Wrapper className={className}>
    <Icon src={logo} />
  </S.Wrapper>
);

FooterLogo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FooterLogo;

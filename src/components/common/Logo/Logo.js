import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/common/Icon';
import logo from 'assets/svgs/logo_codemon.svg';
import S from './Logo.styles';

const Logo = ({ path, setIsNavOpen }) => (
  <S.Wrapper path={path} onClick={() => setIsNavOpen(false)}>
    <S.Link to="/">
      <Icon src={logo} />
    </S.Link>
  </S.Wrapper>
);

Logo.propTypes = {
  path: PropTypes.string.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Logo;

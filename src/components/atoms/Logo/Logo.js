import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import logo from 'assets/svgs/logo_lukaszkalemba.svg';
import { enableScrolling } from 'helpers/enableScrolling';
import S from './Logo.styles';

const Logo = ({ path, setIsNavOpen }) => {
  const handleLogoClick = () => {
    setIsNavOpen(false);
    enableScrolling();
  };

  return (
    <S.Wrapper path={path} data-testid="logo" onClick={handleLogoClick}>
      <S.Link to="/" aria-label="lukaszkalemba">
        <Icon src={logo} />
      </S.Link>
    </S.Wrapper>
  );
};

Logo.propTypes = {
  path: PropTypes.string.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Logo;

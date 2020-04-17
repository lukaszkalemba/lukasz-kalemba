import React from 'react';
import PropTypes from 'prop-types';
import S from './Hamburger.styles';

const Hamburger = ({ isNavOpen, toggleNav }) => (
  <S.Wrapper isNavOpen={isNavOpen} onClick={toggleNav}>
    <div />
  </S.Wrapper>
);

Hamburger.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default Hamburger;

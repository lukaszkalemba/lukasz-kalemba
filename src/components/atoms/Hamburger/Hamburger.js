import React from 'react';
import PropTypes from 'prop-types';
import S from './Hamburger.styles';

const Hamburger = ({ isNavOpen, toggleNav }) => (
  <S.Button aria-label="menu" isNavOpen={isNavOpen} onClick={toggleNav}>
    <div />
  </S.Button>
);

Hamburger.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default Hamburger;

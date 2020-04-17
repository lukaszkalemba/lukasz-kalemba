import React from 'react';
import PropTypes from 'prop-types';
import links from 'utils/links';
import Container from 'components/commons/Container';
import NavItem from 'components/layout/Nav/NavItem';
import S from './NavItems.styles';

const NavItems = ({ isNavOpen }) => {
  return (
    <S.List isNavOpen={isNavOpen}>
      <Container axis="both">
        {links.map(({ id, path, name }) => (
          <NavItem key={id} path={path} name={name} />
        ))}
      </Container>
    </S.List>
  );
};

NavItems.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default NavItems;

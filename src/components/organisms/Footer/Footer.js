import React from 'react';
import PropTypes from 'prop-types';
import FooterLogo from 'components/atoms/FooterLogo';
import Container from 'components/particles/Container';
import CompanyInformations from 'components/molecules/CompanyInformations';
import FooterLinks from 'components/molecules/FooterLinks';
import SocialMediaIcons from 'components/molecules/SocialMediaIcons';
import Copyright from 'components/atoms/Copyright';
import S from './Footer.styles';

const Footer = ({ isFooter }) => {
  return (
    <S.Footer isFooter={isFooter}>
      <Container axis="both">
        <S.TopBar>
          <CompanyInformations />
          <FooterLogo />
          <SocialMediaIcons />
        </S.TopBar>
      </Container>

      <Container axis="x">
        <S.BottomBar>
          <Copyright />
          <FooterLinks />
        </S.BottomBar>
      </Container>
    </S.Footer>
  );
};

Footer.propTypes = {
  isFooter: PropTypes.bool.isRequired,
};

export default Footer;

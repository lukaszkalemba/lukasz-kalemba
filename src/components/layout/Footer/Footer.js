import React from 'react';
import Container from 'components/commons/Container';
import CompanyInformations from 'components/layout/Footer/CompanyInformations';
import FooterLogo from 'components/layout/Footer/FooterLogo';
import SocialMediaIcons from 'components/commons/SocialMediaIcons';
import FooterLinks from 'components/layout/Footer/FooterLinks';
import Copyright from 'components/layout/Footer/Copyright';
import S from './Footer.styles';

const Footer = () => (
  <S.Footer>
    <Container axis="both">
      <S.TopBar>
        <CompanyInformations />
        <FooterLogo />
        <SocialMediaIcons />
      </S.TopBar>

      <S.BottomBar>
        <Copyright />
        <FooterLinks />
      </S.BottomBar>
    </Container>
  </S.Footer>
);

export default Footer;

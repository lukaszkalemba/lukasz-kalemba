import React from 'react';
import CompanyInformations from 'components/layout/Footer/CompanyInformations';
import FooterLogo from 'components/layout/Footer/FooterLogo';
import SocialMediaIcons from 'components/commons/SocialMediaIcons';
import FooterLinks from 'components/layout/Footer/FooterLinks';
import Copyright from 'components/layout/Footer/Copyright';

const Footer = () => (
  <footer>
    <div>
      <CompanyInformations />
      <FooterLogo />
      <SocialMediaIcons />
    </div>
    <div>
      <Copyright />
      <FooterLinks />
    </div>
  </footer>
);

export default Footer;

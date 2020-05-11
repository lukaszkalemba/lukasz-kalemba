import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Container from 'components/common/Container';
import CompanyInformations from 'components/layout/Footer/CompanyInformations';
import FooterLogo from 'components/layout/Footer/FooterLogo';
import FooterLinks from 'components/layout/Footer/FooterLinks';
import Copyright from 'components/layout/Footer/Copyright';
import SocialMediaIcons from 'containers/common/SocialMediaIcons';
import S from './Footer.styles';
import animations from './Footer.animations';

const Footer = () => {
  const animation = useAnimation();

  const [footerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  return (
    <S.Footer
      ref={footerRef}
      animate={animation}
      initial="initial"
      variants={animations.footerVariants}
    >
      <Container axis="both">
        <S.TopBar>
          <CompanyInformations variants={animations.childrenVariants} />
          <FooterLogo />
          <SocialMediaIcons variants={animations.socialMediaIconsVariants} />
        </S.TopBar>
      </Container>

      <Container axis="x">
        <S.BottomBar variants={animations.childrenVariants}>
          <Copyright />
          <FooterLinks />
        </S.BottomBar>
      </Container>
    </S.Footer>
  );
};

export default Footer;

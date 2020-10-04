import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import FooterLogo from 'components/atoms/FooterLogo';
import CompanyInformations from 'components/molecules/CompanyInformations';
import FooterLinks from 'components/molecules/FooterLinks';
import SocialMediaIcons from 'components/molecules/SocialMediaIcons';
import Container from 'components/particles/Container';
import S from './Footer.styles';
import animations from './Footer.animations';

const Footer = () => {
  const animation = useAnimation();

  const [footerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  const footerAnimations = animations.getFooter(animation);

  return (
    <S.Footer ref={footerRef} {...footerAnimations}>
      <Container axis="both">
        <S.TopBar>
          <CompanyInformations animation={animations.children} />
          <FooterLogo />
          <SocialMediaIcons animation={animations.socialMediaIcons} />
        </S.TopBar>
      </Container>

      <Container axis="x">
        <S.BottomBar {...animations.children}>
          <S.Copyright>
            <span>lukaszkalemba&copy; 2020.&nbsp;</span>
            <span>Wszelkie prawa zastrzeżone.</span>
          </S.Copyright>

          <FooterLinks />
        </S.BottomBar>
      </Container>
    </S.Footer>
  );
};

export default Footer;

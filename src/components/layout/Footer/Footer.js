import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import Container from 'components/commons/Container';
import CompanyInformations from 'components/layout/Footer/CompanyInformations';
import FooterLogo from 'components/layout/Footer/FooterLogo';
import SocialMediaIcons from 'components/commons/SocialMediaIcons';
import FooterLinks from 'components/layout/Footer/FooterLinks';
import Copyright from 'components/layout/Footer/Copyright';
import S from './Footer.styles';

const Footer = () => {
  const footer = useRef(null);

  const tl = gsap.timeline();

  const companyInformations = document.querySelectorAll('.gsap-footer-info');
  const socialMediaIcons = document.querySelectorAll('.gsap-footer-icons');
  const bottomBar = document.querySelector('.gsap-footer-bottom-bar');

  const phone = window.matchMedia('(max-width: 1150px)');
  const laptop = window.matchMedia('(min-width: 1150px)');

  const intersection = useIntersection(footer, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  if (intersection && intersection.intersectionRatio > 0.9) {
    if (phone.matches) {
      tl.to(socialMediaIcons, {
        opacity: 1,
        duration: 0.3,
      })
        .to(
          companyInformations,
          {
            opacity: 1,
            duration: 0.3,
          },
          '-=0.3'
        )
        .to(bottomBar, {
          opacity: 1,
          duration: 0.3,
        });
    }

    if (laptop.matches) {
      tl.to(socialMediaIcons, {
        opacity: 1,
        duration: 0.5,
        delay: 0.25,
      })
        .to(
          companyInformations,
          {
            opacity: 1,
            duration: 0.5,
          },
          '-=0.5'
        )
        .to(
          bottomBar,
          {
            y: -5,
            opacity: 1,
            duration: 0.3,
          },

          '-=0.5'
        );
    }
  }

  return (
    <S.Footer ref={footer}>
      <Container axis="both">
        <S.TopBar>
          <CompanyInformations className="gsap-footer-info" />
          <FooterLogo />
          <SocialMediaIcons className="gsap-footer-icons" />
        </S.TopBar>
      </Container>

      <Container axis="x">
        <S.BottomBar className="gsap-footer-bottom-bar">
          <Copyright />
          <FooterLinks />
        </S.BottomBar>
      </Container>
    </S.Footer>
  );
};

export default Footer;

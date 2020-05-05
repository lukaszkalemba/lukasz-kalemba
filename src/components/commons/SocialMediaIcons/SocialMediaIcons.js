import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/commons/Icon';
import facebook from 'assets/images/icon_facebook.svg';
import instagram from 'assets/images/icon_instagram.svg';
import dribbble from 'assets/images/icon_dribbble.svg';
import linkedin from 'assets/images/icon_linkedin.svg';
import S from './SocialMediaIcons.styles';

const SocialMediaIcons = ({ className }) => (
  <S.Wrapper className={className}>
    <S.A href="https://facebook.com" target="__blank">
      <Icon src={facebook} />
    </S.A>
    <S.A href="https://instagram.com" target="__blank">
      <Icon src={instagram} />
    </S.A>
    <S.A href="https://dribbble.com" target="__blank">
      <Icon src={dribbble} />
    </S.A>
    <S.A href="https://linkedin.com" target="__blank">
      <Icon src={linkedin} />
    </S.A>
  </S.Wrapper>
);

SocialMediaIcons.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SocialMediaIcons;

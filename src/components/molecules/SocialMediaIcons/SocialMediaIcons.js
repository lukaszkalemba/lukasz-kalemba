import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import facebook from 'assets/svgs/icon_facebook.svg';
import instagram from 'assets/svgs/icon_instagram.svg';
import dribbble from 'assets/svgs/icon_dribbble.svg';
import linkedin from 'assets/svgs/icon_linkedin.svg';
import S from './SocialMediaIcons.styles';

const SocialMediaIcons = ({ animation }) => (
  <S.Wrapper {...animation}>
    <S.A href="https://facebook.com" aria-label="facebook" target="__blank">
      <Icon src={facebook} />
    </S.A>
    <S.A href="https://instagram.com" aria-label="instagram" target="__blank">
      <Icon src={instagram} />
    </S.A>
    <S.A href="https://dribbble.com" aria-label="dribbble" target="__blank">
      <Icon src={dribbble} />
    </S.A>
    <S.A href="https://linkedin.com" aria-label="linkedin" target="__blank">
      <Icon src={linkedin} />
    </S.A>
  </S.Wrapper>
);

SocialMediaIcons.defaultProps = {
  animation: {},
};

SocialMediaIcons.propTypes = {
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      initial: PropTypes.shape({}),
      animate: PropTypes.shape({}),
    }),
  }),
};

export default SocialMediaIcons;

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import website from 'assets/svgs/icon_website.svg';
import github from 'assets/svgs/icon_github.svg';
import S from './ProjectIcons.styles';
import animations from './ProjectIcons.animations';

const ProjectIcons = ({ githubLink, websiteLink }) => {
  return (
    <S.Container axis="both" doubling="both" animation={animations.container}>
      {websiteLink && (
        <S.A href={websiteLink} target="__blank" data-testid="website-link">
          <Icon src={website} />
        </S.A>
      )}
      <S.A href={githubLink} target="__blank" data-testid="github-link">
        <Icon src={github} />
      </S.A>
    </S.Container>
  );
};

ProjectIcons.defaultProps = {
  websiteLink: null,
};

ProjectIcons.propTypes = {
  githubLink: PropTypes.string.isRequired,
  websiteLink: PropTypes.string,
};

export default ProjectIcons;

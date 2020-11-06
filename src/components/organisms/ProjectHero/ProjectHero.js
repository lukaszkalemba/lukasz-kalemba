import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { setHeightOnMobile } from 'helpers/setHeightOnMobile';
import Container from 'components/particles/Container';
import ProjectHeroContent from 'components/molecules/ProjectHeroContent';
import ProjectIcons from 'components/molecules/ProjectIcons';
import ScrollArrow from 'components/atoms/ScrollArrow';
import S from './ProjectHero.styles';
import animations from './ProjectHero.animations';

const ProjectHero = ({
  title,
  description,
  websiteLink,
  githubLink,
  image,
}) => {
  useEffect(() => {
    setHeightOnMobile();
  }, []);

  return (
    <S.Wrapper>
      <S.HeadingWrapper>
        <Container axis="both" doubling="x">
          <ProjectHeroContent
            title={title}
            description={description}
            animation={animations.description}
          />
        </Container>
      </S.HeadingWrapper>

      <ProjectIcons websiteLink={websiteLink} githubLink={githubLink} />
      <S.ScrollContainer axis="both" doubling="y" animation={animations.scroll}>
        <ScrollArrow />
      </S.ScrollContainer>

      <S.BackgroundWrapper {...animations.background}>
        <S.Background fluid={image}>
          <S.Overlay />
        </S.Background>
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

ProjectHero.defaultProps = {
  websiteLink: null,
};

ProjectHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  websiteLink: PropTypes.string,
  githubLink: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.shape({}),
  }).isRequired,
};

export default ProjectHero;

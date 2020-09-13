import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/particles/Container';
import ProjectHeroContent from 'components/molecules/ProjectHeroContent';
import S from './ProjectHero.styles';
import animations from './ProjectHero.animations';

const ProjectHero = ({ title, description, image }) => {
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
      <S.BackgroundWrapper {...animations.background}>
        <S.Background fluid={image}>
          <S.Overlay />
        </S.Background>
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

ProjectHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.shape({}),
  }).isRequired,
};

export default ProjectHero;

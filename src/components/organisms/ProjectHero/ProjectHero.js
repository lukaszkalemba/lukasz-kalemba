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
            animations={animations}
          />
        </Container>
      </S.HeadingWrapper>
      <S.BackgroundWrapper
        variants={animations.backgroundVariants}
        animate="animate"
        initial="initial"
      >
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
    fluid: PropTypes.object,
  }).isRequired,
};

export default ProjectHero;

import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/common/Heading';
import Container from 'components/common/Container';
import S from './ProjectHero.styles';
import animations from './ProjectHero.animations';

const ProjectHero = ({ title, description, image }) => {
  return (
    <S.Wrapper>
      <S.HeadingWrapper>
        <Container axis="both">
          <Container axis="x">
            <Heading>{title}</Heading>
            <S.Description
              variants={animations.descriptionVariants}
              animate="animate"
              initial="initial"
            >
              {description}
            </S.Description>
          </Container>
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

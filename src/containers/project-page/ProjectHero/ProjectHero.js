import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/common/Heading';
import Container from 'components/common/Container';
import S from './ProjectHero.styles';

const ProjectHero = ({ title, description, image }) => {
  return (
    <S.Wrapper>
      <S.HeadingWrapper>
        <Container axis="both">
          <Container axis="x">
            <Heading>{title}</Heading>
            <S.Description>{description}</S.Description>
          </Container>
        </Container>
      </S.HeadingWrapper>
      <S.BackgroundImage fluid={image}>
        <S.Overlay />
      </S.BackgroundImage>
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

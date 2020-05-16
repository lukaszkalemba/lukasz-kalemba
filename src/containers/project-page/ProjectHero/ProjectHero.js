import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import Container from 'components/common/Container';
import Heading from 'components/common/Heading';
import S from './ProjectHero.styles';

const ProjectHero = ({ title, description, image }) => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <Heading>{title}</Heading>
        <S.Description>{description}</S.Description>
      </Container>
      <S.ImageWrapper>
        <Image fluid={image} />
        <S.Overlay />
      </S.ImageWrapper>
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

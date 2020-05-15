import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/common/Heading';
import Container from 'components/common/Container';
import S from './BlogPostHero.styles';

const BlogPostHero = ({ title, description, image }) => {
  return (
    <S.Background fluid={image.fluid}>
      <S.Overlay>
        <Container axis="both">
          <Heading>{title}</Heading>
          <S.Paragraph>{description}</S.Paragraph>
        </Container>
      </S.Overlay>
    </S.Background>
  );
};

BlogPostHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
};

export default BlogPostHero;

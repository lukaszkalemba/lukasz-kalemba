import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/particles/Container';
import Heading from 'components/atoms/Heading';
import S from './BlogPostHeroContent.styles';

const BlogPostHeroContent = ({ title, description, animations }) => {
  return (
    <Container axis="both">
      <Heading>{title}</Heading>
      <S.Description
        variants={animations.descriptionVariants}
        initial="initial"
        animate="animate"
        data-testid="blog-post-hero-description"
      >
        {description}
      </S.Description>
    </Container>
  );
};

BlogPostHeroContent.defaultProps = {
  animations: {},
};

BlogPostHeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animations: PropTypes.shape({
    descriptionVariants: PropTypes.shape({}),
  }),
};

export default BlogPostHeroContent;

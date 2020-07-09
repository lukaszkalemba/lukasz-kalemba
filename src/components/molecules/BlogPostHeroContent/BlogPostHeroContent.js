import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/particles/Container';
import Heading from 'components/atoms/Heading';
import S from './BlogPostHeroContent.styles';

const BlogPostHeroContent = ({ title, description, animations }) => {
  return (
    <Container axis="both">
      <Heading>{title}</Heading>
      <S.Paragraph
        variants={animations.paragraphVariants}
        initial="initial"
        animate="animate"
      >
        {description}
      </S.Paragraph>
    </Container>
  );
};

BlogPostHeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animations: PropTypes.shape({
    paragraphVariants: PropTypes.shape({}),
  }).isRequired,
};

export default BlogPostHeroContent;

import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/common/Heading';
import Container from 'components/common/Container';
import ScrollArrow from 'components/blog-post-page/ScrollArrow';
import S from './BlogPostHero.styles';
import animations from './BlogPostHero.animations';

const BlogPostHero = ({ title, description, image }) => {
  return (
    <S.Background fluid={image.fluid}>
      <S.Overlay>
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

        <S.ScrollWrapper
          variants={animations.scrollWrapperVariants}
          initial="initial"
          animate="animate"
        >
          <ScrollArrow />
        </S.ScrollWrapper>
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

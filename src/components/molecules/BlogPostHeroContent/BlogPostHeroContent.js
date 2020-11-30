import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import S from './BlogPostHeroContent.styles';

const BlogPostHeroContent = ({ title, description, animation }) => {
  return (
    <S.Wrapper>
      <Heading isH1>{title}</Heading>
      <S.Description {...animation}>{description}</S.Description>
    </S.Wrapper>
  );
};

BlogPostHeroContent.defaultProps = {
  animation: {},
};

BlogPostHeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animation: PropTypes.shape({
    variants: PropTypes.shape({
      initial: PropTypes.shape({}),
      animate: PropTypes.shape({}),
    }),
  }),
};

export default BlogPostHeroContent;

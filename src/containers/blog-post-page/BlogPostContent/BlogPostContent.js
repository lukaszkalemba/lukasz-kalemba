import React from 'react';
import PropTypes from 'prop-types';
import S from './BlogPostContent.styles';

const BlogPostContent = ({ content }) => {
  return (
    <S.Wrapper>
      <p>{content}</p>
    </S.Wrapper>
  );
};

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPostContent;

import React from 'react';
import PropTypes from 'prop-types';
import BlogPostContentItem from 'components/atoms/BlogPostContentItem';
import S from './BlogPostContentBody.styles';

const BlogPostContentBody = ({ content }) => {
  return (
    <S.Content>
      {content.map(item => (
        <BlogPostContentItem key={item.key} content={item} />
      ))}
    </S.Content>
  );
};

BlogPostContentBody.propTypes = {
  content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({})]))
    .isRequired,
};

export default BlogPostContentBody;

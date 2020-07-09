import React from 'react';
import PropTypes from 'prop-types';
import BlogPostContentItem from 'components/atoms/BlogPostContentItem';
import S from './BlogPostContentContent.styles';

const BlogPostContentContent = ({ content }) => {
  return (
    <S.Content>
      {content.map(item => (
        <BlogPostContentItem key={item.key} content={item} />
      ))}
    </S.Content>
  );
};

BlogPostContentContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({})]))
    .isRequired,
};

export default BlogPostContentContent;

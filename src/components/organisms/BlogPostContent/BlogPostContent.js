import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Container from 'components/particles/Container';
import BlogPostContentContent from 'components/molecules/BlogPostContentContent';
import S from './BlogPostContent.styles';

const BlogPostContent = ({ content }) => {
  const parsedContent = parse(content);

  return (
    <S.Wrapper>
      <Container axis="both" doubling="x">
        <BlogPostContentContent content={parsedContent} />
      </Container>
    </S.Wrapper>
  );
};

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPostContent;

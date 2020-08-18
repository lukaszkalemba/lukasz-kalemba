import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Container from 'components/particles/Container';
import BlogPostContentBody from 'components/molecules/BlogPostContentBody';
import S from './BlogPostContent.styles';

const BlogPostContent = ({ content }) => {
  const parsedContent = parse(content);

  console.log(parsedContent[0]);

  return (
    <S.Wrapper>
      <Container axis="both" doubling="x">
        <BlogPostContentBody content={parsedContent} />
      </Container>
    </S.Wrapper>
  );
};

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPostContent;

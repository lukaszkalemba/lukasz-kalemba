import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Container from 'components/common/Container';
import ContentItem from 'components/blog-post-page/ContentItem';
import S from './BlogPostContent.styles';

const BlogPostContent = ({ content }) => {
  const parsedContent = parse(content);

  return (
    <S.Wrapper>
      <Container axis="both">
        <Container axis="x">
          <S.Content>
            {parsedContent.map(item => (
              <ContentItem key={item.key} content={item} />
            ))}
          </S.Content>
        </Container>
      </Container>
    </S.Wrapper>
  );
};

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPostContent;

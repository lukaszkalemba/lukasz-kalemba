import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import Container from 'components/common/Container';
import S from './BlogPostContent.styles';

const BlogPostContent = ({ content }) => {
  return (
    <S.Wrapper>
      <Container axis="both">
        <Container axis="x">
          <S.Content>{parse(content)}</S.Content>
        </Container>
      </Container>
    </S.Wrapper>
  );
};

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPostContent;

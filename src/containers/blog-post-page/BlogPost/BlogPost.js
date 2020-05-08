import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/common/Container';
import S from './BlogPost.styles';

const BlogPost = ({ title, content, publicationDate, image }) => {
  return (
    <Container axis="both">
      <S.Wrapper>
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <p>{publicationDate}</p>
        </div>

        <S.ImageWrapper>
          <S.Image fluid={image.fluid} />
        </S.ImageWrapper>
      </S.Wrapper>
    </Container>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object,
  }).isRequired,
};

export default BlogPost;

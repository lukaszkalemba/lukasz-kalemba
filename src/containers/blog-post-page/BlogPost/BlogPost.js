import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Heading from 'components/common/Heading';
import Container from 'components/common/Container';
import S from './BlogPost.styles';

const BlogPost = ({ title, content, publicationDate, image }) => {
  const date = moment(publicationDate).format('DD.MM.YYYYr.');

  return (
    <Container axis="both">
      <S.Wrapper>
        <div>
          <Heading>{title}</Heading>
          <p>{content}</p>
          <p>Data publikacji: {date}</p>
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

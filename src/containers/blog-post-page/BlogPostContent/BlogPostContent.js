import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import parse from 'html-react-parser';
import Container from 'components/common/Container';
import S from './BlogPostContent.styles';

const variants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
  initial: { opacity: 0.3, y: 100 },
};

const BlogPostContent = ({ content }) => {
  const animation = useAnimation();

  const [wrapperRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      animation.start('animate');
    }
  }, [animation, inView]);

  const parsedContent = parse(content).map(item => {
    return (
      <S.ContentItemWrapper
        key={item.key}
        ref={wrapperRef}
        variants={variants}
        animate={animation}
        initial="initial"
      >
        {item}
      </S.ContentItemWrapper>
    );
  });

  return (
    <S.Wrapper>
      <Container axis="both">
        <Container axis="x">
          <S.Content>{parsedContent}</S.Content>
        </Container>
      </Container>
    </S.Wrapper>
  );
};

BlogPostContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlogPostContent;

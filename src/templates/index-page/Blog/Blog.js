import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/commons/Container';
import Heading from 'components/commons/Heading';
import Card from 'components/commons/Card';
import Link from 'components/commons/Link';
import S from './Blog.styles';

const BLOG_POSTS_QUERY = graphql`
  {
    blogPosts: allDatoCmsBlogPost {
      edges {
        node {
          id
          title
          content
          publicationDate
          image {
            path
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const { blogPosts } = useStaticQuery(BLOG_POSTS_QUERY);

  return (
    <S.Section>
      <Container axis="both">
        <Heading section="blog">Najnowsze informacje.</Heading>
        <Container axis="x">
          <S.Cards>
            {blogPosts.edges.map(({ node }, index) => (
              <Card key={node.id} index={index + 10} title={node.title} small />
            ))}
          </S.Cards>
          <Link to="/blog">Sprawdź inne</Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default Blog;

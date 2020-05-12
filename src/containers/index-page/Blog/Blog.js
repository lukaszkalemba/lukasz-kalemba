import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/common/Container';
import Heading from 'components/common/Heading';
import Card from 'components/common/Card';
import Link from 'components/common/Link';
import S from './Blog.styles';

const BLOG_POSTS_QUERY = graphql`
  {
    blogPosts: allDatoCmsBlogPost(filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          title
          content
          publicationDate
          slug
          image {
            fluid {
              ...GatsbyDatoCmsFluid_noBase64
            }
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
        <Heading>Najnowsze informacje.</Heading>
        <Container axis="x">
          <S.Cards>
            {blogPosts.edges.map(({ node }, index) => (
              <Card
                key={node.id}
                index={index + 100}
                title={node.title}
                image={node.image}
                slug={node.slug}
                preSlug="blog"
                small
              />
            ))}
          </S.Cards>
          <Link to="/blog" animate>
            Sprawdź inne
          </Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default Blog;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/particles/Container';
import Cards from 'components/molecules/CardsWrapper';
import Heading from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import S from './FeaturedBlogPosts.styles';

const BLOG_POSTS_QUERY = graphql`
  {
    blogPosts: allDatoCmsBlogPost(filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          title
          content
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

const FeaturedBlogPosts = () => {
  const { blogPosts } = useStaticQuery(BLOG_POSTS_QUERY);

  return (
    <S.Section>
      <Container axis="both">
        <Heading>Najnowsze informacje.</Heading>
        <Container axis="x">
          <Cards items={blogPosts} pageSlug="blog" smallCards />

          <Link to="/blog" animate>
            Sprawdź inne
          </Link>
        </Container>
      </Container>
    </S.Section>
  );
};

export default FeaturedBlogPosts;

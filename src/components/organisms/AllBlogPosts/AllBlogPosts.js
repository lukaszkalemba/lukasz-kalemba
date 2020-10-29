import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/particles/Container';
import Cards from 'components/molecules/CardsWrapper';
import Heading from 'components/atoms/Heading';
import S from './AllBlogPosts.styles';

const BLOG_POSTS_QUERY = graphql`
  {
    blogPosts: allDatoCmsBlogPost {
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

const AllBlogPosts = () => {
  const { blogPosts } = useStaticQuery(BLOG_POSTS_QUERY);

  const areCardsEven = blogPosts.edges.length % 2 === 0;

  return (
    <S.Container axis="both" doubling="x" areCardsEven={areCardsEven}>
      <Heading tag="h1">Blog.</Heading>

      <Container axis="x">
        <Cards items={blogPosts} pageSlug="blog" smallCards />
      </Container>
    </S.Container>
  );
};

export default AllBlogPosts;

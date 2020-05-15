import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/common/Container';
import Heading from 'components/common/Heading';
import Card from 'components/common/Card';
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

  return (
    <>
      <Container axis="both">
        <Container axis="x">
          <Heading>Blog.</Heading>

          <Container axis="x">
            <S.Cards>
              {blogPosts.edges.map(({ node }, index) => (
                <Card
                  key={node.id}
                  index={index}
                  title={node.title}
                  slug={node.slug}
                  image={node.image}
                  preSlug="blog"
                  small
                />
              ))}
            </S.Cards>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default AllBlogPosts;

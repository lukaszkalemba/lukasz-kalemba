import { graphql } from 'gatsby';

export const IMAGES_QUERY = graphql`
  {
    images: allFile {
      edges {
        node {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

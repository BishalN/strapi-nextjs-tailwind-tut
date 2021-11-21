import { gql } from 'graphql-request';

export const blogPathsQuery = gql`
  query BlogPaths {
    posts {
      slug
    }
  }
`;

export const blogPageQuery = gql`
  query Blog($slug: String!) {
    posts(where: { slug: $slug }) {
      title
      slug
      description
      updated_at
      topics
      author {
        name
        bio
        avatar {
          formats
        }
      }
      playlist {
        posts {
          updated_at
          title
          slug
          description
          topics
        }
      }
    }
  }
`;

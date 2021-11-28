import { gql } from 'graphql-request';

export const playlistsQuery = gql`
  query Playlists {
    playlists {
      title
      description
      id
      slug
      posts(sort: "updated_at:desc", limit: 3) {
        updated_at
        title
        slug
        description
        topics
      }
    }
  }
`;

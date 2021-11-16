import { gql } from 'graphql-request';

export const playlistPathsQuery = gql`
  query PlaylistPaths {
    playlists {
      slug
    }
  }
`;

export const playlistQuery = gql`
  query Playlist($slug: String!) {
    playlists(where: { slug: $slug }) {
      title
      description
      slug
      posts(sort: "updated_at:desc") {
        id
        updated_at
        title
        slug
        description
        topics
      }
    }
  }
`;

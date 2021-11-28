import { gql } from 'graphql-request';

export const homePageQuery = gql`
  query HomePage {
    homepage {
      creditText
      Hero {
        title
        navlinks
        profile {
          url
          height
          width
        }
      }
      About {
        work
        blogs
        watch
        email
      }
      Project {
        title
        description
        tools
        image {
          url
          height
          width
        }
        url
        bg {
          url
        }
      }
      Contact {
        email
        insta
        linkedin
        twitter
        youtube
        title
      }
    }
    posts(sort: "updated_at:desc", limit: 3) {
      updated_at
      title
      slug
      description
      topics
    }
  }
`;

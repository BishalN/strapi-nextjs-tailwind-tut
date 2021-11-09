import { gql } from 'graphql-request';

export const homePageQuery = gql`
  query HomePage {
    homepage {
      Hero {
        title
        navlinks
        profile {
          url
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
  }
`;

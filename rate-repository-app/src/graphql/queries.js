import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
    edges {
      node {
        id
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        ownerAvatarUrl
        description
        language
      }
    }
  }
}
`;
export const GET_REPOSITORY = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    ownerAvatarUrl
    description
    language
    url
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;
export const GET_REVIEWS = gql`
{
  repository(id: "jaredpalmer.formik") {
    id
    fullName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;
export const GET_CURRENT_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;
// other queries...
import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation($authenticateCredentials: AuthenticateInput) {
    authenticate(credentials: $authenticateCredentials) {
      accessToken
    }
  }
`;
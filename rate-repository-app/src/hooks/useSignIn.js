import { useMutation } from '@apollo/client/react';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {

    const response = await mutate({ variables: {
      "authenticateCredentials": {
        username,
        password
      }
    }});
    await authStorage.setAccessToken(response.data.authenticate.accessToken);
    apolloClient.resetStore();
    return response;
  };

  return [signIn, result];
};
export default useSignIn;
import { useMutation } from '@apollo/client/react';
import { LOGIN } from '../graphql/mutations';
const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {

    return await mutate({ variables: {
      "authenticateCredentials": {
        username,
        password
      }
    }});
    // call the mutate function here with the right arguments
  };

  return [signIn, result];
};
export default useSignIn;
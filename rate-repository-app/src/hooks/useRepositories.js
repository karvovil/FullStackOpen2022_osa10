import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';

const useRepositories = () => {

  const { loading, data, refetch } = useQuery(
    GET_REPOSITORIES,
    {fetchPolicy: 'cache-and-network',}
  );
  return { repositories: data.repositories, loading, refetch};
};

export default useRepositories;
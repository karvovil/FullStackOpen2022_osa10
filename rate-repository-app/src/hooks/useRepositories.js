import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';
import { useState } from 'react';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const {loading, refetch} = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: 'cache-and-network',
      onCompleted: data => setRepositories(data.repositories)
    }
  );
  return { repositories, loading, refetch};
};

export default useRepositories;
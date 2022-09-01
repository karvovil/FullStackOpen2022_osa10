import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client/react';
import { useState } from 'react';

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();

  const { data, loading, fetchMore, refetch} = useQuery(
    GET_REPOSITORIES,
    {
      variables: variables,
      fetchPolicy: 'cache-and-network',
      onCompleted: data => setRepositories(data.repositories)
    }
  );
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    refetch,
  };
};

export default useRepositories;
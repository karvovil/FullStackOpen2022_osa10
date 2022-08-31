import { FlatList, StyleSheet, View, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import SortMenu from './SortMenu';
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;
const variables = {
  latest: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC"
  },
  highest: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC"
  },
  lowest: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC"
  },
};

export const RepositoryListContainer = ({ repositories, loading, sort, handleSortChange }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  if (loading) return <Text>Loading ...</Text>;
  return (
    <FlatList
      ListHeaderComponent={<SortMenu handleSortChange={handleSortChange} sort={sort}/>}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item})=><RepositoryItem item={item}/> }
      keyExtractor={item=>item.id}
    />
  );
};
const RepositoryList = () => {
  const [ sort, setSort ] = useState('latest');
  const { repositories, loading } = useRepositories(variables[sort]);

  const handleSortChange = (itemValue) => { setSort(itemValue); };

  return <RepositoryListContainer
    repositories={repositories}
    loading={loading}
    sort={sort}
    handleSortChange={handleSortChange}
  />;
};
export default RepositoryList;
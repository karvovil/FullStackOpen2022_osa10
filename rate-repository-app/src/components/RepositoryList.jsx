import { FlatList, StyleSheet, View, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, loading }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  if (loading) return <Text>Loading ...</Text>;
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem = {RepositoryItem}
    />
  );
};
const RepositoryList = () => {
  const { repositories, loading } = useRepositories();

  return <RepositoryListContainer repositories={repositories} loading={loading}/>;
};

export default RepositoryList;
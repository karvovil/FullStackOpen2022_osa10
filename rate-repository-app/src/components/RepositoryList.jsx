import { FlatList, StyleSheet, View} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import SortMenu from './SortMenu';
import { useState } from "react";
import FilterInput from './FilterInput';
import { useDebounce } from "use-debounce";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories, sort, handleSortChange, handleFilterChange, onEndReach
}) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <FilterInput key="editor1" handleFilterChange={handleFilterChange}/>
          <SortMenu handleSortChange={handleSortChange} sort={sort}/>
        </>
      }
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item})=><RepositoryItem item={item}/> }
      keyExtractor={item=>item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  );
};
const RepositoryList = () => {
  const [ sort, setSort ] = useState('latest');
  const [ filter, setFilter ] = useState('');
  const [debouncedFilter] = useDebounce(filter, 500);

  const orderBy = sort === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE';
  const orderDirection = sort === 'lowest' ? 'ASC' : 'DESC';

  const queryVariables = {
    orderBy,
    orderDirection,
    searchKeyword: debouncedFilter,
    first: 8,
  };

  const { repositories, fetchMore } = useRepositories(queryVariables);

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };
  const handleSortChange = (itemValue) => { setSort(itemValue); };
  const handleFilterChange = (filterValue) => { setFilter(filterValue); };

  return <RepositoryListContainer
    repositories={repositories}
    sort={sort}
    handleSortChange={handleSortChange}
    handleFilterChange={handleFilterChange}
    onEndReach={onEndReach}
  />;
};
export default RepositoryList;
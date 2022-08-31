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

export const RepositoryListContainer = ({ repositories, sort, handleSortChange, handleFilterChange }) => {
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
  };

  const { repositories } = useRepositories(queryVariables);

  const handleSortChange = (itemValue) => { setSort(itemValue); };
  const handleFilterChange = (filterValue) => { setFilter(filterValue); };

  return <RepositoryListContainer
    repositories={repositories}
    sort={sort}
    handleSortChange={handleSortChange}
    handleFilterChange={handleFilterChange}
  />;
};
export default RepositoryList;
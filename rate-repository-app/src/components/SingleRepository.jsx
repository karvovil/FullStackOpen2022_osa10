import RepositoryItem from "./RepositoryItem";
import {useParams} from 'react-router-dom';
import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import * as Linking from 'expo-linking';
import { FlatList, Text, View, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  const openUrl = () => {Linking.openURL(repository.url);};
  return(
    <>
      <RepositoryItem item={repository} openUrl={openUrl} />
      <ItemSeparator />
    </>
  );
};

const SingleRepository = () => {

  const { id } = useParams();
  const variables = {
    repositoryId: id,
    first: 6,
  };
  const {data, loading, fetchMore} = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const onEndReach = () => {
    console.log('You have reached the end of REVIEWS');
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  if (loading) return <Text>Loading ...</Text>;

  const reviewNodes = data.repository
    ? data.repository.reviews.edges.map(edge => edge.node)
    : [];
  return (
    <FlatList
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  );
};
export default SingleRepository;
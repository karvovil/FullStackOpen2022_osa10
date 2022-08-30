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
  const {data, loading} = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables:{repositoryId: id}});

  if (loading) return <Text>Loading ...</Text>;

  const reviewNodes = data.repository
    ? data.repository.reviews.edges.map(edge => edge.node)
    : [];
  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
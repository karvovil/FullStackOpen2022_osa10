import { FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/queries";
import Text from "../Text";
import ReviewItemForMyRepositories from "./ReviewItemForMyRepositories";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;
const MyReviews = () => {

  const {data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {"includeReviews": true},
  });

  if (loading) return <Text>Loading ...</Text>;

  const reviewNodes = data.me.reviews
    ? data.me.reviews.edges.map(edge => edge.node)
    : [];

  return(
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItemForMyRepositories review={item} refetch={refetch} />}
      keyExtractor={({ id }) => id}
    />
  );
};
export default MyReviews;
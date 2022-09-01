import { StyleSheet, View, Pressable, Alert } from "react-native";
import Text from './Text';
import { BaseReviewItem } from "./ReviewItem";
import theme from '../theme';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client/react';
import { DELETE_REVIEW } from "../graphql/queries";

const styles = StyleSheet.create({
  redButton: {
    padding: 15,
    margin: 10,
    backgroundColor: 'crimson',
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    justifyContent: 'center',
    flexGrow: 1,
  },
  blueButton: {
    padding: 15,
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    justifyContent: 'center',
    flexGrow: 1,
  },
  buttonText: {
    color: "#fff",
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

const ReviewItemForMyRepositories = ({ review, refetch }) => {

  const navigate = useNavigate();
  const [mutate] = useMutation(DELETE_REVIEW);

  const goToRepository = () => {
    navigate(`/${review.repositoryId}`, { replace: true });
  };
  const deleteThisReview = async () => {
    await mutate({ variables: { "deleteReviewId": review.id}});
    refetch();
  };
  const deleteReview = async () => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => deleteThisReview()
        }
      ]
    );
  };

  return(
    <>
      <BaseReviewItem review={review} headingText={review.repository.fullName} />
      <View style={styles.container}>
        <Pressable onPress={goToRepository} style={styles.blueButton}>
          <Text style={styles.buttonText} fontSize = 'subheading' fontWeight="bold">
            View Repository
          </Text>
        </Pressable>
        <Pressable onPress={() => deleteReview()} style={styles.redButton}>
          <Text style={styles.buttonText} fontSize = 'subheading' fontWeight="bold">
            Delete Review
          </Text>
        </Pressable>

      </View>
    </>
  );
};
export default ReviewItemForMyRepositories;
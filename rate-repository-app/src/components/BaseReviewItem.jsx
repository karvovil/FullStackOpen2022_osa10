import { StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { format } from 'date-fns';

const styles = StyleSheet.create({
  verticalFlexContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    padding: 10,
    paddingTop: 5,
  },
  horizontalFlexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white',
  },
  ratingText: {
    borderWidth: 3,
    borderColor: theme.colors.primary,
    fontSize: 22,
    textAlign: "center",
    textAlignVertical: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
  },
});
const humanReadableDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'dd.MM.yyyy');
};

const BaseReviewItem = ({ review, headingText }) => {
  return(
    <View style = {styles.horizontalFlexContainer}>
      <Text style={styles.ratingText} fontWeight="bold" color='primary'>
        {review.rating.toString()}
      </Text>
      <View style = {styles.verticalFlexContainer}>
        <Text fontSize = 'subheading' fontWeight="bold">
          {headingText}
        </Text>
        <Text style={{ paddingBottom: 7 }} color='textSecondary'>
          {humanReadableDate(review.createdAt)}
        </Text>
        <Text style={styles.textStyle}>
          {review.text}
        </Text>
      </View>
    </View>
  );
};


export default BaseReviewItem;
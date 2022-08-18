import { StyleSheet, View } from 'react-native';
import Text from './Text';
const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 5,
    paddingTop: 5,
  },
  verticalFlex:{
    alignItems: 'center',
  },
  flexItem: {
    flexGrow: 1,
  },

});
const round = (num) => `${Math.round(num/100)/10}k`

const ReviewBar = ({item}) => {
  return(
    <View style = {styles.flexContainer}>
      <View style = {styles.verticalFlex}>
        <Text fontWeight='bold'>
          {item.stargazersCount < 999
            ? item.stargazersCount
            : round(item.stargazersCount)}
        </Text>
        <Text color='textSecondary'>stars</Text>
      </View>
      <View style = {styles.verticalFlex}>
        <Text fontWeight='bold'>
          {item.forksCount < 999
            ? item.forksCount
            : round(item.forksCount)}
        </Text>
        <Text color='textSecondary'>forks</Text>
      </View>
      <View style = {styles.verticalFlex}>
        <Text fontWeight='bold'>
          {item.reviewCount < 999
            ? item.reviewCount
            : round(item.reviewCount)}
        </Text>
        <Text color='textSecondary'>reviews</Text>
      </View>
      <View style = {styles.verticalFlex}>
        <Text fontWeight='bold'>
          {item.ratingAverage}
        </Text>
        <Text color='textSecondary'>rating</Text>
      </View>
    </View>
  )
}
export default ReviewBar
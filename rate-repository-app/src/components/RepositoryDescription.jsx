import Text from "./Text"
import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textStyle: {
    paddingBottom: 5,
    paddingLeft: 10,
    flexWrap: "wrap"
  },
})
const RepositoryDescription = ({item}) => {

  return(
    <View style = {styles.flexContainer}>
      <Text style={styles.textStyle} fontSize = 'subheading' fontWeight="bold">
        {item.fullName}
      </Text>
      <Text style={styles.textStyle} color = 'textSecondary'>
        {item.description}
      </Text>
      <Text style={styles.textStyle} fontSize='subheading' fontWeight='bold' color='primary'>
        {item.language}
      </Text>
    </View>
  )
}
export default RepositoryDescription
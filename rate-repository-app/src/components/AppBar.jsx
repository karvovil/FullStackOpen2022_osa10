import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight/2,
    backgroundColor: '#24292e',
    // ...
  },
  text: {
    color: 'white'
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
          Repositories
        </Text>
      </Pressable>
    </View>
  )
}

export default AppBar;
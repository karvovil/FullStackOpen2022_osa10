import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from "react-router-native";


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight/2,
    backgroundColor: '#24292e',
    // ...
  },
  text: {
    color: 'white',
    margin: 10,
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <Link to="/">
          <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
          Repositories
          </Text>
        </Link>
        <Link to="/signIn">
          <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
          Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import SignOut from './SignOut';
import { Link } from "react-router-native";
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight/2,
    backgroundColor: '#24292e',
  },
  text: {
    color: 'white',
    margin: 10,
  }
});

const SignInLink = () => {
  return(
    <Link to="/signIn">
      <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
        Sign In
      </Text>
    </Link>
  );
};
const ReviewLink = () => {
  return(
    <Link to="/review">
      <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
        Create a review
      </Text>
    </Link>
  );
};
const AppBar = () => {
  const {data} = useQuery(GET_CURRENT_USER);

  const showReviewLinkIfSignedIn =
  data === undefined ? null
    : data.me ? <ReviewLink/>
      : null;

  const signInOrOut =
  data === undefined ? null
    : data.me ? <SignOut/>
      : <SignInLink/>;

  return (
    <View style={styles.container}>
      <ScrollView horizontal >
        <Link to="/">
          <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
          Repositories
          </Text>
        </Link>
        {showReviewLinkIfSignedIn}
        {signInOrOut}
      </ScrollView>
    </View>
  );
};
export default AppBar;
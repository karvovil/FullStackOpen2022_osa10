import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    margin: 10,
  }
  // ...
});

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return(
    <Pressable onPress={ handleSignOut }>
      <Text fontSize='subheading' fontWeight='bold' style={styles.text}>
          Sign Out
      </Text>
    </Pressable>
  );
};
export default SignOut;
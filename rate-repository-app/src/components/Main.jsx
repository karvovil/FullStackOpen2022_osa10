import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';
import Review from './Review';
import MyReviews from './MyReviews';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  console.log('started repo app');
  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="review" element={<Review />} exact />
        <Route path="myReviews" element={<MyReviews />} exact />
        <Route path="signIn" element={<SignIn />} exact />
        <Route path="signUp" element={<SignUp />} exact />
        <Route path="/:id" element={<SingleRepository/>} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};
export default Main;
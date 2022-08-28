import { View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from "react-router-dom";
import BigBlueButton from './BigBlueButton';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    flexShrink: 0,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
      <BigBlueButton buttonText='Sign In' onSubmit={onSubmit}/>
    </View>
  );
};
export const SignInContainer = ({onSubmit}) => {
  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {

  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer
    signIn={signIn}
    onSubmit={onSubmit}
  />;
};
export default SignIn;
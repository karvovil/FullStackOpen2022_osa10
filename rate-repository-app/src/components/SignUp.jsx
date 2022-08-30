import { View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import BigBlueButton from './BigBlueButton';
import { CREATE_USER } from '../graphql/mutations';
import { useMutation } from '@apollo/client/react';
import useSignIn from '../hooks/useSignIn';

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
  confirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Must be at least 1 long')
    .max(30, 'Max 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Must be at least 5 long')
    .max(30, 'Max 50 characters'),
  confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username" placeholder="Username"
      />
      <FormikTextInput
        name="password" placeholder="Password" secureTextEntry={true}
      />
      <FormikTextInput
        name="confirmation"
        placeholder="Password confirmation"
        secureTextEntry={true}
      />
      <BigBlueButton buttonText='Sign Up' onSubmit={onSubmit}/>
    </View>
  );
};

const SignUp = () => {
  const [mutate] = useMutation(CREATE_USER);
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    try {
      const response = await mutate({ variables: {
        "user": {
          username: values.username,
          password: values.password,
        }
      }});
      await signIn({
        username: response.data.createUser.username,
        password: values.password
      });
      navigate(`/`, { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
export default SignUp;
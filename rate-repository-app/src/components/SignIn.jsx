import Text from './Text';
import { View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Pressable } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';
const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    flexShrink: 0,
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    justifyContent: 'center',

  },
  buttonText: {
    color: "#fff",
    textAlign: 'center',
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
      <Pressable onPress={ onSubmit } style={styles.button}>
        <Text style={styles.buttonText} fontSize = 'subheading' fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignIn;
import { View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import BigBlueButton from './BigBlueButton';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useMutation } from '@apollo/client/react';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    flexShrink: 0,
  },
});

const initialValues = {
  owner: '',
  repositoryName: '',
  rating: '',
  reviewText: '',
};

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .required('Rating is required')
    .min(0, 'Min value 0.')
    .max(100, 'Max value 100.'),
  reviewText: yup
    .string()
    .optional(),
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="owner" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="reviewText" placeholder="Review" />
      <BigBlueButton buttonText='Create a review' onSubmit={onSubmit}/>
    </View>
  );
};

const Review = () => {
  const [mutate] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await mutate({ variables: {
        "review": {
          repositoryName: values.repositoryName,
          ownerName: values.owner,
          rating: Number(values.rating),
          text: values.reviewText
        }
      }});
      navigate(`../${response.data.createReview.repositoryId}`, { replace: true });
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
export default Review;
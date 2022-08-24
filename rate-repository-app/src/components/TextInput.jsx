import { TextInput as NativeTextInput, StyleSheet  } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({

  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    color: theme.colors.textSecondary,
    borderRadius: 5,
  },

});

const TextInput = ({ style,  error,  ...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
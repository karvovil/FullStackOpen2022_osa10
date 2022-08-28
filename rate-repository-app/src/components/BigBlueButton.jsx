import Text from './Text';
import { Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
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

const BigBlueButton = ({ onSubmit, buttonText }) => {

  return (
    <Pressable onPress={ onSubmit } style={styles.button}>
      <Text style={styles.buttonText} fontSize = 'subheading' fontWeight="bold">
        {buttonText}
      </Text>
    </Pressable>

  );
};
export default BigBlueButton;
import { StyleSheet, View } from 'react-native';
import { useState } from "react";
import Text from './Text';
import {Picker} from '@react-native-picker/picker';

const SortMenu = () => {
  const [sortingOrder, setSortingOrder] = useState('Latest repositories');

  return (
    <Picker
      selectedValue={sortingOrder}
      onValueChange={(itemValue, itemIndex) =>
        setSortingOrder(itemValue)
      }>
      <Picker.Item label="Latest repositories" value="Latest" />
      <Picker.Item label="Highest rated repositories" value="Highest" />
      <Picker.Item label="Lowest rated repositories" value="Lowest" />
    </Picker>
  );
};
export default SortMenu;
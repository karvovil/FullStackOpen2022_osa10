import {Picker} from '@react-native-picker/picker';

const SortMenu = ({ handleSortChange, sort }) => {

  return (
    <Picker
      selectedValue={sort}
      onValueChange={(itemValue) =>{
        handleSortChange(itemValue);
      }}>
      <Picker.Item label="Latest repositories" value={'latest'} />
      <Picker.Item label="Highest rated repositories" value={'highest'} />
      <Picker.Item label="Lowest rated repositories" value={'lowest'} />
    </Picker>
  );
};
export default SortMenu;
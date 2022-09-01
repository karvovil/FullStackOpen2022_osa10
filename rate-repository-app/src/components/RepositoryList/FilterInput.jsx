import TextInput from '../TextInput';

const FilterInput = ({handleFilterChange}) => {

  return(
    <TextInput
      placeholder="Search"
      onChangeText={(value) => handleFilterChange(value)}
    />
  );
};
export default FilterInput;
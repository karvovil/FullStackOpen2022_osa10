import { Image, StyleSheet, View } from 'react-native';
import RepositoryDescription from './RepositoryDescription';
import ReviewBar from './RewiewBar';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-around',
    padding: 5,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,

  },
  flexItem: {
    flexGrow: 1,
  },
  avatar: {
    width: 60,
    height: 60,
  },
});
const RepositoryItem = ({item}) => {

  return (
    <View style={ styles.itemContainer }>

      <View style = {styles.flexContainer}>

        <Image
          style = {styles.avatar}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />

        <RepositoryDescription item={item}/>

      </View>

      <ReviewBar item = {item}/>

    </View>
  );
};
export default RepositoryItem;
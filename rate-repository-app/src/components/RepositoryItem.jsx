import { Image, Pressable, StyleSheet, View } from 'react-native';
import BigBlueButton from './BigBlueButton';
import RepositoryDescription from './RepositoryDescription';
import ReviewBar from './RewiewBar';
import { useNavigate } from "react-router-dom";

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
const RepositoryItem = ({item, openUrl}) => {

  const navigate = useNavigate();
  const goToRepository = () => {navigate(`${item.id}`, { replace: true });};

  return (
    <Pressable onPress={ goToRepository } >
      <View testID="repositoryItem" style={ styles.itemContainer }>
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
        {openUrl && <BigBlueButton buttonText='Open in GitHub' onSubmit={openUrl}/> }
      </View>
    </Pressable>
  );
};
export default RepositoryItem;
import { Text } from 'react-native';

const RepositoryItem = ({item}) => {

    return (
        <Text>
            fullname: {item.fullName}{"\n"}
            description: {item.description}{"\n"}
            language: {item.language}{"\n"}
            stars: {item.stargazersCount}{"\n"}
            forks: {item.forksCount}{"\n"}
            reviews: {item.reviewCount}{"\n"}
            rating: {item.ratingAverage}{"\n"}
        </Text>
    );
  };
  export default RepositoryItem
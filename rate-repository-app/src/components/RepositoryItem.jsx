import { Text } from 'react-native';

const RepositoryItem = ({item}) => {

    return (
        <Text>
            fullname: {item.fullName}
            description: {item.description}
            language: {item.language}
            stars: {item.stargazersCount}
            forks: {item.forksCount}
            reviews: {item.reviewCount}
            rating: {item.ratingAverage}
        </Text>
    );
  };
  export default RepositoryItem
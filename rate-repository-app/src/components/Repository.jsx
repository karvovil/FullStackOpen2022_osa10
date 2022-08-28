import RepositoryItem from "./RepositoryItem";
import {useParams} from 'react-router-dom';
import { GET_REPOSITORY } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import * as Linking from 'expo-linking';

const Repository = () => {
  const { id } = useParams();
  const {data} = useQuery(GET_REPOSITORY, {variables:{repositoryId: id}});

  const openUrl = () => {
    Linking.openURL(data.repository.url);
  };

  if(data === undefined) return null;
  return (
    <RepositoryItem item={data.repository} openUrl={openUrl}/>
  );
};
export default Repository;
import React from "react";
import Loader from "../components/Loader";
import UserProfile from "../components/UserProfile";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../fragment";
import { useQuery } from "react-apollo-hooks";
import { ScrollView } from "react-native-gesture-handler";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export default ({ navigation }) => {
  const { loading, data, refetch } = useQuery(GET_USER, {
    variables: { username: navigation.getParam("username") }
  });
  const refresh = async () => {
    await refetch();
  };
  refresh();

  return <ScrollView>{loading ? <Loader /> : data && data.seeUser && <UserProfile {...data.seeUser} />}</ScrollView>;
};

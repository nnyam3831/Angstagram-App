import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { POST_FRAGMENT } from "../fragment";
import { useQuery } from "react-apollo-hooks";
import Loader from "../components/Loader";
import Post from "../components/Post";
import { ScrollView } from "react-native";

const POST_DETAIL = gql`
  query seeFullPost($id: String!) {
    seeFullPost(postId: $id) {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;
const View = styled.View``;
const Text = styled.Text``;

export default ({ navigation }) => {
  const { loading, data } = useQuery(POST_DETAIL, {
    variables: { id: navigation.getParam("id") }
  });
  return (
    <ScrollView>
      {loading ? (
        <Loader />
      ) : (
        data && data.seeFullPost && <Post {...data.seeFullPost} />
      )}
    </ScrollView>
  );
};

// Feed 불러오기
import React, { useState } from "react";
import styled from "styled-components";
import { Picker, AsyncStorage, TextInput, ScrollView, RefreshControl } from "react-native";
import ModalSelector from "react-native-modal-selector";
import SelectInput from "react-native-select-input-ios";
import constants from "../../constants";
import Loader from "../../components/Loader";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Post from "../../components/Post";

const FEED_QUERY = gql`
  query seeFeed($sort: SORT!) {
    seeFeed(sort: $sort) {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
    }
  }
`;
const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const { loading, data, refetch } = useQuery(FEED_QUERY, {
    variables: {
      sort: "createdAt_DESC"
    },
    fetchPolicy: "network-only"
  });

  const refresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}>
      {loading ? <Loader /> : data && data.seeFeed && data.seeFeed.map(post => <Post key={post.id} {...post} />)}
    </ScrollView>
  );
};
